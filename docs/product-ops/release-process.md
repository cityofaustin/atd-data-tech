# Release Process

This is the general process we use to release new code to one of our custom applications. The Apps team has defined a separate, specialized [process for deploying custom code in Knack](https://atd-dts.gitbook.io/atd-knack-operations/).&#x20;

* The Product Manager & Dev Lead collaboratively plan what issues will be included in the release
* The Dev Lead ensures that all issues are assigned, completed, and tested before the release
* After a pull request is reviewed by several devs, the PM reviews and adds any new functionality to the QA test script &#x20;
* The Dev Lead creates a single pull request that includes the scope of the release\
  _Example:_ [_https://github.com/cityofaustin/atd-vz-data/pull/496_](https://github.com/cityofaustin/atd-vz-data/pull/496)
* The Dev Lead cleans up release notes\
  _Example:_ [_https://github.com/cityofaustin/atd-vz-data/releases_](https://github.com/cityofaustin/atd-vz-data/releases/)
* The release branch is deployed to Staging and the PM performs QA testing&#x20;
* The PM notifies users of scheduled downtime
* Release party 🎉
  * PM merges pull request
  * Dev Lead notifies #atd-dev that the pull request has been tested, approved, and merged&#x20;
  * PM sends release notes to stakeholders and users&#x20;
  * Team debriefs on the process and updates the steps as needed&#x20;
  * Dev Lead creates an issue for the next release

Application-specific versions of this process are written as issues so they can be tracked collaboratively for each release. \
_Example:_ [_https://github.com/cityofaustin/atd-data-tech/issues/16094_](https://github.com/cityofaustin/atd-data-tech/issues/16094)&#x20;
