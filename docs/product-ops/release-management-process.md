# Release Management Process

Below are the steps needed to successfully release new code to production:

* The Product Manager & Dev Lead collaboratively plan what issues will be included in the release
* The Dev team completes all issues in the planned release
* The Dev Lead creates a pull request that includes the scope of the release. Example: [https://github.com/cityofaustin/atd-vz-data/pull/496](https://github.com/cityofaustin/atd-vz-data/pull/496)
* The Product Manager QAs the updates that are included in the pull request. The QA should occur in the Stage environment.&#x20;
* The Product Manager should also complete smoke tests of that aim to ensure that the most important functions of the product or feature work as expected. Product Managers should have a list of smoke tests per product/project.
* Merge pull request (Product Manager)&#x20;
* Notify #atd-dev that the pull request has been tested, approved, and merged (Product Manager)
* QA updates and smoke tests on Production environment (Product Manager)
* Send Release Notes to Stakeholders/Customers (Product Manager) _Example:_ [_https://github.com/cityofaustin/atd-vz-data/releases_](https://github.com/cityofaustin/atd-vz-data/releases/)
