# Release Process

Below are the steps needed to successfully release new code to one of our custom applications. The Apps team has defined a separate, specialized process for deploying custom code in Knack.&#x20;

* The Product Manager & Dev Lead collaboratively plan what issues will be included in the release
* The Dev Lead ensures that all issues are assigned, completed, and tested before the release
* After a pull request is reviewed by several devs and the Product Manager, any new functionality is added to the QA test script &#x20;
* The Dev Lead creates a single pull request that includes the scope of the release\
  _Example:_ [_https://github.com/cityofaustin/atd-vz-data/pull/496_](https://github.com/cityofaustin/atd-vz-data/pull/496)
* The Dev Lead cleans up release notes\
  Exa[_https://github.com/cityofaustin/atd-vz-data/releases_](https://github.com/cityofaustin/atd-vz-data/releases/)
* The release branch is deployed to Staging and the Product Manager performs QA testing&#x20;
* Release party (live)
  * Merge pull request (Product Manager)&#x20;
  * Notify #atd-dev that the pull request has been tested, approved, and merged (Product Manager)
  * QA updates and smoke tests on Production environment (Product Manager)
  * Product manager sends release notes to stakeholders and users  \
