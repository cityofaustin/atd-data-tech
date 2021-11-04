---
name: Delete resource tracking logs from PEP | Parking Enterprise Portal  - Month
  YEAR
about: Template to delete resource tracking logs
title: "[PEP | Parking Enterprise Portal] Deleting resource tracking logs"
labels: 'Product: Parking Enterprise Portal, Service: Apps, Type: Data, Workgroup:
  PE'
assignees: ''

---

Received automated reminder to delete flex notes in Signs and Markings Operations PROD and reference the Flex Note Archiving wiki

Ran filter on: `https://builder.knack.com/atd/parking-enterprise/records/objects/object_12`

Filter:
STATUS is `Marked for Deletion` and
CREATED_DATE is before [2 months from Today's Date]

Total Records: {value}
To Delete: {value}
New Total: {value}
