---
name: "[ROW] Cost-of-Service (COS) JV Update"
about: Issue for updating COS records with JV imports
title: "[ROW] Data: Cost-of-Service (COS) JV Update for Month YYYY"
labels: 'Product: ROW Portal, Service: Apps, Type: Data, Workgroup: Finance, Workgroup:
  ROW'
assignees: ChrispinP

---
**Save Data:**
- [ ] Spreadsheets emailed from Finance
- [ ] Save an All Data Excel file for reference
- [ ] Remove non-JV filtered tabs from spreadsheets and remove any rows without `Journal Voucher ID` if necessary
- [ ] Save all 6-8 spreadsheets as csv and update record counts below

**Prepare Data:**
- [ ] AE (Austin Energy) Number of records to update: 
- [ ] ACC (Austin Convention Center) Number of records to update: 
- [ ] ATD (Austin Transportation Department) Number of records to update: 
- [ ] AWU (Austin Water Utility) Number of records to update: 
- [ ] CPO (Corridor Program Office) Number of records to update: 
- [ ] PARD (Parks and Recreation Department) Number of records to update: 
- [ ] PWD (Public Works Department) Number of records to update: 
- [ ] WPD (Watershed Protection & Development) Number of records to update:  
- [ ] Total Number of records being updated: 

**Import Data:**
- [ ] Import (Update) records, match on `Fee Number` & import `Journal Voucher ID`. Set `Import Date` to today [(Review Instructions)](https://atd-dts.gitbook.io/atd-knack-operations/row-portal/cos-jv-update)
- [ ] Make sure the number of records being updated matches for all spreadsheets
- [ ] Filter records by `Import Date` and make sure the total number of records updated matches

**Error Checking:**
- [ ] If inaccurate, check backend filter to see if any of the unmatched records are archived records and marked as `is_archived`. The AMANDA data may be inaccurate, the script may be running incorrectly, or the `Fee Numbers` may be incorrect if the record amount does not match the number of Archived records.
- [ ] Also check for duplicate `Fee Numbers` which could be duplicate records or have the wrong fee number. These need to be reconciled with Finance.
- [ ] Email Finance (and others cc'd) that the update task is complete
