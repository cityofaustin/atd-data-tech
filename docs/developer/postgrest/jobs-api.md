# Jobs-API

The Jobs API is a tool for logging the outcome of ETL scripting jobs. It is designed to support the task of "incremental" data loads—i.e., loading only new or updated records from a source database to a destination database.

The typical ETL workflow using the Job API is:

1. At the beginning of your ETL job, query the Job API to retrieve the timestamp of the last time your job ran successfully.
2. Use this timestamp as a temporal filter to extract new/modifed records from the source database.
3. At the completion of your ETL job, register the successful outcome with the Job API.

## Querying the API

The postgREST-provided jobs API is available at [https://atd-postgrest.austinmobility.io/legacy-scripts/jobs](https://atd-postgrest.austinmobility.io/legacy-scripts/jobs), and it can be queried using, as described in the [PostgREST documentation](http://postgrest.org/en/v5.0/api.html). VPN access is required.  You can also query the `api.jobs` table directly from our Postgres read replica.

## Field Definitions:

| Fieldname           | Field Type                        | Description                                                          |
| ------------------- | --------------------------------- | -------------------------------------------------------------------- |
| `id`                | SERIAL PRIMARY KEY                | System-generated incremental ID                                      |
| `name`              | TEXT NOT NULL                     | Name descriptor of the job which uniquely identifies the ETL job     |
| `start_date`        | TIMESTAMP WITH TIME ZONE NOT NULL | The job's start datetime                                             |
| `end_date`          | TIMESTAMP WITH TIME ZONE          | The job's end datetime                                               |
| `message`           | TEXT                              | Optional message                                                     |
| `status`            | TEXT NOT NULL                     | The status of the ETL job. Use 'in\_progress', 'success', or 'error' |
| `records_processed` | INTEGER                           | The number of records processed by the job.                          |
| `source`            | TEXT NOT NULL                     | The name source database of the ETL job.                             |
| `destination`       | TEXT NOT NULL                     | The name of the destination database of the ETL job                  |

## Python Example

We've written a Python utility to interact with the jobs interface. It's included in our [transportation-data-utils (tdutils)](http://github.com/cityofaustin/transportation-data-utils) pacakge. `tdutils` requires Python 3 and can be installed with `$ pip install tdutils`.

Begin by importing the `jobutil` library and creating a new job instance:

```python
>>> from tdutils import jobutil

>>> job = jobutil.Job(
        name='my_etl_job',
        url='http://transportation-data-test.austintexas.io/jobs',
        source='inventory_system',
        destination='data_warehouse',
        auth='secret-json-web-token-issued-by-admin')
```

Assuming you've run this job successfully in the past, you can use the `most_recent` method to return a unix timestamp from the last successful job run:

```python
>>> job.most_recent()
1529252405
# 2018-06-17T16:20:05+00:00
```

Register your new job with `job.start()`. The API returns a JSON representation of newly created job record:

```python
>>> job.start()

{'destination': 'data_warehouse',
 'end_date': None,
 'id': 31801,
 'message': None,
 'name': 'my_etl_job',
 'records_processed': None,
 'source': 'inventory_system',
 'start_date': '2018-06-17T17:18:53+00:00',
 'status': 'in_progress'}
```

We have successfuly registered a new job. Note that the status was automatically set to `in_progress`. If we were to call `job.most_recent()` again, the results are the same as before, because the status of current job is not `success`:

```python
>>> job.most_recent()
1529252405
# 2018-06-17T16:20:05+00:00
```

From here, continue your ETL process as needed. When your ETL is complete, use `job.result()` to update your job status accordingly. Again, a JSON representation of the job record is returned:

```python
>>> job.result('success', records_processed=503)  #  records_processed is optional, but preferred

{'destination': 'data_warehouse',
 'end_date': '2018-06-17T17:35:08+00:00',
 'id': 31801,
 'message': None,
 'name': 'my_etl_job',
 'records_processed': 503,
 'source': 'inventory_system',
 'start_date': '2018-06-17T17:18:53+00:00',
 'status': 'success'}
```

Note that the end\_date was populated automatically. Because the job was successful, calling `job.most_recent()` now returns the timestamp of our current job:

```python
>>> job.most_recent()
1529256005
# 2018-06-17T17:18:53+00:00'
```

You should also register job failures. The `errror` result is availabe for such purposes:

```python
try:
    # do ETL stuff

except psycopg2.DatabaseError as e:
    job.result('error', records_processed=0, message='A database error occured.')
```
