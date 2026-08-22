---
description: >-
  The Data and Technology Services teamuses GitHub Projects for agile project
  management. This is an overview of our process.
---

# Managing Services & Projects with GitHub

{% hint style="warning" %}
## This page is in the process of being updated to reflect our migration from Zenhub to GitHub Projects.&#x20;
{% endhint %}

## Set up

1. [Create a GitHub account](https://github.com/join) if you don't have one already.
2. Have someone on the DTS team add you to the [City of Austin](https://github.com/cityofaustin) organization and the [Transportation](https://github.com/orgs/cityofaustin/teams/transportation) team as a Maintainer.

## Status

Status is the way we track issues across various stages of completion. We use the following statuses:&#x20;

* **New** - Awaiting triage by the Service Desk, Team Lead, or Product Manager
* **Needs Scoping** - Potential projects or features that require clarification or exploration before presenting to builders for estimation and prioritizing
* **Backlog** - Issues that are ready to be tackled by the team when the time comes&#x20;
* **On Deck** - Slated for work in the current sprint. During Sprint Planning, we pull all issues that we intend to work on during the sprint into On Deck
* **Blocked** - Issues that cannot be completed — often waiting on CTM or user feedback
* **In Progress** - This one is self-explanatory. Each Issue in this pipeline should have an assigned owner who is responsible for its completion
* **Ongoing** - Continually supported products and activities
* **Review/QA** - Proposed as complete but awaiting approval  — code review and/or acceptance testing — before closure
* **Closed** - No longer on our to-do list, for whatever reason.&#x20;
* **Icebox** - Lack of evidence of overall value or applicability now, but potentially worthwhile in the future

{% hint style="info" %}
Closing an issue, by default, records it as something we completed. If it's closed for a different reason, you can click the caret on the "Close" button to note this:&#x20;

<p align="center"><img src="../.gitbook/assets/Screenshot 2026-08-21 at 6.11.20 PM.png" alt="" data-size="original"><br></p>

If the work wasn't executed, make sure to delete the estimate from the issue so that we can keep our service delivery metrics accurate.&#x20;
{% endhint %}

## Issues

Tracking our work in issues not only helps us stay organized, it gives us data on where we're spending our time. To create an issue, click the green "New issue" button in the upper right corner of the ["Issues" page](https://github.com/cityofaustin/atd-data-tech/issues), or bookmark a link to [this DTS issue form](https://github.com/cityofaustin/atd-data-tech/issues/new?template=--%20dts-issue.yml).&#x20;

![Screenshot of the Issues page with the "New issue" button circled. ](https://github.com/cityofaustin/atd-data-tech/raw/master/images/Create-new-issue.png?raw=true)

You will see a list of our custom issue templates. These are handy for creating bug reports, meetings, etc. with boilerplate information and structure. If you prefer to start with a blank issue, scroll to the bottom of the template list and select "Blank issue."

### Issue Titles

Issue titles should **begin with a verb**\* and **summarize the work to be completed**. This convention improves data readability and helps keep our tasks action-oriented and unambiguous. Since you'll be using `Product:` and `Type:` labels, you don't need to spell out application names or issue types.&#x20;

\*Consider _Update, Implement, Add, Remove, Review, Discuss, Troubleshoot..._&#x20;

| Use this                                                                                                                  | Not this                                                      |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| Add task order fields to "Funding" tab                                                                                    | AMD staff can't track all funding information                 |
| Publish new CCTV camera thumbnails                                                                                        | CCTV map issues                                               |
| <p>Replace Vision Zero Editor council district dataset</p><p><em>— or</em> — <br>Replace VZE council district dataset</p> | Outdated council district AGOL resource in Vision Zero Editor |

## Labels

You can apply labels by clicking the "Labels" heading in an issue's right-hand sidebar and beginning to type the label name.&#x20;

<figure><img src="../.gitbook/assets/Labeling Github Issues.png" alt="Screenshot of Github label UI predictive typing: &#x22;SM&#x22; is typed and &#x22;Workgroup: SMD&#x22; is suggested in the drop down with the description &#x22;Signs and Markings Division&#x22;"><figcaption><p>Label descriptions help with acronyms, "Type:" definitions, etc. </p></figcaption></figure>

### The importance of labels

Accurate labeling is necessary for several reasons:&#x20;

* Labels allow us to view related issues across the Zenhub pipelines. For example, during Apps Team Sprint Planning, we filter down to  `Service: Apps` and during our periodic meetings with AMD we use the `Workgroup: AMD` label to look at all the work — across teams, of all sizes — that we're doing for them. &#x20;
* Labels are also used to populate [content on the DTS website](https://austinmobility.io/projects).&#x20;
* Finally, labels are critical to the [service delivery data](https://data.austintexas.gov/Transportation-and-Mobility/Transportation-Public-Works-Data-Tech-Services-Iss/rzwg-fyv8/about_data) that we use to track, analyze, and improve our work.

### Required labels

* [**Workgroup**](https://github.com/cityofaustin/atd-data-tech/labels?q=Workgroup%3A+) — the customer we're serving; `Workgroup: DTS` for internal work and `Workgroup: TPW` for department-wide work. **Every issue should have one, and only one,** `Workgroup:`  l**abel**.
* [**Team**](https://github.com/cityofaustin/atd-data-tech/labels?q=Team%3A) — The DTS service team who will be doing the work. If there are two teams working on the same thing, copy the issue so there's one for each team.  **Every issue should have one, and only one,** `Service:`  l**abel.**
*   At least one **Project**, **Product,** or **Service** label.&#x20;

    * [**Projects**](https://github.com/cityofaustin/atd-data-tech/labels?q=Project%3A) are time-boxed endeavors — whether [identifying a vendor solution](https://github.com/cityofaustin/atd-data-tech/issues/65), [building a major feature for an existing Product](https://github.com/cityofaustin/atd-data-tech/issues/533), [overhauling a dataset](https://github.com/cityofaustin/atd-data-tech/issues/254), or [delivering a complex map](https://github.com/cityofaustin/atd-data-tech/issues/1911). They accomplish a singular goal and have a defined completion date.
    * [**Products**](https://austinmobility.io/services) are solutions that we continue to support over time, including all in-house applications, such as the [Finance and Purchasing Portal](https://austinmobility.io/products/2903) and the [Vision Zero Crash Data System](https://austinmobility.io/products/255).
    * [**Services**](https://austinmobility.io/services) are ongoing consultations, training, or assistance to support the use of data and technology. Each DTS team offers multiple services, such as [Geodata Quality Control](https://austinmobility.io/services/28553) and [Software License Administration & Installation](https://austinmobility.io/services/27294).&#x20;

    Often, a major feature or enhancement to an existing product will require enough resources and coordination that it qualifies as a project. [Warehouse Inventory](https://github.com/cityofaustin/atd-data-tech/issues/20), for example, was a major set of features and enhancements to [AMD Data Tracker](https://austinmobility.io/products/2068), so it needed both **Product** and **Project** labels.&#x20;

### Optional labels

A DTS team or individual product manager may find these additional label categories helpful&#x20;

* ​[**Type**](https://github.com/cityofaustin/atd-data-tech/labels?q=Type%3A) — The type of request or task
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

Estimates are how we track the level of effort of issues. Every issue should have an estimate once it is pulled on deck or into progress, and estimates can be adjusted as needed. Check estimates for accuracy whenever you close an issue. Leave estimates blank for duplicates and other issues we decide not to undertake.&#x20;

Like labels, **estimates are required** because they are a critical component of the [service delivery data](https://data.austintexas.gov/Transportation-and-Mobility/Transportation-Public-Works-Data-Tech-Services-Iss/rzwg-fyv8/about_data) we use to track, analyze, and improve our work. Estimates are also useful for

* Sprint planning — to see when a person or team has too many issues (or too few!) issues assigned to themS
* Stakeholder discussions when prioritizing features — being able to show stakeholders easily that we can accomplish, say, three small tasks, two medium, or one large
* [Velocity tracking](https://www.zenhub.com/blog/track-your-speed-of-work-with-agile-velocity-charts/) — i.e. predicting the likelihood we can complete a project by a given date

<figure><img src="../.gitbook/assets/Screenshot 2026-08-21 at 5.33.29 PM.png" alt=""><figcaption></figcaption></figure>

Curious why we use Fibonacci numbers for our estimates? Check out this lengthy explanation

.&#x20;

## Assignees

An issue should be assigned to the person/people who will tackle it. This enables team members to filter down to issues they are responsible for easily.

