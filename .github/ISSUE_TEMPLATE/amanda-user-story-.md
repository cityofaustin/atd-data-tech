---
name: 'Amanda User Story '
about: Template to create a new user story for Amanda
title: 'Permit Type/Folder/Feature/Enhancement, Ex: Valet Annual/RW/Permit Renewal/Add
  Info Field Validations for permit issuance'
labels: ''
assignees: ''

---

<br><ins>**DESCRIPTION:**</ins>
As a [system/user] I want to [intent] so that [value].


<br><ins>**CUSTOMIZATION AND/OR CONFIGURATION:**</ins>
- [ ] Customization
- [ ] Configuration


<br><ins>**FOLDERS:**</ins> 
*List the Folders this enhancement affects/applies to?*
1. 
2. 


<br><ins>**USER ROLES:**</ins> 
*List the user roles this enhancement affects/applies to?*
1. 
2. 


<br><ins>**PRE-CONDITIONS:**</ins> 
*Conditions that must be met before initiating this enhancement feature.*
1. *Ex: Annual Valet Permit already exists and renewal fee has been paid in Amanda.*
2. 



<br><ins>**ACCEPTANCE CRITERIA:**</ins> 
*When <an event is triggered> and the pre-conditions are met, then <Post Events must occur> (see example below)*
1. *On the Process Info section of Annual Valet Permitting process, when the user clicks the “Save Process Info button” after updating the Process Info fields -"New Folder Issue Date" & "New Folder Expiration Date", do the following.*
    1. *Validate Bill:
            1. Validate that “Annual Valet Renewal Fee – 50180” and “Tech Surcharge Fee – 50174” is added and billed in the Fee Tab.
            2. Ensure the bill is dated after the last “Issue Date”.
    2. Successfully update dates:
            1. If the billed date is after the last “Issue Date” then 
                    <>  a. Successfully update the Process Info fields. 
                    <>  b. Is there a validation to only extend the dates out to 1yr? (confirm with Paloma/Kim/Kyle) 
    3. Warning Message:
            1. If the billed date is before the last “Issue Date”, then display the following warning message with an OK button.
                     1. “Annual Valet Renewal Fee-50180 and Tech Surcharge Fee-50174 must be added to update the Process Info dates.”
                     2. Upon clicking OK, 
                         <>  a. Return the user to the Annual Valet Permitting process.
                         <>  b. Do not update the Process Info dates.

2. When the Process Info fields are updated, do the following upon saving the "Update Issue and Expiry Date" attempt on Annual Valet Permitting Process
     1. Validate Fee Payment:
            1. Validate that the renewal bill is paid.
     2. Successful Renewal:
            1. If the billed fee is paid, then successfully update the following fields on the Folder tab. 
                 Note: Existing functionality but needs to be validated.
                        <>  a. Issue date
                        <>  b. Expiration date 
                        <>  c. Issued By fields.
            2.	Update Permitting process status to "Admin Action"
            3.	Update the permit status to “Active” if already expired.
     3. Warning Message:
            1.	If the billed fee is NOT paid, then display a warning message with an OK button.
                        <>  a. “Renewal Fee must be paid to renew the permit”
            2.	*Upon clicking OK, 
                        <>  a. Return the user to the Annual Valet Permitting process
                        <>  b. Do not process updates.*



<br><ins>**MOCKUPS:**</ins> 
*Upload relevant mockups.*
