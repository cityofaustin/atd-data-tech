---
name: "[PEP | Parking Enterprise Portal] Deleting Dispatch Resource Tracking logs"
about: Template to delete dispatch resource tracking logs
title: 'Delete "dispatch_resource_tracking_log" from PEP Parking Enterprise Portal
  - Month YEAR '
labels: 'Product: Parking Enterprise Portal, Service: Apps, Type: Data, Workgroup:
  PE'
assignees: ''

---

Received automated reminder to delete dispatch resource tracking logs in Parking Enterprise Portal and reference the Dispatch Resource Tracking Log Archiving wiki

Ran filter on: https://builder.knack.com/atd/parking-enterprise/records/objects/object_12

Filter:
`Status` is `Marked for Deletion`
`CREATED_DATE` is `before` <one months ago>  (ex. if Today's date is 7/8/21, enter 6/8/21)

Total Records: {value}
To Delete: {value}
New Total: {value}
