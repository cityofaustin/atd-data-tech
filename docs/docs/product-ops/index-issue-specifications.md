# Managing Project, Product, and Service Indexes

We use "index" issues to centralize information about each of our products, projects, and services in GitHub. Keeping index issues in a standardized format ensures that our two main communication platforms:

The DTS Website, [Austinmobility.io](https://austinmobility.io/) and the [DTS Portfolio GitHub Project](https://github.com/orgs/cityofaustin/projects/27), provide an easily understandable view of our work that's both current and comprehensive.

<figure><img src="../.gitbook/assets/Austinmobility.io Products Projects Services Pages.png" alt=""><figcaption></figcaption></figure>

There are three index issue types—Services, Products, and Projects.

## Products

[Products on Austinmobility.io](https://austinmobility.io/products) | [Products in the DTS Portfolio](https://github.com/orgs/cityofaustin/projects/27/views/12)

Products are the solutions we build for our customers, including Knack apps, AMANDA apps, custom software, and data systems. We improve and extend our products over time so that they deliver continuous value to Transportation and Public works as operations, technology, and business needs evolve. Examples include:

* [_Finance & Purchasing Portal_](https://github.com/cityofaustin/atd-data-tech/issues/2903)
* [_TPW 311 CSR Dashboards_](https://github.com/cityofaustin/atd-data-tech/issues/22605)
* [_Vision Zero Crash Data System_](https://github.com/cityofaustin/atd-data-tech/issues/255)

To create a project index, use the [Product Index template](https://github.com/cityofaustin/atd-data-tech/issues/new?template=--+product-index.md).

### Product index issue fields

* **Description** - A concise product summary that identifies the users and purpose of the application using a non-sentence structure and no period. it should make sense to anyone—a TPW staff person, a Council member, or a prospective DTS intern. Text issue fields have a 255-character limit. Examples:
  * _Knack app that lets the Office of the City Engineer intake, track, and manage approved concrete and asphalt mixes for city construction, while also managing underpass cleanup work orders and contractor coordination_
  * _Base map of Austin's complete multimodal transportation infrastructure; provides an authoritative base map to align data production, management, and analysis across the organization_
* **DTS Solution Type** - Knack, Power BI, ArcGIS Online Web App, Custom, or Other
* **URL**- for application login
* **DTS Team** - Builder (Apps, Data Science, Dev, Enterprise Case Management, Geo, Maximo, Tech Services) team primarily responsible for maintaining the application; Product or Operations if it's not maintained by builders
* **TPW Divisions** - use `TPW` for apps used department-wide, but also add in the divisions that requested the product or currently manage it

## Projects

[Projects on Austinmobility.io](https://austinmobility.io/projects) | [Projects in the DTS Portfolio](https://github.com/orgs/cityofaustin/projects/27/views/3)

Projects are time-boxed endeavors. They accomplish a singular goal and have a completion date. Examples include:

* [_Recommending an off-the-shelf externally-supported solution_](https://github.com/cityofaustin/atd-data-tech/issues/65)
* [_Building a new feature in an existing DTS product_](https://github.com/cityofaustin/atd-data-tech/issues/533)
* [_Refactoring one of our major datasets_](https://github.com/cityofaustin/atd-data-tech/issues/254)
* [_Delivering a complex map_](https://github.com/cityofaustin/atd-data-tech/issues/1911)
* [_Delivering the first iteration (MVP) of a new DTS product_](https://github.com/cityofaustin/atd-data-tech/issues/307)

To create a project index, use the Project Index template, available as [Markdown](https://github.com/cityofaustin/atd-data-tech/issues/new?template=--+project-index.md) or an [issue form](https://github.com/cityofaustin/atd-data-tech/issues/new?template=--+project-index-form.yml).&#x20;

### Project index issues fields

* **Description** - Begin with a verb and say what you'll do, for whom, and why. Examples:
  * _Add a warehouse inventory module to Signs & Markings Data Tracker to track inventory in real time, view turnover rates, and give the TPW Finance division visibility into these expenditures_
  * _Use ArcGIS Hub to build Dash 2.0, a central point to find TPW's authoritative dashboards, maps, and apps all in one place_
* **DTS Teams** - Builder team(s) _significantly_ involved in the project. Don't use `Product` in addition to the builder teamon, reserve it for _purely_ product projects like software procurement
* **TPW Divisions** - use `TPW` for apps used department-wide, but also add in the divisions that requested the product or currently managing it
* **Start date** - approximate date when the project began— let us know if you find a better way to enter old dates than shuffling back through every month in their popup calendar widget! 🫠
* **End date** - approximate date of project completion—required but always subject to change. 🪷 If the project has outstanding subtasks but they haven't been worked on for a long time, consider closing the issue and removing open subtasks from that parent issue.
* **Fiscal year** - fiscal year(s) the project is underway

## Services

[Services on Austinmobility.io](https://austinmobility.io/services) | [Services in the DTS Portfolio](https://github.com/orgs/cityofaustin/projects/27/views/10)

Services are the ongoing consultation, training, and assistance we provide to improve the use of data and technology at Transportation Public Works. Every DTS Team has 1-5 services that represent the ongoing work they do outside formal DTS Projects.

* [_Data Asset Management_](https://github.com/cityofaustin/atd-data-tech/issues/29727) _- Apps services_
* [_Power BI Support_](https://github.com/cityofaustin/atd-data-tech/issues/27373) _- Data Science service_
* [_Data Engineering & Integrations_](https://github.com/cityofaustin/atd-data-tech/issues/28674) _- Dev service_
* [_AMANDA Support_](https://github.com/cityofaustin/atd-data-tech/issues/27595) _- Enterprise Case Management service_
* [_Geodata Quality Control_](https://github.com/cityofaustin/atd-data-tech/issues/28553) _- Geo service_
* [_Maximo Training & Documentation_](https://github.com/cityofaustin/atd-data-tech/issues/29482) _- Maximo service_
* [_Product & Project Management_](https://github.com/cityofaustin/atd-data-tech/issues/30534) _- Product service_
* [_Specialized Equipment Support_](https://github.com/cityofaustin/atd-data-tech/issues/27298) _- Tech Services service_

Our service listing has been carefully compiled by team leads and the Product Team, so there should be a group discussion before creating a new service index. If the decision is made to define a new&#x20;

DTS service, use the [Service Index Template](https://github.com/cityofaustin/atd-data-tech/issues/new?template=--+service-index.md) to document it in an issue.

## Index Issue Images

All projects, products, and services should have at least one image so that missing thumbnails don't disrupt the website design. The index issue templates are pre-filled with the [Austin checkered brand pattern](https://raw.githubusercontent.com/cityofaustin/atd-data-tech/d8bbf33930190731d784d21ac2674b617c0f19ef/images/index%20images/Austin%20Checkered%20Brand%20Pattern.png), but you get big bonus points for adding a custom image.

{% hint style="success" icon="lightbulb-on" %}
If you didn't create your index issue with one of the templates above, you can use the following Markdown to insert the placeholder image:

```
![Austin checkered brand pattern](https://raw.githubusercontent.com/cityofaustin/atd-data-tech/d8bbf33930190731d784d21ac2674b617c0f19ef/images/index%20images/Austin%20Checkered%20Brand%20Pattern.png)
```
{% endhint %}

### Choosing an image

* A [map](https://austinmobility.io/projects/638) or other [visualization](https://austinmobility.io/projects/9876) of the data generated in the app
* Photos of the project/product's [end users at work](https://austinmobility.io/products/251) or the related [hardware](https://austinmobility.io/projects/1540)/[service](https://austinmobility.io/products/1192)\
  _&#x54;he_ [_TPW Flickr feed_](https://www.flickr.com/photos/atxmobility/) _is a fantastic source for these. We also have a_ [_stash of nice photos_](https://drive.google.com/drive/u/0/folders/1po3dUHEQxyz2XzsEHizlkhG0E05a5Owq) _you can add to or use._
*   A [close-up screenshot](https://austinmobility.io/projects/4611) of a unique part of the UI

    _For mobile-focused apps, we have a_ [_template_](https://docs.google.com/presentation/d/11W8P7kb8mt3FNehyG-_UiNlv4gBn-uWT_WZTKyJc_kY/edit#slide=id.gf792707f70_0_0) _to show off_ [_the application on different devices_](https://austinmobility.io/products/145)_._

**Please avoid using**

* Full-screen screenshots or large diagrams as the _first_ image - these don't render well in tiles. [Include these later on in the issue](https://github.com/cityofaustin/atd-data-tech/issues/13684) if they are helpful way to communicate the work.
* Vendor logos - these doesn't give any information about the platform or use case and promote commercial companies.

### Preparing the image

The image should be at least 1000px wide, with a 3:2 aspect ratio. [This tool](https://croppola.com/) makes it easy to crop/resize as needed.

### Adding the image to the GitHub index issue

Use [GitHub-flavored Markdown image syntax](https://github.com/user-attachments/assets/38429baa-ccff-4a21-91db-08375027e5f5) so that the image displays properly on the DTS website. Here's a quick way to replace the default image with an uploaded file:

{% embed url="https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-LzDGg7hKQ_fUjXnzGGx%2Fuploads%2F1ECDQDtshPrC4c4xbSKb%2FAdding%20images%20to%20GitHub%20index%20issues.mp4?alt=media&token=e450595d-ca0a-4b21-818a-60e9107da4cd" %}

{% file src="../.gitbook/assets/Adding images to GitHub index issues.mp4" %}

