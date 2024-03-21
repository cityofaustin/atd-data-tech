# Project Delivery Workflow

[**Products**](https://austinmobility.io/products) are the solutions we build for our customers, including Knack apps, AMANDA apps, custom software, and data systems. We improve and extend our products over time so that they deliver continuous value to Austin Transportation as business needs evolve.&#x20;

[**Projects**](https://austinmobility.io/projects) are time-boxed endeavors. They accomplish a singular goal and have a defined completion date. Examples include:

* [Recommending an off-the-shelf externally-supported solution](https://github.com/cityofaustin/atd-data-tech/issues/65)
* Delivering the first iteration (MVP) of a new DTS product
* [Building a major feature for an existing DTS project](https://github.com/cityofaustin/atd-data-tech/issues/533)
* [Refactoring a dataset](https://github.com/cityofaustin/atd-data-tech/issues/254)
* [Delivering a complex map](https://github.com/cityofaustin/atd-data-tech/issues/1911).

## Project Initiation

Oftentimes, our customers initiate a project by submitting a DTS service request that is notably large and/or important.&#x20;

A DTS team member may also create a project when there is significant work to be done on an internal product—such as [updating Austinmobility.io](https://austinmobility.io/projects/4199), [a technical refactor of the Vision Zero Database](https://austinmobility.io/projects/10430), or [migrating our CCTV image service from a local server to the cloud](https://austinmobility.io/projects/1046).

In either case, we begin by verifying that all our DTS project prerequisites are met:

* Dedicated product owner to support requirements gathering, user research, and user onboarding
* Division Manager sponsor to champion the project at the executive level&#x20;
* A commitment from the customer to collaborate in DTS's iterative, user-centered development process

Then either [create a new project index issue](https://github.com/cityofaustin/atd-data-tech/issues/new?assignees=\&labels=Project+Index\&projects=\&template=-all-purpose--project-index.md\&title=Project%3A+%5BYour+Project+Name+in+Title+Case%5D) or convert the existing issue to match the [project index template](https://github.com/cityofaustin/atd-data-tech/issues/new?assignees=\&labels=Project+Index\&projects=\&template=-all-purpose--project-index.md\&title=Project%3A+%5BYour+Project+Name+in+Title+Case%5D). Either way, make sure that the 'Project Index' label is on the issue so that an evaluation record for the project is added to the DTS Portal and it appears on the website.

{% hint style="info" %}
Don't worry about building out a robust project index before scoping the request. Just make sure the name and description (the first 1-2 sentences) are good and that it has all the right labels. You can comment out the rest of the template to fill out when you have more information.&#x20;
{% endhint %}

Move the issue to the "Needs Scoping" Zenhub pipeline.&#x20;

## Scoping

* PM schedules an intake meeting. Ideally, this will include actual users as well as the workgroup manager.&#x20;
* Prepare [Intake Meeting Agenda](https://docs.google.com/document/d/1AcjxHv6XCEutSAIzNebnxNR9EL8CORiHrVfNlQuChII/edit#heading=h.f4j2i9aovme).
* Meet and take notes; photos/recording may also be helpful.
* Add notes/photos/recording to Github issue.
* If necessary, update issue description to ensure it clearly summarizes request.

## Builder Huddle

* PM sets up meeting with potential builders, e.g. Dev for a Vision Zero Viewer project, Apps for a ROW Portal project. If we aren't sure which route we'll go or the solution will require both, add to the [Dev/Product Sync agenda](https://docs.google.com/document/d/1hWzg-qluRBrTetEGjg\_eHrR9qT4IqenaUgk6FR6APbU/edit) to discuss.&#x20;
* Prepare a summary of request. Here's an [example done as a presentation deck](https://docs.google.com/presentation/d/1brqKe0IfavZ4K8Dp2jv1QBW\_Kfa7umDROOiQ2lHc67I/edit#slide=id.p) ([template](https://docs.google.com/presentation/d/1i9rcEEsEIWtHLJd\_e0foQpNX9bQkffj4zHkzRsguW60/edit?usp=sharing)).&#x20;
* At the meeting, discuss the recommended approach and fill out the "Effort" section of the [project evaluation in the DTS Portal](https://atd.knack.com/dts#project-evaluation/).&#x20;

{% hint style="info" %}
Sometimes we realize that the request isn't actually project-sized during the intake meeting or the builder huddle. No worries, we had a good opportunity to learn more about our customers' work. Might make sense to organize this work as an [epic](github-project-management.md#epics), once the time comes.&#x20;
{% endhint %}

## Product Sync

After assessing effort with the builders, it's time to assess value with the product team.&#x20;

* Add to [DTS Product Sync agenda](https://docs.google.com/document/d/1SA3iEyfiBlnxgx2miYn5EncVeUrQyOtUfAk-93574z8/edit) for a "Refinement-week", i.e. the second Wednesday in a sprint. If feedback is needed sooner, or the project was initiated internally (like work on our technical infrastructure), bring it to [Dev + Product Sync](https://docs.google.com/document/d/1hWzg-qluRBrTetEGjg\_eHrR9qT4IqenaUgk6FR6APbU/edit) instead.&#x20;
* As a group, fill out the "Value" section of the [project evaluation in the DTS Portal](https://atd.knack.com/dts#project-evaluation/).&#x20;

After the evaluation is complete, the Austinmobility.io script will pick them up and you will be able to see the project in relation to other projects in our backlog using the [prioritization matrix](https://austinmobility.io/projects?status=backlog\&view=chart).&#x20;

Move the index issue into the "Backlog" pipeline.&#x20;

## Activation

Once the time comes to work on the project:

* Move the issue to the "In Progress" pipeline.&#x20;
* If you don't already have regular Sprint Reviews with the project's stakeholders, set up recurring meetings for the duration of the project so that you can demo work and get feedback.&#x20;
* [Create a `Project:` label in Github](https://github.com/cityofaustin/atd-data-tech/labels?q=project). Fill out the "Description" field and use the hex code `#3D3D3D` for "Color." Use this label for all issues moving forward so that they render on the projects' website page and are easy to surface on Zenhub/Github.&#x20;
* Convert the project index issue into an epic and assign future issues to the epic moving forward. Zenhub allows you to nest epics or assign issues to multiple epics, so feel free to use that functionality if you find it helpful.  &#x20;
* Ensure that everyone who has stake in the project, from potentially impacted staff to interested executives, whose high-level outcomes and success measures are documented and there is alignment among all stakeholders
* Optionally, hold a [kick-off meeting](https://docs.google.com/presentation/d/10VOVnzf8Di\_IGhh0fInLdMvBgH4n-ysVegiN8LvsFOc/edit#slide=id.g653199e8f7\_0\_7) with your stakeholders.&#x20;

## Delivery

* Perform requirements gathering with users. User interviews
  * user story template
* Document bugs, feature requests, and enhancements as Github issues. You may want to encourage your users to contribute using the [DTS Service Request](https://atd.knack.com/dts#new-service-request/).&#x20;

{% hint style="info" %}
When you click the "New Issue" button in the upper righthand corner of most pages in Github, you'll find issue templates for bug reports, features, and enhancements. You have to scroll to the bottom of the page and click to the "Open a blank issue" link to get a plain issue. To skip all that, bookmark the [direct link to the blank issue form](https://github.com/cityofaustin/atd-data-tech/issues/new) and add it to your browser bar.&#x20;

<img src="../.gitbook/assets/Screenshot 2024-03-13 at 12.25.42 PM.png" alt="" data-size="original">
{% endhint %}

* Work with the team lead—via Github comments or in a planning/refinement/sync meeting—to assign an [estimate](https://atd-dts.gitbook.io/wiki/product-ops/github-project-management#estimates) to each issue. Zenhub's [Planning Poker](https://www.zenhub.com/planning-poker) is also a fun way to estimate asynchronously. &#x20;
* Bring complex issues to Backlog Refinement ([Apps](https://docs.google.com/document/d/1NENOLq5v9n77N\_sNbV\_iu2dzi9cU5dTfAex9ay7Q7N0/edit#heading=h.mlv4bpg8du2a) | [Dev](https://docs.google.com/document/d/1k6L33xi1zDWEtW3n3oh212DmDug2F8yHLaZ-XW20Dsg/edit#heading=h.7h18hmh8ypw)) to discuss with builders. Break them up into smaller issues as necessary, document the agreed-upon approach, and align on an [estimate](https://atd-dts.gitbook.io/wiki/product-ops/github-project-management#estimates).&#x20;
* Prioritize work with stakeholders during Sprint Reviews.&#x20;
* If practical, [release](release-management-process.md) versions of an application on a regular basis.&#x20;
* Perform usability testing to surface improvements to the user experience. Since we don't have dedicated user researchers at DTS, we typically use [think-aloud usability testing](https://www.nngroup.com/articles/thinking-aloud-the-1-usability-tool/) &#x20;

## Completion&#x20;

A project is considered complete when the minimum viable product—captured in the "Scope and Deliverables" section of the issue's project index—is delivered to users.&#x20;

{% hint style="info" %}
For complex projects, you might consider making an "Onboarding and Stabilization" epic in the project to capture any critical bugs documentation needs that surface during roll out and keeping the project open until those issues are addressed.&#x20;
{% endhint %}

* Often, there are still issues in the backlog that are not actually must-haves. Remove the project label, remove them from the epic, and review them the next time you meet with stakeholders so they can prioritize those against any of their other ongoing requests.&#x20;
* Retire the project label by adding "\[Archive]" to the "Description" field and update the hex code to `#B8B8B7`.

<figure><img src="../.gitbook/assets/Screenshot 2024-03-13 at 2.26.13 PM (1).png" alt="" width="563"><figcaption></figcaption></figure>

* Write a final update as a comment on the index issue and close the issue.&#x20;
* By default, completed projects show on ["Complete" tab on the “Projects" page](https://austinmobility.io/projects?status=completed) of the website, but you can apply the `Archived Project` label to prevent that. We like to curate this page to showcase our most compelling, impactful, and well-documented work.&#x20;
