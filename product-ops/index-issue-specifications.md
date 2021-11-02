---
description: >-
  The page defines our conventions for tracking project and products via Github
  issues.
---

# Index Issue Specifications

Project and product index issues allow us to centralize all of the information about a project or product. These issues follow a standardized labeling scheme and content format that allows them to be pulled into the [DTS Website](https://product.austinmobility.io) and enables us to efficiently track all related work.

{% hint style="info" %}
Create a new Project or Product Index by selecting the [appropriate issue template](https://github.com/cityofaustin/atd-data-tech/issues/new/choose) from the `atd-data-tech` repo
{% endhint %}

### Project Issue Specification

All projects which have been scoped require a project issue to be placed in the appropriate Zenhub pipeline. The issue title, description, and labels should follow the below guidelines.

#### Title

The issue title should be prefixed with `Project: `. For example, `Project: Warehouse Inventory Management`

#### Labels

* &#x20;`Project Index`
* `Project: xzy`** **— A project-specific label that you will create, following our [project label conventions](https://github.com/cityofaustin/atd-data-tech/labels?q=project)
* `Workgroup: xyz`  — the project stakeholder workgroups
* `Type: xyz` — the type of work to be done for this project

#### Assignee

The product manager.

#### Issue description

Follow the [**Project Index**](https://github.com/cityofaustin/atd-data-tech/issues/new?assignees=\&labels=Project+Index\&template=-all-purpose--project-index.md\&title=Project%3A+%5BYour+Project+Name+in+Title+Case%5D) issue template.

### Product Issue Specification

All products require a product issue to be placed in the appropriate Zenhub pipeline. Once a product has been released, it should be placed in the **Ongoing** pipeline indefinitely until it is removed from service. The issue title, description, and labels should follow the below guidelines.

#### Title

The issue title should be prefixed with `Product: `. For example, `Product: Data Tracker`

#### Labels

* `Product Index`
* `Product: xzy`** **— A product-specific label that you will create, following our [product label conventions](https://github.com/cityofaustin/atd-data-tech/labels?q=product)
* `Workgroup: xyz`  — the workgroup(s) of the product's primary users

#### Assignee

The product manager.

#### Issue description

Follow the [**Product Index**](https://github.com/cityofaustin/atd-data-tech/issues/new?assignees=\&labels=Product+Index\&template=-all-purpose--product-index.md\&title=Product%3A+%5BProduct+Name+in+Title+Case%5D) issue template.
