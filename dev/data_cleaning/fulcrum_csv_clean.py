"""Summary
This script cleans the csv downloaded from fulcrum website so it can be
imported into knack signal_preventive_maintenance object.
***Instruction
Select FULCRUM_ID in the "select a field to match" dropdown menu to avoid
duplications.
After the csv is imported in the signal_preventive_maintenance object, do
another import for signal objects with same csv but only the SIGNAL_ID and
the MODIFIED_DATE column to ensure kanck_data_pub can pick up new data.
#TODO: compare with csv from last imports to do increamental data updating
without using the matching function in knack
integration with Knackpy package to allow auto uploading.
Attributes:
    datestring (TYPE): Description
    df (TYPE): Description
    filename (TYPE): Description
    fulcrum_raw (TYPE): Description
"""

# import modules
import pandas as pd
import numpy as np
from datetime import datetime, timedelta
import pdb

# read the csv downloaded from fulcrum
fulcrum_raw = pd.read_csv("signal_pm.csv")
df = fulcrum_raw.copy()

# slice/split the signal ID from the signal title
df["SIGNAL_ID"] = df["signal"].str.split(" | ").str[0]

# rename record_id to FULCRUM_ID
df = df.rename(columns={'_record_id': 'FULCRUM_ID'})

# strip the timezone str in server updated datetime
df["_server_updated_at"] = df["_server_updated_at"].str.strip("CDT")

# use _server_updated date as the PM_COMPLETED_DATE
df["PM_COMPLETED_DATETIME"] = pd.to_datetime(df["_server_updated_at"], format = "%Y-%m-%d %H:%M:%S")

# pop out the date part of the completed datetime
df["PM_COMPLETED_DATE"] = df["PM_COMPLETED_DATETIME"].dt.date

# use the second email in the technicians field as PM_COMPLETED_BY
df["PM_COMPLETED_BY"] = df["technicians"].str.split(",").str[1]

# create a timestamp using iso format without microsecond
df["modified_current"] = datetime.now().replace(microsecond=0).isoformat(" ")
df["modified_current"] =pd.to_datetime(df["modified_current"], format = "%Y-%m-%d %H:%M:%S")

# make the signal modified date to a future time
df["MODIFIED_DATE"] = df["modified_current"] + timedelta(minutes = 20)

# add the column that mark all PMs as completed
df["PM_STATUS"] = "COMPLETED"

# pick columns for uploading
df = df[["SIGNAL_ID", "FULCRUM_ID", "PM_COMPLETED_DATE", "MODIFIED_DATE", "PM_COMPLETED_BY", "PM_STATUS"]]

# add time stamp to filename
datestring = datetime.strftime(datetime.now(), "%m%d%Y")
filename ="upload/signal_pm_fulcrum_ready_{}.csv".format(datestring)

# save the processed csv to fulcrum_upload folder
df.to_csv(filename, index=False)

print(df.head(5))
