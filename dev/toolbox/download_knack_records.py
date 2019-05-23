import pandas as pd
import knackpy
import arrow
from config import *


app_name = "street_banner_prod"
obj = "object_165"
save_directory = "data"
today = arrow.now().format("YYYY_MM_DD")


kn = knackpy.Knack(
	obj=obj, 
	app_id=KNACK_CREDENTIALS[app_name]["app_id"], 
	api_key=KNACK_CREDENTIALS[app_name]["api_key"])

file_name = "{}/{}_{}.csv".format(save_directory, obj, today)

try:
    kn.to_csv(file_name)

except UnicodeError:
    kn.data = [{key: str(d[key]).encode()} for d in kn.data for key in d]
    kn.to_csv(file_name)