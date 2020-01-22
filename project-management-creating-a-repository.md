# Project-Management:-Creating-a-Repository

If you are starting a new \(non-Amanda, non-geospatial\) application:

1. [Create a new repository in the City of Austin organization](https://github.com/organizations/cityofaustin/repositories/new). Click check box `Initialize this repository with a README`. Follow [our naming conventions](project-management:-creating-a-repository.md#naming-conventions), include a description, and initialize the repository with a README. 
2. Click the green "Add repository" button from [our team's repository page](https://github.com/orgs/cityofaustin/teams/transportation/repositories) and add the repository you just created. 
3. Fill out that README with a basic description of the application. If it is a Knack app, use [this template](https://github.com/cityofaustin/atd-data-tech/issues/14) as a starting point.   
4. Give the Settings app access to the repository on the [_City of Austin installed Github Apps_](https://github.com/organizations/cityofaustin/settings/installations/860529) page. 
5. Click the "Set up templates" button from the Features section of the repo's _Settings_ page — `https://github.com/cityofaustin/`\[new-repo-name\]`/templates/edit`. From the "Add template" drop down, select "Bug report." This gives you a handy template and generates a `.github` directory in the root of the repo that you can use for the final step.
6. Delete all existing of the default Github labels from the repo's label page — `https://github.com/cityofaustin/`\[new-repo-name\]`/labels`. 
7. Navigate to the `.github` directory from the root repository page, `https://github.com/cityofaustin/`\[new-repo-name\]\`. 
8. Click the "Create new file" button on the upper right and name it `settings.yml`. 
9. Copy the [standard DTS labels YAML file](https://github.com/cityofaustin/atd-data-tech/blob/master/.github/settings.yml) and paste it into your new `settings.yml`. You'll see that the new repo now has all the labels you'll need to start. 
10. Go to `https://github.com/cityofaustin/`\[new-repo-name\]`/settings/Collaborators & teams` and add the `Transportation` team as `Admin`.

## Naming conventions

* Applications built specifically for Austin Transportation Department have `atd-` prepended to the repository name 
* Applications built with the low-code application [Knack](https://www.knack.com/) have `atd-knack` prepended to the repository name
* Hyphens between words
* Omit articles \(a/an/the\)

