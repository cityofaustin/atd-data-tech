---
name: "[AMD Data Tracker] Deleting Flex Notes"
about: Template to delete flex notes
title: 'Delete "csr_flex_notes" from AMD Data Tracker - Month YEAR '
labels: 'Product: AMD Data Tracker, Service: Apps, Type: Data'
assignees: ''

---

Received automated reminder to delete flex notes in AMD Data Tracker PROD and reference the Flex Note Archiving wiki

Ran filter on: https://builder.knack.com/atd/amd#data/object_95/records

Filter:
`ISSUE_STATUS_CODE` contains `closed`
`CREATED_DATE` is `before` 01/01/21

Total Records: {value}
To Delete: {value}
New Total: {value}
