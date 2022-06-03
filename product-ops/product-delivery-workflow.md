# Project Delivery Workflow

Requests are typically submitted via the [DTS Service Request Portal](https://atd.knack.com/dts#new-service-request/) and assigned to the [appropriate product manager](https://docs.google.com/spreadsheets/d/1BsOklJsJiIIqdlmtNtr9peL3URS7Hdu9RVj4D97701k/edit#gid=1907210355) during triage.

The PM takes it from there:

* Move to "Needs Scoping" pipeline
* Confirm requestor authority and get clarification from customer if needed
* Create an issue for an Intake Meeting
  * Assign an upcoming sprint&#x20;
  * Apply appropriate milestone and move to "Backlog" or "On Deck" pipeline
* Create new Drive folder in [_ATD DTS > Projects_](https://drive.google.com/drive/folders/1ZGTzTNd8SKWzg7qDCqtib5\_SX8nqBThx)&#x20;

{% hint style="info" %}
**Products** are the solutions we build for our customers, including Knack apps, AMANDA apps, custom software, and data systems. We improve and extend our products over time so that they deliver continuous value to Austin Transportation as business needs evolve.&#x20;

**Projects** are temporary endeavors — whether [identifying a vendor solution](https://github.com/cityofaustin/atd-data-tech/issues/65), [building a major feature for an existing Product](https://github.com/cityofaustin/atd-data-tech/issues/533), [overhauling a dataset](https://github.com/cityofaustin/atd-data-tech/issues/254), or [delivering a complex map](https://github.com/cityofaustin/atd-data-tech/issues/1911). They accomplish a singular goal and have a defined completion date.&#x20;

We consider the first release of a new solution, e.g. Moped 1.0, a **project**. Once the new product is launched to users, that project can be closed and the product is added to our portfolio.&#x20;
{% endhint %}

## Scoping

* Assigned PM schedules Intake Meeting; Ideally this will include actual users as well as the workgroup manager
* Prepare [Intake Meeting Agenda](https://docs.google.com/document/d/1AcjxHv6XCEutSAIzNebnxNR9EL8CORiHrVfNlQuChII/edit#heading=h.f4j2i9aovme)
* Meet and take notes; photos/recording may also be helpful
* Add notes/photos/recording to Github issue
* If necessary, update issue description to ensure it clearly summarizes request

## Builder Huddle

* PM sets up meeting with potential builders, e.g. Dev for a Vision Zero Viewer project, Apps for a ROW Portal project. Include both  Dev might be included if we aren't sure which route we'll go or the solution will require both&#x20;
* Prepare a summary of request — [example](https://docs.google.com/presentation/d/1brqKe0IfavZ4K8Dp2jv1QBW\_Kfa7umDROOiQ2lHc67I/edit#slide=id.p) and [template](https://docs.google.com/presentation/d/1i9rcEEsEIWtHLJd\_e0foQpNX9bQkffj4zHkzRsguW60/edit?usp=sharing)
* Meet and discuss
  * Recommended approach
  * Level of effort

First we ask: Is this truly "project-sized" — taking multiple sprints for a builder and PM to deliver?  &#x20;

### Nope, false alarm

No worries, we had a good opportunity to learn more about our customers' work. Might make sense to organize this work as an [epic](github-project-management.md#epics), once the time comes.&#x20;

### Indeed, a project

Create high-level documentation to ensure the project is clearly represented and prioritized in our backlog.&#x20;

* Update Github issue to match [Project Index template](https://github.com/cityofaustin/atd-data-tech/issues/new?assignees=\&labels=Project+Index\&template=-all-purpose--project-index.md\&title=Project%3A+%5BYour+Project+Name+in+Title+Case%5D)
* Add _Project_ label [here](https://github.com/cityofaustin/atd-data-tech/labels) with the hex code #3D3D3D
* Add to [Weekly Product Meeting](https://docs.google.com/document/d/1hWzg-qluRBrTetEGjg\_eHrR9qT4IqenaUgk6FR6APbU/edit#heading=h.uiqzfz1q9mha) agenda to discuss with other PMs on a Wednesday
* Discuss value and effort and record in [DTS Prioritization Matrix](https://atd.knack.com/dts#project-evaluation/)

Delivery

* Move to "In Prog
* sprint reviews every sprint
* Updates&#x20;

Partnering w/ dev team

* Create issue, focusing on desired outcome&#x20;
* @mention Mateo in Github and DM him in Slack

### Completion&#x20;

A project is considered complete when the MVP (captured in the "Scope and Deliverables" section of the issue's [**Project Index**](https://github.com/cityofaustin/atd-data-tech/issues/new?assignees=\&labels=Project+Index\&template=-all-purpose--project-index.md\&title=Project%3A+%5BYour+Project+Name+in+Title+Case%5D)) is delivered to users.&#x20;

For complex projects, you might consider making an "Onboarding and Stabilization" issue in your roadmap and wait until that is complete before closing out the project.

![](<../.gitbook/assets/Screen Shot 2022-05-24 at 10.39.48 AM.png>)



****
