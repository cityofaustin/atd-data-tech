import pandas as pd
import numpy as np
from datetime import datetime, timedelta

fulcrum_raw = pd.read_csv("signal_pm.csv")
df = fulcrum_raw.copy()

# slice/split the signal ID from the signal title
df["SIGNAL_ID"] = df["signal"].str.split("|").str[0]

# rename record_id to fulcrum ID
df = df.rename(columns={'_record_id': 'FULCRUM_ID'})

df["_server_updated_at"] = df["_server_updated_at"].str.strip("CDT")
df["PM_COMPLETED_DATETIME"] = pd.to_datetime(df["_server_updated_at"], format = "%Y-%m-%d %H:%M:%S")
df["PM_COMPLETED_DATE"] = df["PM_COMPLETED_DATETIME"].dt.date

df["PM_COMPLETED_BY"] = df["technicians"].str.split(",").str[1]
df["modified_current"] = datetime.now().replace(microsecond=0).isoformat(" ")

df["modified_current"] =pd.to_datetime(df["modified_current"], format = "%Y-%m-%d %H:%M:%S")

df["MODIFIED_DATE"] = df["modified_current"] + timedelta(minutes = 20)

df = df[["SIGNAL_ID", "FULCRUM_ID", "PM_COMPLETED_DATE", "MODIFIED_DATE", "PM_COMPLETED_BY"]]

datestring = datetime.strftime(datetime.now(), "%m%d%Y")
filename ="fulcrum_upload/signal_pm_fulcrum_ready_{}.csv".format(datestring)

df.to_csv(filename, index=False)

print(df.head(5))