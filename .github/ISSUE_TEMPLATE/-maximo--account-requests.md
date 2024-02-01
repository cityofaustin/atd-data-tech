---
name: "[Maximo] Account Requests"
about: Checklist for issues that require Maximo Account Updates/Creation/Deactivation
title: "[Maximo]"
labels: 'Product: Maximo, Service: Maximo, Type: IT Support'
assignees: adry-martinez, ReneVarg25

---

## New Maximo Account ## 
- [ ] Verify if the account exists prior to submitting a new account request
  - Go to **User** > **Person** > **Labor** application
  - Search by last name, then by first name
  - If account is found, notify the Requestor that the account exists and update as requested.
  - If account is ***not found***, proceed to the next steps.

- [ ] Send an e-mail to:

|  CTM Service Desk   | CTMServiceDesk@austintexas.gov |
| ------------- | ------------- |
|  **CC: MX Internal DL** | CTMXInternal@austintexas.gov |

Body:
> Please create a new Maximo account for:
>> Employee ID
>> FirstName LastName
>> Position
>> Supervisor
>> Work Group
>> Craft

- [ ] Once CTM confirms Account Creation, update the User Profile
  - Go to **Users**
  - Search for the new account by name
  - Click on the Name
  - Verify the **Default Insert Site** under **User Settings** is populated as **SBO - Public Works Street & Bridge Operations**

- [ ]  Update the **Security Group** to include the following:
  - SBO_SITE
  - SBO_MAP
  - CREW_LEAD
  - EzMaxMobile (if requested)

- [ ] Add the new account/user to the PWDMaximoUsers mailing list

### Create a new labor (if applicable) ###
- Go to **SBO Site Admin** Start Center, click on **Labor** or,
- Go to **Administration** > **Resources** > **Labor**

- [ ] Verify if the **Person ID** exists:
  - if it exists, close the request as COMPLETE
  - if it does not exist, create a person ID
   - Click on **New**
   - [ ] Add person ID (LastName_FirstName) and labor ID (employee ID)
   - [ ] Add crew
   - [ ] Click on **Craft**, then **New Row**, enter in **Craft**, and check the following boxes:
     - Default Craft for Labor
     - Inherit Rate from Craft
  - Then Save
   - [ ] Add new person in appropriate workgroup
     -  Go to **Administration** > **Resources** > **Person Groups**
     - Find the Person Group this account belongs to by searching under the **Person Group** column
     - Under **People** click on **New Row**
     - Type in the **person ID**
     - Enter in a **Sequence** number (Note: look at the sequence for all other person IDs and enter a number that is not being used)
     - For Superintendents, check the box as **Group Default** to auto-populate this person ID as the Superintendent for this person group. For Supervisor, only check the **Supervisor** box.

## Activating/Deactivating Maximo Account ##
 - [ ] Click on **Administration** > **Resources** > **People**
 - [ ] Search the person by **User ID** or by name
 - [ ] Update the person's information
 - [ ] Add **SBO** as the Person's Site under Employee Information
 - [ ] Click on the Status icon and update the profile to ACTIVE 

To **deactivate**, click on the **Status** icon and update the profile to **INACTIVE**
- [ ] Remove the profile/user from the PWD Maximo User mailing list.
