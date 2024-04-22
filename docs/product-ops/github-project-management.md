---
description: >-
  The Data and Technology Services team is using GitHub and Zenhub for agile
  project management. This is an overview of our process.
---

# Agile Project Management with GitHub + Zenhub

## Set up

1. [Create a GitHub account](https://github.com/join) if you don't have one already.
2. Have someone on the DTS team add you to the [City of Austin](https://github.com/cityofaustin) organization and the [Transportation](https://github.com/orgs/cityofaustin/teams/transportation) team as a Maintainer.
3. Add the [Zenhub extension](https://www.zenhub.com/extension) to your browser.
4. Log into the [Zenhub web app](http://app.zenhub.com/) using your normal GitHub credentials to activate your account.&#x20;

## Pipelines

The Zenhub board uses a [Kanban](https://en.wikipedia.org/wiki/Kanban\_board)-like format where issues are represented as cards and move across the board as they enter various stages of completion. Our workspace pipelines are:

* **New Issues** - Awaiting triage by Level I Support or Product.&#x20;
* **Icebox** - Recorded and understood, but not committed to. Lack of evidence of overall value or applicability. We don't want to delete these and create a cycle of raising duplicate issues, so we keep them in our icebox with just enough information attached that we can pick it up sometime in the future — if and when we choose to do so.
* **Needs Scoping** - Potential projects or features that require clarification or exploration before presenting to builders for estimation and prioritizing.
* **Backlog** - Issues that are ready to be tackled by the team when the time comes. This pipeline is prioritized: the higher an issue is on this list, the higher the priority.&#x20;
* **On Deck** - Slated for work in the current sprint. During Sprint Planning, we pull all issues that we intend to work on during the sprint into On Deck.
* **Blocked** - Issues that cannot be completed — often waiting on CTM or user feedback.
* **In Progress** - This one is self-explanatory. Each Issue in this pipeline should have an assigned owner who is responsible for its completion.
* **Ongoing** - Continually supported products and activities.
* **Review/QA** - Proposed as complete but awaiting approval  — code review and/or acceptance testing — before closure.&#x20;
* **Ready to Deploy** - Code or configuration that is ready to be deployed to production.&#x20;
* **Closed** - Done! 🙌

## Issues

Tracking our work in issues not only helps us stay organized, it gives us data on where we're spending our time. To create an issue, click the green "New issue" button in the upper right corner of the ["Issues" page](https://github.com/cityofaustin/atd-data-tech/issues) or our [Zenhub board](https://github.com/cityofaustin/atd-data-tech#zenhub).

![Screenshot of the Issues page with the "New issue" button circled. ](https://github.com/cityofaustin/atd-data-tech/raw/master/images/Create-new-issue.png?raw=true)

You will see a list of our custom issue templates. These are handy for creating bug reports, meetings, etc. with boilerplate information and structure.

### Issue Titles

It is best practice for issue titles to **begin with a verb** and **summarize** the work to be completed. This convention improves readability and helps keep our tasks action-oriented and unambiguous.&#x20;

Here are some examples:

| Use this                                                        | Not this                                                  |
| --------------------------------------------------------------- | --------------------------------------------------------- |
| Replace the council district dataset used in Vision Zero Viewer | Outdated/inaccurate council district AGOL resource in VZV |
| Implement new work activity fields in the Moped editor UI       | AMD not tracking funding information                      |
| Publish new CCTV camera thumbnails                              | CCTV map issues                                           |

## Labels

You can apply labels when looking at an individual issue by clicking the "Labels" heading in the right-hand sidebar. You can also [apply labels in bulk from on our Zenhub board](https://www.zenhub.com/blog/task-board-bulk-actions/).

Labels allow us to view related issues across the Zenhub pipelines. For example, during Apps Team Sprint Planning, we filter down to  `Service: Apps` and during our periodic meetings with AMD we use the `Workgroup: AMD` label to look at all the work — across teams, of all sizes — that we're doing for them.&#x20;

All to say: It's important to ensure issues are properly labeled.&#x20;

### Required labels

* [**Workgroup**](https://github.com/cityofaustin/atd-data-tech/labels?q=Workgroup%3A+) — the customer we're serving; `Workgroup: DTS` for internal work and `Workgroup: ATD` for department-wide work
* [**Service**](https://github.com/cityofaustin/atd-data-tech/labels?q=Service%3A+) — The DTS service team the work will be handled by
* **Project** and/or **Product** labels
  * [**Projects**](https://github.com/cityofaustin/atd-data-tech/labels?q=Project%3A) refer to a substantial scope of related work that will reach a state of relative completion, such as the [AGOL Audit](https://github.com/cityofaustin/atd-data-tech/issues/253)&#x20;
  * [**Products**](https://github.com/cityofaustin/atd-data-tech/labels?q=Product%3A+) are solutions that we continue to support over time, including all in-house applications, such as the Vision Zero Crash Data System
  * Often, a major feature or enhancement to an existing product will require enough resources and coordination that it qualifies as a project. [Warehouse Inventory](https://github.com/cityofaustin/atd-data-tech/issues/20), for example, was a major set of features and enhancements to AMD Data Tracker and the Finance and Inventory App, so it needed both **Product** and **Project** labels&#x20;

### Optional labels

A DTS team or individual product manager may find these additional label categories helpful&#x20;

* [**Type**](https://github.com/cityofaustin/atd-data-tech/labels?q=Type%3A) — The type of request or task
* [**Impact**](https://github.com/cityofaustin/atd-data-tech/labels?q=Impact%3A+) — The effect of a bug, infrastructure failure, etc.
  * `Impact: 1-Severe` — Severely impacts TPW service delivery&#x20;
  * `Impact: 2-Major` — Causes a major interruption of TPW service delivery
  * `Impact: 3-Minor` — Deteriorates TPW service delivery
  * `Impact: 4-None` — Does not affect TPW service delivery&#x20;
* [**Need**](https://github.com/cityofaustin/atd-data-tech/labels?q=Need%3A) —  To designate priority of a potential feature or enhancement
  * `Impact: 1-Severe` — Severely impacts TPW service delivery
  * `Impact: 2-Major` — Causes a major interruption of TPW service delivery
  * `Impact: 3-Minor` — Deteriorates TPW service delivery
  * `Impact: 4-None` — Does not affect TPW service delivery
* [**Provider**](https://github.com/cityofaustin/atd-data-tech/labels?q=Provider%3A) — The external team or vendor executing the issue&#x20;

## Estimates

Estimates are how we track the level of effort of issues. This is useful for

* Sprint planning to see when a person or team has too many issues (or too few!) issues assigned to them
* Stakeholder discussions when prioritizing features — being able to show stakeholders easily that we can accomplish, say, three small tasks, two medium, or one large
* [Velocity tracking](https://www.zenhub.com/blog/track-your-speed-of-work-with-agile-velocity-charts/), which helps us predict the likelihood we can complete things by a given date

[This is a good article](https://help.zenhub.com/support/solutions/articles/43000010347-estimate-work-using-story-points) about the hows and whys of estimates with ZenHub.

![Estimates (1-5) align with shirt sizes (XS-XXL). Complexity, uncertainty, and time increase as numbers/sizes increase](https://github.com/cityofaustin/atd-data-tech/raw/master/images/Relative-estimates.png)

## Epics

Epics are a powerful feature that Zenhub adds to Github. They allow you to group related tasks and easily track them from one place. [Here is a solid guide to how they work](https://www.zenhub.com/blog/working-with-epics-in-github/). Here[ is an example](https://github.com/cityofaustin/techstack/issues/1215) from another City of Austin project.

For ongoing tasks such as a recurring meeting, it may help to create an epic and put the individual instances of the tasks inside it. [Here is an example](https://github.com/cityofaustin/atd-geospatial/issues/4) of that type of usage for a task performed for a customer regularly.

Epics do not need estimates assigned to them manually. Instead, the effort is represented by the total of all the story points in the epic's issues.

Ultimately, epics can group whatever makes sense for you and your collaborators. Some people prefer [issues with task lists inside them](https://github.com/cityofaustin/techstack/issues/616). That's fine as long as the issue doesn't require more effort than we can represent in our [estimate scale](https://github.com/cityofaustin/atd-data-tech/wiki/Project-Management:-Github-and-ZenHub-Basics#estimates) for a single issue.

## Assignees

An issue should be assigned to the person/people who will tackle it. This enables team members to filter down to issues they are responsible for easily.

## Learning More

Here are some additional guides for some of our most relied-upon Zenhub functionality:

* [Filtering the Board](https://help.zenhub.com/support/solutions/articles/43000498508--filtering-the-board)
* "Use multi-action to make bulk Issue updates" on [this page](https://help.zenhub.com/support/solutions/articles/43000031098-get-to-know-board-features-and-functionality)

The [Zenhub docs](https://help.zenhub.com/support/home) are super-solid, and we encourage you to peruse them at your leisure. Remember that some functionality—renaming and reordering pipelines themselves, for example—will affect the workspace for the whole team. We're always looking for ways to improve our process, so if you come across an approach or functionality you think is promising, add it to the agenda for our weekly Product Sync or share it in the `#atd-product` Slack channel!
