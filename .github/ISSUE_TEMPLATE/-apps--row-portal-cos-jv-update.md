---
name: "[Apps] ROW - Update Cost-of-Service Journal Vouchers"
about: Issue for updating COS records with JV imports
title: "[ROW] Data: Cost-of-Service (COS) JV Update for Month YYYY"
labels: 'Product: ROW Portal, Service: Apps, Type: Data, Workgroup: Finance, Workgroup:
  ROW'
assignees: ChrispinP

---

**Confirm Data:**
- [ ] Google Sheet located in the DTS Google Drive > ROW Portal > COS folder
- [ ] Google Sheet updated by Finance
- [ ] Check Data on each tab

**Confirm Counts:**
- [ ] AE (Austin Energy) Number of records to update: 
- [ ] ACC (Austin Convention Center) Number of records to update: 
- [ ] ATPWD (Austin Transportation & Public Works) Number of records to update: 
- [ ] AWU (Austin Water Utility) Number of records to update: 
- [ ] CPO (Corridor Program Office) Number of records to update: 
- [ ] PARD (Parks and Recreation Department) Number of records to update: 
- [ ] WPD (Watershed Protection & Development) Number of records to update: 
- [ ] Total Number of records being updated: 

**Import Data:**
- [ ] Import (Update) records, match on `Combined ID` & import `Journal Voucher ID`, `Department Comment`, and `Payment Memo`. Set default `Import Date` to today and set `JV Type` to the proper sheet acronym [(Review Instructions)](https://atd-dts.gitbook.io/atd-knack-operations/row-portal/cos-jv-update)
- [ ] Make sure the number of records being updated matches for all spreadsheets
- [ ] Filter records by `Import Date` and `JV Type` to make sure the total number of records updated matches

**Error Checking:**
- [ ] If inaccurate, check backend filter to see if any of the unmatched records are archived records and marked as `Archived`. The AMANDA data may be inaccurate, the script may be running incorrectly, or the `Combined ID` may be incorrect if the record amount does not match the number of Archived records.
- [ ] Also check for duplicate `Combined IDs` which could be duplicate records or have the wrong `Combined ID`, `Fee Number`, or `Payment Number`. These need to be reconciled with Finance.
- [ ] Notify Finance that the update task is complete (Teams or Email)
