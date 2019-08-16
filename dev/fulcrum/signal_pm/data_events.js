function setStatus() {
  SETSTATUS('completed')
}

// config
var signals = { 
    'id' : 'xwqn-2f78',
    'label_field' : 'location_name',
    'value_field' : 'signal_id',
    'search_distance' : 200,  //  meters
};

//  use to limit looping socrata request attempts
var request_attempts = 0;

//  get nearest signal
//  if no signal found within search distance, get all signals
ON('load-record', getLocation);

ON('change', 'clear_signal', function(event) {
    if (event.value == "yes") {
        SETVALUE('signal', '');
        getSignal({"longitude" : "-97.74306", "latitude":"-30.26715"}, get_all==true); 
        SETVALUE('clear_signal', '');
    }
})

function getLocation(){
    //  attempt to get location when record loads
    //  stop when location is found, or after specified SETIMEOUT
    var interval = SETINTERVAL(function() {

        var location = CURRENTLOCATION();

        if (location) {
            CLEARINTERVAL(interval);
            getSignal(location, get_all=true);
        }

    }, 1000);

    SETTIMEOUT(function() {
        CLEARINTERVAL(interval);
    }, 10000);

}


function getSignal(location, get_all=false) {
    //  get nearby signals from socrata and set selection choices
    var search_distance = signals.search_distance;

    if (get_all) {
        search_distance = 100000;
    }

    var url = 'https://data.austintexas.gov/resource/' + signals.id + '.json';

    var options = buildRequestParams(
        url,
        location['latitude'],
        location['longitude'],
        search_distance=search_distance
    );
    
    //  show modal
    PROGRESS('Searching for nearby signals...');

    REQUEST(options, function(error, response, body) {
        //  Exec this function after GET data from socrata endpoint

        //  hide progress modal
        PROGRESS();

        if (error) {
            ALERT('Error with request: ' + options.url);
        } else {
            var data = JSON.parse(body);
            if (data.length) {
                //  populate field selection choices with features
                var choices = getChoices(signals.label_field, signals.value_field, data);
                SETCHOICES('signal', choices);

                if (!$signal) {
                    //  if there is no signal selected
                    //  set field label and value to nearest feature (ie the first one)
                    // SETVALUE('signal', choices[0][0]);
                    SETVALUE('signal', choices[0]);
                };

            } else {
                if (request_attempts < 1) {
                    request_attempts++;
                    getSignal(location, get_all=true);
                }
            }
        }

    });

}


function buildRequestParams(url, lat, lon, search_distance=2000) {
    //  Format request parameters accoring to Socrata query API
    //  Defined here: https://dev.socrata.com/docs/queries/

    // select distance from point to each signal and sort by closest
    var select = '?$query=SELECT signal_id, location_name, DISTANCE_IN_METERS(location, \'POINT(' + lon + ' ' + lat + ')\') AS distance';
    return url + select + ' WHERE control=\'PRIMARY\' and WITHIN_CIRCLE(location, ' + lat + ', ' + lon + ', ' + search_distance + ') ORDER BY distance ASC';    
}


function getChoices(label_field, value_field, choice_data) {
    var choices = [];

    //  format response data as array of fulcrum-friendly selection choices
    for (var i=0; i < choice_data.length; i++) {
        var label = choice_data[i][label_field];
        var value = choice_data[i][value_field];
        // choices.push([label, value]);

        //  we combine label/value to one field
        //  because SETVALUE only takes a string (not an array of label/value pairs)
        choices.push( value + ' | ' + label );
    }

    return choices;
}