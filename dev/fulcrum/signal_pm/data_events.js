function setStatus() {
  SETSTATUS('completed')
}

// config
var signals = { 
    'id' : 'xwqn-2f78',
    'label_field' : 'location_name',
    'value_field' : 'signal_id',
    'search_distance' : 100000,  //  meters (100k meters = ~62 mi)
};

// number of times to try to request socrata data
MAX_REQUESTS = 3

//  use to limit looping socrata request attempts
var REQUEST_ATTEMPTS = 0;

ON('load-record', getLocation);

function getLocation(event){
    //  attempt to get location when record loads
    //  stop when location is found, or after specified SETIMEOUT
    var max_attempts = 10;
    var attempts = 0;

    var interval = SETINTERVAL(function() {

        attempts += 1;

        PROGRESS("Acquiring location...")

        if (CURRENTLOCATION()) {
            // ideally, we get th user's location, and return the list of signals
            // sorted by the nearest signals
            PROGRESS();
            CLEARINTERVAL(interval);
            getSignal(CURRENTLOCATION());

        } else if (attempts == max_attempts) {
            // if unable to get location fetch all signals sorted by nearest to city center
            CLEARINTERVAL(interval);
            ALERT("Unable to find your location.");
            getSignal({"longitude" : "-97.743", "latitude":"30.267"});
        }

    }, 500); // milliseconds
    PROGRESS();
}


function getSignal(location) {

    var search_distance = signals.search_distance;

    var url = 'https://data.austintexas.gov/resource/' + signals.id + '.json';

    var options = buildRequestParams(
        url,
        location['latitude'],
        location['longitude'],
        search_distance = search_distance
    );

    PROGRESS("Fetching signal list...");

    REQUEST(options, function(error, response, body) {
        //  Exec this function after GET data from socrata endpoint
        if (error) {
            ALERT('Error with request: ' + options.url);
        } else {


            var data = JSON.parse(body);
            
            if (data.length > 0) {
                
                PROGRESS();

                //  populate field selection choices with features
                var choices = getChoices(signals.label_field, signals.value_field, data);
                SETCHOICES('signal', choices);

                if (!$signal) {
                    //  if there is no signal selected
                    //  set field label and value to nearest feature (ie the first one)
                    SETVALUE('signal', choices[0]);
                };

            } else {
                if (REQUEST_ATTEMPTS < MAX_REQUESTS) {
                    REQUEST_ATTEMPTS++;
                    getSignal(location);
                } else {
                    PROGRESS();
                    ALERT("Unable to fetch signals. Check your internet connection.");
                }
            }
        }

    });

}


function buildRequestParams(url, lat, lon, search_distance=2000) {
    //  Format request parameters accoring to Socrata query API
    //  Defined here: https://dev.socrata.com/docs/queries/

    // select distance from point to each signal and sort by nearest
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
