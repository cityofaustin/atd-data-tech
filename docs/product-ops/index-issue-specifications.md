# Index Issue Specifications

We use "index" Github issues to centralize information about each of our projects and products. It is critical that these issues follow a standard labeling scheme and content format so that [DTS' project data](https://data.austintexas.gov/Transportation-and-Mobility/ATD-Data-Tech-Services-Issues/rzwg-fyv8/) is accurate, team members work is coordinated and efficiently tracked, and we have an accessible, high-level view of the project/product on the [DTS Website](https://product.austinmobility.io).

{% hint style="info" %}
Create a new Project or Product Index by selecting the [appropriate issue template](https://github.com/cityofaustin/atd-data-tech/issues/new/choose) from the `atd-data-tech`Github repository.&#x20;
{% endhint %}

## Project Index

All projects which have been scoped require a project index issue to be placed in the appropriate Zenhub pipeline. The issue title, description, and labels should follow the below guidelines.

### Title

The issue title should be prefixed with `Project:` . For example, `Project: Warehouse Inventory Management`.&#x20;

### Labels

* `Project Index`
* `Project: xzy` — A project-specific label that you will create, following our [project label conventions](https://github.com/cityofaustin/atd-data-tech/labels?q=project)
* `Workgroup: xyz`  — the project stakeholder workgroups

### Assignees

All DTS team members who contributed substantially to the project, including at least one product manager or team lead.&#x20;

### Description

Follow the [**Project Index**](https://github.com/cityofaustin/atd-data-tech/issues/new?assignees=\&labels=Project+Index\&template=-all-purpose--project-index.md\&title=Project%3A+%5BYour+Project+Name+in+Title+Case%5D) issue template.

### Image

See [#index-issue-images](index-issue-specifications.md#index-issue-images "mention") below.

## Product Index

All products require a product index issue to be placed in the appropriate Zenhub pipeline. Once a product has been released, it should be placed in the **Ongoing** pipeline indefinitely until it is removed from service. The issue title, description, and labels should follow the below guidelines.

### Title

The issue title should be prefixed with `Product:` . For example, `Product: Data Tracker`

### Labels

* `Product Index`
* `Product: xzy` — A product-specific label that you will create, following our [product label conventions](https://github.com/cityofaustin/atd-data-tech/labels?q=product)
* `Workgroup: xyz`  — the workgroup(s) of the product's primary users

### Assignee

The product manager.

### Issue description

Follow the [**Product Index**](https://github.com/cityofaustin/atd-data-tech/issues/new?assignees=\&labels=Product+Index\&template=-all-purpose--product-index.md\&title=Product%3A+%5BProduct+Name+in+Title+Case%5D) issue template.

### Image

See [#index-issue-images](index-issue-specifications.md#index-issue-images "mention") below.

## Index Issue Images

All projects and products should have at least one image so that missing thumbnails don't disrupt the website design. We prefer these thumbnails options:

* A [**map**](https://austinmobility.io/projects/638) or other [**visualization**](https://austinmobility.io/projects/9876) of the data generated in the app
* **Photos** of the project/product's [**end users at work**](https://austinmobility.io/products/251) or the related [**hardware**](https://austinmobility.io/projects/1540)**/**[**service**](https://austinmobility.io/products/1192); the [TPW Flickr feed](https://www.flickr.com/photos/atxmobility/) is a fantastic source for these
* A [**close-up screenshot** of a unique part of the UI](https://austinmobility.io/projects/4611)
* For mobile-focused apps, we have a [template](https://docs.google.com/presentation/d/11W8P7kb8mt3FNehyG-\_UiNlv4gBn-uWT\_WZTKyJc\_kY/edit#slide=id.gf792707f70\_0\_0) to show off [**the application on different devices**](https://austinmobility.io/products/145)​

Please avoid using

* **Full-screen screenshots** or **large diagrams** as the _**first**_** image** - these don't render well in tiles. [Include these later on in the issue](https://github.com/cityofaustin/atd-data-tech/issues/13684) if they are helpful way to communicate the work.
* **Vendor** logos - these doesn't give any information about the platform or use case and promote a commercial companies

The image should be at least 1000px wide, with a 3:2 aspect ratio. [This tool](https://croppola.com/) makes it easy to crop/resize as needed.

<figure><img src="../.gitbook/assets/DTS Website - Product Tiles.png" alt=""><figcaption></figcaption></figure>
