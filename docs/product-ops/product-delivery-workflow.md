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

Then either [create a new project index issue](https://github.com/cityofaustin/atd-data-tech/issues/new?assignees=\&labels=Project+Index\&projects=\&template=-all-purpose--project-index.md\&title=Project%3A+%5BYour+Project+Name+in+Title+Case%5D) or convert the existing issue to match the [project index template](https://github.com/cityofaustin/atd-data-tech/issues/new?assignees=\&labels=Project+Index\&projects=\&template=-all-purpose--project-index.md\&title=Project%3A+%5BYour+Project+Name+in+Title+Case%5D). Either way, make sure that the 'Project Index' label is on the issue so that an evaluation record for the project is added to the DTS Portal.&#x20;

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

Once the time comes to work on the project, move the issue to the "In Progress" pipeline. If you don't already have regular sprint reviews with the project's stakeholders, set up recurring meetings for the duration of the project so that you can demo work and get feedback.&#x20;

As you create and assign issues, make sure they all have the `Project:` label so that they render on the projects' page on the website and are easy to surface on Zenhub. You may also wish to convert the project index into an epic so that all issues are visible from the index without having to look at the Zenhub board.&#x20;

It's also critical that all issues have an estimate when they are assigned so that we can track our velocity and report on our work volume. If the issue is complex, bring it to backlog refinement before bringing to sprint planning so that the team can align on an approach and estimate. If the estimate changes while the issue is in progress, simply update it. We want the estimates on all of our closed issues to accurately reflect the effort they required.&#x20;

## Completion&#x20;

A project is considered complete when the minimum viable product (captured in the "Scope and Deliverables" section of the issue's [**Project Index**](https://github.com/cityofaustin/atd-data-tech/issues/new?assignees=\&labels=Project+Index\&template=-all-purpose--project-index.md\&title=Project%3A+%5BYour+Project+Name+in+Title+Case%5D)) is delivered to users.&#x20;

Often, there are still issues in the backlog, but these are not actually must-haves. Simply remove the project label, remove them from the epic, and review them the next time you meet with stakeholders so they can prioritize those against any of their other ongoing requests.&#x20;

For complex projects, you might consider making an "Onboarding and Stabilization" epic in the project to capture any critical bugs or enhancements that surface during roll out. After closing all those issues, the project is complete.&#x20;

![](<../.gitbook/assets/Screen Shot 2022-05-24 at 10.39.48 AM.png>)



