---
name: "[Data Tracker] Delete Flex Notes"
about: Template to delete flex notes from Data Tracker
title: '[DT] Delete CSR Flex Notes - Month YEAR '
labels: 'Product: AMD Data Tracker, Service: Apps, Type: Data'
assignees: ''

---

Received automated reminder to delete flex notes in AMD Data Tracker PROD and reference the Flex Note Archiving wiki

Ran filter on: https://builder.knack.com/atd/amd/records/objects/object_95

Filter:
`ISSUE_STATUS_CODE` contains `closed`
`CREATED_DATE` is `before` 01/01/21 (2 months prior)

Total Records: {value}
To Delete: {value}
New Total: {value}
