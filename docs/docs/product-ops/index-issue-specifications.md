# Index Issue Specifications

We use "index" GitHhub issues to centralize information about each of our products, projects, and services. These issues must follow a standard labeling scheme and content format so that [DTS's service data](https://data.austintexas.gov/Transportation-and-Mobility/ATD-Data-Tech-Services-Issues/rzwg-fyv8/) is accurate and daily work is coordinated. Furthermore, our key communication platforms, the [DTS Website](https://product.austinmobility.io) and [DTS Portfolio GitHub Project](https://github.com/orgs/cityofaustin/projects/27), can provide a reliably accessible and up-to-date overview of our work.&#x20;

There are three index issue types—Services, Products, and Projects.

## Services

[Services](https://austinmobility.io/services) are...

## **Products**

[Products](https://austinmobility.io/products) are the solutions we build for our customers, including Knack apps, AMANDA apps, custom software, and data systems. We improve and extend our products over time so that they deliver continuous value to Transportation and Public works as operations, technology, and business needs evolve. Examples include:

* [Finance & Purchasing Portal](https://github.com/cityofaustin/atd-data-tech/issues/2903)
* [TPW 311 CSR Dashboards](https://github.com/cityofaustin/atd-data-tech/issues/22605)
* [Vision Zero Crash Data System](https://github.com/cityofaustin/atd-data-tech/issues/255)

## Projects

[Projects](https://austinmobility.io/projects) are time-boxed endeavors. They accomplish a singular goal and have a defined completion date. Examples include:

* [Recommending an off-the-shelf externally-supported solution](https://github.com/cityofaustin/atd-data-tech/issues/65)
* [Building a new feature in an existing DTS product](https://github.com/cityofaustin/atd-data-tech/issues/533)
* [Refactoring one of our major datasets](https://github.com/cityofaustin/atd-data-tech/issues/254)
* [Delivering a complex map](https://github.com/cityofaustin/atd-data-tech/issues/1911)
* [Delivering the first iteration (MVP) of a new DTS product](https://github.com/cityofaustin/atd-data-tech/issues/307)

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

All projects, products, and services should have at least one image so that missing thumbnails don't disrupt the website design. The index issue templates are pre-filled with the [Austin checkered brand pattern](https://raw.githubusercontent.com/cityofaustin/atd-data-tech/d8bbf33930190731d784d21ac2674b617c0f19ef/images/index%20images/Austin%20Checkered%20Brand%20Pattern.png), but you get big bonus points for adding a custom image:&#x20;

### Choosing an image

* A [**map**](https://austinmobility.io/projects/638) or other [**visualization**](https://austinmobility.io/projects/9876) of the data generated in the app
* **Photos** of the project/product's [end users at work](https://austinmobility.io/products/251) or the related [hardware](https://austinmobility.io/projects/1540)/[service](https://austinmobility.io/products/1192)\
  _&#x54;he_ [_TPW Flickr feed_](https://www.flickr.com/photos/atxmobility/) _is a fantastic source for these. We also have a_ [_stash of nice photos_](https://drive.google.com/drive/u/0/folders/1po3dUHEQxyz2XzsEHizlkhG0E05a5Owq) _you can add to or use._&#x20;
*   A [**close-up screenshot**](https://austinmobility.io/projects/4611) of a unique part of the UI

    _For mobile-focused apps, we have a_ [_template_](https://docs.google.com/presentation/d/11W8P7kb8mt3FNehyG-_UiNlv4gBn-uWT_WZTKyJc_kY/edit#slide=id.gf792707f70_0_0) _to show off_ [_the application on different devices_](https://austinmobility.io/products/145)_._

Please avoid using

* **Full-screen screenshots** or **large diagrams** as the _**first**_**&#x20;image** - these don't render well in tiles. [Include these later on in the issue](https://github.com/cityofaustin/atd-data-tech/issues/13684) if they are helpful way to communicate the work.
* **Vendor logos** - these doesn't give any information about the platform or use case and promote commercial companies.&#x20;

### Preparing the image

The image should be at least 1000px wide, with a 3:2 aspect ratio. [This tool](https://croppola.com/) makes it easy to crop/resize as needed.

### Adding the image to the GitHub index issue

Use [GitHub-flavored Markdown image syntax](https://github.com/user-attachments/assets/38429baa-ccff-4a21-91db-08375027e5f5) so that the image displays properly on the DTS website. [Here's a quick way](https://drive.google.com/drive/u/0/folders/1MeJUwX7OPLezTXASfyp7gXjOc8tYOiYy) to replace the default image with an uploaded file.&#x20;

<figure><img src="../.gitbook/assets/DTS Website - Product Tiles.png" alt=""><figcaption></figcaption></figure>
