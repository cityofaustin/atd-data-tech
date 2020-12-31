---
name: "[Signs & Markings] Deleting Flex Notes"
about: Template to delete flex notes
title: 'Delete "csr_flex_notes" from Signs & Markings - Month YEAR '
labels: 'Service: Apps, Type: Data, Product: Signs & Markings'
assignees: ''

---

Received automated reminder to delete flex notes in Signs and Markings Operations PROD and reference the Flex Note Archiving wiki

Ran filter on: https://builder.knack.com/atd/signs-markings#data/object_172/records

Filter:
`ISSUE_STATUS_CODE` contains `closed`
`CREATED_DATE` is `before` 01/01/21

Total Records: {value}
To Delete: {value}
New Total: {value}
