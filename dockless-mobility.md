# Dockless-Mobility

This page contains technical details related to our management of dockless mobility data \(e-scooters, bicycles, etc\).

## Mobility Data Specification \(MDS\)

We require dockless mobility operators to provide us with real-time trip reporting feeds in compliance with the [mobility data specification](https://github.com/CityOfLosAngeles/mobility-data-specification).

## Data Capture

We collect dockless trip records from each provider using a [Python mds client](dockless-mobility.md) which stores processed data in a [Postgrest](http://postgrest.org) database.

* [transportation-dockless-processing](https://github.com/cityofaustin/transportation-dockless-processing)
* [MDS Provider Client](https://github.com/cityofaustin/mds-provider-client)

## Public Trip Records and Privacy

We believe strongly that we do our best work when we work openly. It’s why we’ve built all of our reporting infrastructure on top of open data, and we’re continuing that practice with dockless mobility data.

We publish anonymized dockless trip records to our open data portal on an hourly basis. The dataset is [here](https://data.austintexas.gov/Transportation-and-Mobility/Dockless-Vehicle-Trips/7d8e-dm7r/).

We have been very thoughtful about how we are approaching the release of this data. We are following the recommendations outlined in the Civic Analytics Network’s recent [open letter](https://datasmart.ash.harvard.edu/news/article/civic-analytics-network-dockless-mobility-open-letter), which was signed by Chief Data Officers and industry experts across the country.

Specifically, our trip records:

* Do not include any vendor-provided identifiers. The trip IDs and device IDs in our dataset are completely arbitrary and cannot be traced to a specific operator.
* Have start and end times rounded to the nearest 15 minutes.
* Use latitude and longitude values rounded to three decimal degrees \(roughly the area of a city block\).

## Reporting Dashboard

You can view monthly dockless trip summaries [here](http://transportation.austintexas.io/dockless-data/)

This is a public website that pulls directly from our public datasets. [Here's the source code](https://github.com/cityofaustin/transportation-datahub).

## Trip Explorer

We have built an interactive web map which visualizes where dockless trips are starting and ending. We’re calling it the Dockless Data Explorer, available at [dockless.austintexas.io](http://dockless.austintexas.io).

## Open Source

The source code for our dockless mobility tools is freely available in five repositories \(and counting\):

* [Dockless Data Processing](https://github.com/cityofaustin/transportation-dockless-processing)
* [Transportation Datahub](https://github.com/cityofaustin/transportation-datahub)
* [Dockless API](https://github.com/cityofaustin/transportation-dockless-api)
* [Dockless Dataviz](https://github.com/cityofaustin/transportation-dockless-dataviz)
* [MDS Provider Client](https://github.com/cityofaustin/mds-provider-client)

## Reporting Queries

Here are some handy queries for fetching dockless data summaries from the [Open Data Portal](http://data.austintexas.gov)

### Scooter and Bike trips by Month/Year\*

```text
https://data.austintexas.gov/resource/7d8e-dm7r.json?$query=select avg(trip_duration)/60 as avg_duration_minutes, sum(trip_distance) * 0.000621371 as total_miles, avg(trip_distance) * 0.000621371 as avg_miles, count(trip_id) as total_trips, date_extract_m(start_time) as month, date_extract_y(start_time) as year where trip_distance * 0.000621371 >= 0.1 and trip_distance * 0.000621371 < 500 and trip_duration < 86400 group by year, month
```

### Dockless Trips by vehicle type and month/year\*

```text
https://data.austintexas.gov/resource/7d8e-dm7r.json?$query=select vehicle_type, avg(trip_duration)/60 as avg_duration_minutes, sum(trip_distance) * 0.000621371 as total_miles, avg(trip_distance) * 0.000621371 as avg_miles, count(trip_id) as total_trips, date_extract_m(start_time) as month, date_extract_y(start_time) as year where trip_distance * 0.000621371 >= 0.1 and trip_distance * 0.000621371 < 500 and trip_duration < 86400 group by vehicle_type, year, month
```

\*Denotes that the query includes a filter for min/max distance \(.1 miles / 500 miles\) and max time \(24 hours\)

### Dockless Trips by Day

The `where` clause can be modified to specify year and month. This selects february and march 2019 `date_extract_m(start_time) in (2, 3) and date_extract_y(start_time) = 2019`

```text
https://data.austintexas.gov/resource/7d8e-dm7r.json?$query=select vehicle_type, avg(trip_duration)/60 as avg_duration_minutes, sum(trip_distance) * 0.000621371 as total_miles, avg(trip_distance) * 0.000621371 as avg_miles, count(trip_id) as total_trips, date_trunc_ymd(start_time) as date_ where trip_distance * 0.000621371 >= 0.1 and trip_distance * 0.000621371 < 500 and trip_duration < 86400 and date_extract_m(start_time) in (2, 3) and date_extract_y(start_time) = 2019 group by vehicle_type, date_trunc_ymd(start_time)
```

