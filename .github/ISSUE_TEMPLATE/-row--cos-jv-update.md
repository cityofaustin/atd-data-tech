---
name: "[ROW] Cost-of-Service (COS) JV Update"
about: Issue for updating COS records with JV imports
title: "[ROW] Data: Cost-of-Service (COS) JV Update for Month YYYY"
labels: 'Product: ROW Portal, Service: Apps, Type: Data, Workgroup: Finance, Workgroup:
  ROW'
assignees: ChrispinP

---

- [ ] Spreadsheets emailed from Finance
- [ ] AE Number of records to update:  
- [ ] ATD Number of records to update: 
- [ ] AW Number of records to update:
- [ ] CPO Number of records to update: 
- [ ] PWD Number of records to update: 
- [ ] WS Number of records to update: 
- [ ] Total Number of records being updated: 
- [ ] Remove non-JV filtered tabs from spreadsheets and remove any rows without `Journal Voucher ID` if necessary
- [ ] Save all 6 spreadsheets as csv. It also helps to save an All Data Excel file if you have to check for data inaccuracies after importing.
- [ ] Import (Update) records, match on `Fee Number` & import `Journal Voucher ID`. Set `Import Date` to today [(Review Instructions)](https://atd-dts.gitbook.io/atd-knack-operations/row-portal/cos-jv-update)
- [ ] Make sure the number of records being updated matches for all spreadsheets
- [ ] Filter records by `Import Date` and make sure the total number of records updated matches
- [ ] If inaccurate, check backend filter to see if any of the unmatched records are archived records and marked as `is_archived`. The AMANDA data may be inaccurate, the script may be running incorrectly, or the `Fee Numbers` may be incorrect if the record amount does not match the number of Archived records.
- [ ] Also check for duplicate `Fee Numbers` which could be duplicate records or have the wrong fee number. These need to be reconciled with Finance.
- [ ] Email Finance (and others cc'd) that the update task is complete
