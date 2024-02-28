---
description: >-
  We use the Data & Technology Services website, Austinmobility.io, to showcase
  our work and communicate with stakeholders. The content is driven by Github,
  Zenhub, and the DTS Portal.
---

# DTS Website Management

## Basics

An issue will appear on the [_Projects_](https://austinmobility.io/projects) or [_Products_](https://austinmobility.io/products) pages if it:

* Has a "Product: xyz" or "Project: xyz" name
* Has the "Product Index" or "Project Index" label

## Tiles

Each project or product is rendered as a tile using content from the index issue:

<figure><img src="../.gitbook/assets/DTS Website - Tiles Components.png" alt=""><figcaption><p>Various Github content is used for the project/product "tiles"</p></figcaption></figure>



## Issues and activity

All issues with the `Product:` label for a given product will be rendered on the **Issues** tab ([example](https://austinmobility.io/products/145?tab=issues)) and all comments on the project/product Index issue itself will show on the **Activity** tab ([example](https://austinmobility.io/products/145?tab=activity)).&#x20;

## Evaluation

In order for the **Evaluation** tab ([example](https://austinmobility.io/projects/307?tab=evaluation)) to render correctly, the project must have an evaluation completed in the [DTS Portal](https://atd.knack.com/dts#project-evaluation/).&#x20;

Once an issue is labeled `Project Index`, it will automatically be added as a [project in the DTS Portal](https://atd.knack.com/dts#project-evaluation/).&#x20;

If your project is not listed in Knack, the ETL may not yet have run. You can manually create a new entry in Knack, just make sure you provide the correct github issue # when creating the entry. The ETL will overwrite any project name you supply manually.&#x20;

![You can manually create a project if your project is not listed](<../.gitbook/assets/Screen Shot 2021-11-01 at 7.49.16 PM.png>)

### Evaluating effort

Product Managers work with builders—the Apps, Dev, Data Science, or Geo teams—to assess the level of effort for a project.&#x20;

### Evaluating value

A project's predicted value is added to the [Product Sync agenda](https://docs.google.com/document/d/1SA3iEyfiBlnxgx2miYn5EncVeUrQyOtUfAk-93574z8/edit#heading=h.o10gj6a8so5p) so that the Product team can review it as a group and determine a score together.&#x20;





