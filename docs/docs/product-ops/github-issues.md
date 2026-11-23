# Tracking work with GitHub issues

Data & Technology Services tracks all of our work as GitHub issues in the [atd-data-tech](https://github.com/cityofaustin/atd-data-tech) repository. We rely on a standardized system of labels, issue types, and issue fields to plan sprints, report on service delivery, and keep [Austinmobility.io](https://austinmobility.io) and the [DTS Portfolio](https://github.com/orgs/cityofaustin/projects/27) up to date.

## Creating an issue

With [a few exceptions](github-issues.md#type), you should use the ["DTS Issue" template](https://github.com/cityofaustin/atd-data-tech/issues/new?template=-+dts-issue.md) to create issues. It's the first option in the list of templates you see after clicking the green "New Issue" button in the upper righthand corner of the [GitHub _Issues_ page](https://github.com/cityofaustin/atd-data-tech/issues).&#x20;

<figure><img src="../.gitbook/assets/Screenshot 2026-11-20 at 1.41.11 PM.png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
Many people find it handy add a bookmark [the direct link](https://github.com/cityofaustin/atd-data-tech/issues/new?template=-%20dts-issue.md) to their browser bar so they can open new issues with one-click.&#x20;
{% endhint %}

## Title

Issue titles should begin with a verb and summarize the work: Update, Implement, Add, Remove, Review, Discuss, Troubleshoot… You don't need to spell out application names or issue types in the title; the fields and labels cover that.

| <h4><mark style="color:$primary;"><strong>Use this</strong></mark></h4> | <h4><mark style="color:$primary;"><strong>Not this</strong></mark></h4> |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| Add task order fields to "Funding" tab                                  | AMD staff can't track all funding information                           |
| Publish new CCTV camera thumbnails                                      | CCTV map issues                                                         |
| Replace VZE council district dataset                                    | Outdated council district AGOL resource in Vision Zero Editor           |

## Assignees

The person or people who will do the work. Oftentimes, issues are temporarily assigned to product managers or team leads while they are scoped and prioritized.&#x20;

## Type

The majority of your issues will be tasks. The other types are typically used by product managers and team leads.

| <h4><mark style="color:$primary;"><strong>Type</strong></mark></h4> | <h4><mark style="color:$primary;"><strong>Description</strong></mark></h4>                                                                                                                                                                              |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Task                                                                | A specific piece of work. Can have sub-issues.                                                                                                                                                                                                          |
| Epic                                                                | A body of work bigger than a task but smaller than a project. See hen to use a task instead of a parent issue.                                                                                                                                          |
| Project                                                             | A substantial, time-boxed endeavor that spans multiple sprints, significantly improves TPW operations, or achieves a notable strategic outcome.                                                                                                         |
| Product                                                             | An application or digital system we build and support in-house, such as the [Finance & Purchasing Portal](https://austinmobility.io/products/2903) or the [Vision Zero Crash Data System](https://austinmobility.io/products/255).                      |
| Service                                                             | Ongoing consultation, training, or assistance to support the use of data and technology, such as [Geodata Quality Control](https://austinmobility.io/services/28553) or [Power BI Support](https://github.com/cityofaustin/atd-data-tech/issues/27373). |

{% hint style="info" %}
### When do you use an _epic_ instead of a _task_ with subissues?

Epics and parent tasks are both useful for bundling issues into hierarchies for organizational purposes. Use an epic when you want to record a start date and end date so that the collection of work is visible in a GitHub projects roadmap view. An epic can also be assigned to multiple DTS teams.&#x20;
{% endhint %}

## Fields

Issue fields appear under "Fields" in the issue's right-hand sidebar, and the set you see depends on the issue type:

<table data-header-hidden data-search="false"><thead><tr><th width="217.93359375"></th><th width="100.39453125" align="center"></th><th width="100.42578125" align="center"></th><th width="100.0234375" align="center"></th><th width="100.25" align="center"></th><th width="99.9375" align="center"></th></tr></thead><tbody><tr><td></td><td align="center"><h4><mark style="color:$primary;"><strong>Task</strong></mark></h4></td><td align="center"><h4><mark style="color:$primary;"><strong>Epic</strong></mark></h4></td><td align="center"><h4><mark style="color:$primary;"><strong>Project</strong></mark></h4></td><td align="center"><h4><mark style="color:$primary;"><strong>Product</strong></mark></h4></td><td align="center"><h4><mark style="color:$primary;"><strong>Service</strong></mark></h4></td></tr><tr><td><h4><mark style="color:$primary;">DTS Status</mark></h4></td><td align="center"><mark style="color:green;">●</mark></td><td align="center"><mark style="color:green;">●</mark></td><td align="center"><mark style="color:green;">●</mark></td><td align="center"><mark style="color:green;">●</mark></td><td align="center"><mark style="color:green;">●</mark></td></tr><tr><td><h4><mark style="color:$primary;">TPW Divisions</mark></h4></td><td align="center"><mark style="color:green;">●</mark></td><td align="center"><mark style="color:green;">●</mark></td><td align="center"><mark style="color:green;">●</mark></td><td align="center"><mark style="color:green;">●</mark></td><td align="center"><mark style="color:green;">●</mark></td></tr><tr><td><h4><mark style="color:$primary;">DTS Estimate</mark></h4></td><td align="center"><mark style="color:green;">●</mark></td><td align="center"><br></td><td align="center"><br></td><td align="center"><br></td><td align="center"><br></td></tr><tr><td><h4><mark style="color:$primary;">DTS Team</mark></h4></td><td align="center"><mark style="color:green;">●</mark></td><td align="center"><br></td><td align="center"><br></td><td align="center"><mark style="color:green;">●</mark></td><td align="center"><mark style="color:green;">●</mark></td></tr><tr><td><h4><mark style="color:$primary;">DTS Teams</mark></h4></td><td align="center"><br></td><td align="center"><mark style="color:green;">●</mark></td><td align="center"><mark style="color:green;">●</mark></td><td align="center"><br></td><td align="center"><br></td></tr><tr><td><h4><mark style="color:$primary;">DTS Description</mark></h4></td><td align="center"><br></td><td align="center"><br></td><td align="center"><mark style="color:green;">●</mark></td><td align="center"><mark style="color:green;">●</mark></td><td align="center"><mark style="color:green;">●</mark></td></tr><tr><td><h4><mark style="color:$primary;">DTS Start Date</mark>  </h4></td><td align="center"><br></td><td align="center"><mark style="color:green;">●</mark></td><td align="center"><mark style="color:green;">●</mark></td><td align="center"><br></td><td align="center"><br></td></tr><tr><td><h4><mark style="color:$primary;">DTS End Date</mark>  </h4></td><td align="center"><br></td><td align="center"><mark style="color:green;">●</mark></td><td align="center"><mark style="color:green;">●</mark></td><td align="center"><br></td><td align="center"><br></td></tr><tr><td><h4><mark style="color:$primary;">DTS Application URL</mark></h4></td><td align="center"><br></td><td align="center"><br></td><td align="center"><br></td><td align="center"><mark style="color:green;">●</mark></td><td align="center"><br></td></tr><tr><td><h4><mark style="color:$primary;">DTS Solution Type</mark></h4></td><td align="center"><br></td><td align="center"><br></td><td align="center"><br></td><td align="center"><mark style="color:green;">●</mark></td><td align="center"><br></td></tr></tbody></table>

{% hint style="info" %}
Projects and epics can be assigned to multiple DTS teams, whereas tasks, products, and services are limited to single teams. If you convert an issue from project/epic to another issue type, or vice versa, after filling out the teams field, you'll see both `DTS Team` and `DTS Teams` fields. Delete the value for the field that no longer applies and refresh the page to resolve the redundant information.&#x20;

&#x20;![](<../.gitbook/assets/Screenshot 2026-11-23 at 11.51.38 AM.png>)
{% endhint %}

### Task Issue Field Standards&#x20;

#### DTS Status

Where the issue is in its life. Update it as you go; this single field drives every team board.

<table data-header-hidden data-search="false"><thead><tr><th></th><th></th></tr></thead><tbody><tr><td><h4><mark style="color:$primary;">Status</mark></h4></td><td><h4><mark style="color:$primary;">Definition</mark></h4></td></tr><tr><td>New</td><td>Awaiting triage by the Service Desk, team lead, or product manager</td></tr><tr><td>Needs Scoping</td><td>Ready for scoping and prioritization</td></tr><tr><td>Backlog</td><td>Scoped and prioritized</td></tr><tr><td>On Deck</td><td>Scheduled to begin this sprint</td></tr><tr><td>In Progress</td><td>Actively underway</td></tr><tr><td>Review/QA</td><td>Proposed as complete—pending teammate or stakeholder sign-off</td></tr><tr><td>Blocked</td><td>Cannot be worked on at this time</td></tr><tr><td>Ongoing</td><td>A continual service, product, or task—no projects, no epics</td></tr><tr><td>Icebox</td><td>Not under consideration at this time</td></tr><tr><td>Closed</td><td>Completed, or closed as not planned or duplicate</td></tr></tbody></table>

{% hint style="info" %}
Closing an issue, by default, records it as something we completed. If it's closed for a different reason, you can click the caret on the "Close" button to note this:

<p align="center"><img src="../.gitbook/assets/Screenshot 2026-08-21 at 6.11.20 PM.png" alt="" data-size="original"><br></p>

If the **work wasn't executed**, make sure to **delete the estimate** from the issue so that we can keep our service delivery metrics accurate.
{% endhint %}

#### DTS Team

The DTS team doing the work: Apps, Data Science, Dev, ECM, Geo, Maximo, Product, Tech Services, or Operations. Selecting a DTS Team on a task's issue field adds the issue to that team's project. A task can only be assigned to a single team. If two teams are working on the same thing, copy the issue so each team has its own that they can size according to the amount of effort they put in.&#x20;

#### TPW Divisions

The primary division(s) served by this work. Use DTS for internal work and TPW for department-wide services and solutions. Every issue needs at least one division; add more only if the work truly serves several.&#x20;

#### DTS Estimate

Estimates are how we track the level of effort of issues. Tasks should always have an estimate once pulled on deck or into progress, and estimates can be adjusted as needed. Check estimates for accuracy whenever you close an issue. Leave estimates blank for duplicates and other issues we decide not to undertake.

Estimates are also useful for

* Sprint planning — see when a person or team has too many (or too few!) issues assigned to them
* Stakeholder discussions when prioritizing features — easily show stakeholders that we can accomplish, in a coming sprint, e.g. five `1`-sized issues, a `2`-sized issue and a `3`-sized issue, _or_ a single `5`-sized issue
* [Velocity tracking](https://www.zenhub.com/blog/track-your-speed-of-work-with-agile-velocity-charts/) — identifying the speed the team typically delivers work, useful to determine when a set of work will be completed

<figure><img src="../.gitbook/assets/Estimate.png" alt="" width="563"><figcaption></figcaption></figure>

_Curious why we use_ [_Fibonacci_](https://en.wikipedia.org/wiki/Fibonacci_sequence) _numbers for our estimates? Check out this_ [_lengthy explanation_](https://www.agilebin.com/blog/10-reasons-to-use-fibonacci-sequence-for-story-points)_._

## Labels

### Required Labels for Tasks

#### `Service`

Every task requires a single `Service:` label. You can pull up a list of your team's labels by typing an asterisk and then your team name, e.g. entering  `*apps` will pull up all the Apps Team `Service:` labels.

{% embed url="https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-LzDGg7hKQ_fUjXnzGGx%2Fuploads%2FgWI6CnWBmOQ0vH6IqGIj%2FNarrow%20Service%20Label%20by%20Team.mp4?alt=media&token=804faa03-9ee3-4316-88d1-3f6606267ea9" %}

#### `Project` and `Product`

If a Task or an Epic is part of a project, apply that `Project:` label, and if the work is on a particular product, it needs that `Product:` label.&#x20;

### Optional Labels for Tasks

#### `Need`

Use `Need:` to prioritize a potential feature or enhancement

* 1-Must Have — No point in delivering a solution without this
* 2-Should Have — May be painful to leave out, but the solution is still viable
* 3-Could Have — Wanted, but affects fewer users or has less impact on business than other features
* 4-Won't Have — Will not be delivered at this time

#### `Impact`

Use `Impact:` to indicate the effect of a bug or infrastructure failure

* 1-Severe — Severely impacts TPW service delivery
* 2-Major — Causes a major interruption of TPW service delivery
* 3-Minor — Deteriorates TPW service delivery
* 4-None — Does not affect TPW service delivery
