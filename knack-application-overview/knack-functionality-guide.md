# Knack:-Functionality-Guide

## **Reporting Examples**

* Reference \[Data Tracker - TCP Tracking\]
* Reference \[Signs and Markings Operations app\]
* Reference \[Parking Enterprise Reporting Portal\]
* Reference \[Finance and Purchasing System\]

## **Importing CSVs**

* CSVs larger than 250 MB cannot be imported. CSVs should be broken down into subsets of around 10,000 records to help import times and prevent time-outs. 
* Number of fields can affect import times, especially with large amounts of data. Empty fields still need to be indexed, so removing empty fields could improve import times. 

## **Converting "Created Date" to Month Name**

1. Create Field: `CREATED_MONTH_FORMULA` 
2. "equation" field type
3. formula: `getDateMonth({CREATED_DATE})`
4. Create Field: `CREATED_MONTH_NUMBER`
5. "number" field type 
6. **Add conditional rule**
   * When every record
   * Set record to \[value\] - `CREATED_MONTH_FORMULA`
7. Create field: `CREATED_MONTH_NAME`
8. "text formula" field type
   * formula: `getDateMonthOfYearName({CREATED_DATE})`

## **Approval Workflow Process**

* Reference \[Finance and Purchasing System\]

## **Comment functionality**

* Reference \[Signs and Markings Operations app\]

## **Copy table records onto table**

* Reference \[Finance and Purchasing System\] - Line Items

## **Copy Record Details**

* Reference \[Finance and Purchasing System\] - _when PR is Closed/Cancelled_

## **Location & Asset relationship**

* Reference \[Data Tracker - Signals\]

## **Work Order Management**

* Reference \[Signs and Markings Operations app\]

