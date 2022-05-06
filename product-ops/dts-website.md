---
description: >-
  We use the Data & Technology Services website to showcase our work and
  communicate with stakeholders. Much of the content is driven by Github,
  Zenhub, and the DTS Portal. Follow the guidelines below t
---

# DTS Website Management

## Basics

An issue will appear on the [projects](https://austinmobility.io/projects) or [products](https://austinmobility.io/products) listing if it:

* Has a `Product: xyz` or `Project: xyz` label
* Has as `Product Index` or `Project Index` label

If you follow the the [Project Index](https://github.com/cityofaustin/atd-data-tech/issues/new?assignees=\&labels=Project+Index\&template=-all-purpose--project-index.md\&title=Project%3A+%5BYour+Project+Name+in+Title+Case%5D) and [Product Index](https://github.com/cityofaustin/atd-data-tech/issues/new?assignees=\&labels=Product+Index\&template=-all-purpose--product-index.md\&title=Product%3A+%5BProduct+Name+in+Title+Case%5D) Github template, your **Description** will be visible on the tile view in the listings. &#x20;

## Images

Use an image that makes this product look exciting. It will appear on the project/product page itself, and also in the project tile.&#x20;

* [Screenshot of a key part of the UI](https://austinmobility.io/projects/4611)&#x20;
* [Device screenshots](https://austinmobility.io/products/145) for mobile-focused apps - [template](https://docs.google.com/presentation/d/11W8P7kb8mt3FNehyG-\_UiNlv4gBn-uWT\_WZTKyJc\_kY/edit#slide=id.gf792707f70\_0\_0)&#x20;
* [Map](https://austinmobility.io/projects/638) or other visualization of the data generated in the app
* A picture of our [users at work](https://austinmobility.io/products/251) or the related [hardware](https://austinmobility.io/projects/1540)/[service](https://austinmobility.io/products/1192) - [ATD Flickr](https://www.flickr.com/photos/austinmobility/albums) is a good source for these

The image should be at least 1000px wide, with a 3:2 aspect ratio. [This tool](https://croppola.com) makes it easy to crop/resize as needed.&#x20;

![Images and descriptions appear on the tiles for each project/product. ](<../.gitbook/assets/Screen Shot 2021-11-01 at 11.20.27 PM.png>)



## Issues and Activity

All issues with the label for a given product will be rendered on the **Issues** tab ([example](https://austinmobility.io/products/145?tab=issues)) and all comments on the project/product Index issue itself will show on the **Activity** tab ([example](https://austinmobility.io/products/145?tab=activity)).&#x20;

## Evaluation

In order for the **Evaluation** tab ([example](https://austinmobility.io/projects/307?tab=evaluation)) to render correctly, the project must have an evaluation completed in the [DTS Portal](https://atd.knack.com/dts#project-evaluation/). If you created a `Project Index` issue, it will automatically be created in the DTS Portal. Find your issue there and create the evaluation.

If your project is not listed in Knack, the ETL may not yet have run. You can manually create a new entry in Knack, just make sure you provide the correct github issue # when creating the entry. The ETL will overwrite any project name you supply manually.&#x20;

![You can manually create a project if your project is not listed](<../.gitbook/assets/Screen Shot 2021-11-01 at 7.49.16 PM.png>)





