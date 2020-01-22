# Knack:-Application-Overview

[Knack](http://knack.com) is an online platform that lets you build custom business applications without writing code. We manage a growing suite of business applications built with Knack.

## When to Use Knack

## Minimum Project Requirements

* Application page in the [ATD Applications](https://atd.knack.com/dts#applications/)

### Form Fields:

`Application Name`: what the name of the application is  
 `Application Description`: explanation of what application is  
 `Application Class`: what kind of application is it  


> * Enterprise
> * Device-Specific Firmware/Software
> * ArcGIS Online Feature Service
> * ArcGIS Online Web App
> * Database Server
> * Database - Other
> * Web Application - Other
> * Computer File
> * Knack Application

`Notes`: any important notes about the application  
 `Vendor`: vendor that application is made by  


> * CSDC
> * City of Austin
> * Esri
> * Fulcrum
> * Gridsmart
> * IBM
> * KImley-Horn
> * Knack
> * Microsoft
> * Motorola
> * None
> * Open Source
> * Post Oak Traffic
> * Socrata
> * Wavetronix

`URL`: link to access application  
 `City of Austin Department Owner`: who application owner is  


> * ATD
> * CTM
> * Other

## Best Practices

**Project Documentation**

**Code Documentation**

* [Knack Mobile Optimization](https://github.com/cityofaustin/atd-data-tech/wiki/Knack%3A-Mobile-Optimization)

**Code Versioning**

**Data Retention Policies**  
As per [Knack](https://support.knack.com/hc/en-us/articles/225973788-About-Knack-Accounts#data-retention-policies), for customers with a Plus plan, record versions are retained for 3 months.

**Backups**

> * Database records - retained for 7 days and backed up at 3am.  
> * App Structure - retained for 7 days and backed up at 2 am and 2pm.  
>
>   [More Information](https://support.knack.com/hc/en-us/articles/225973788-About-Knack-Accounts#backups).

**Attachment Size**  
Files larger than 10 MB cannot be attached to a record. If there is a need to attach a file larger than 10 MB, please contact the administrator for assistance.

**Attachments**  
When designing an application, an attachment table is preferred to an attachment field, to facilitate multiple attachments.

### Password Control

* Knack custom password settings
* ADFS

## Style Guide

[See here](https://github.com/cityofaustin/transportation-data-tech/wiki/Knack-%7C-Style-Guide)

## Knackpy

[Knackpy](https://github.com/cityofaustin/knackpy) is our Python client for interacting with Knack applications. We use it to integrate Knack with other software systems.

## ADFS Configuration

See [here](https://github.com/cityofaustin/transportation-data-tech/wiki/Knack-%7C-ADFS-Setup)

## Current Supported Applications

* Austin Transportation Data Tracker
* ATD Visitor Sign-In
* ATD Forms
* Data and Technology Services Portal
* Finance and Purchasing System
* ROW Portal
* Parking Enterprise Reporting Portal
* Street Banners Program Portal
* Signs and Markings Data Tracker

## Knack Change Log

Whenever you make changes to a production Knack application, log those changes here. To do so: 1. Go to the change log \(it's available via the Admin menu\): [Change Log](https://atd.knack.com/dts#change-log/)/ 2. Click Add Entry 3. Select the name of the app that you edited, along with a detailed description of the changes. Links to new modules and service requests are welcome. 4. In the "tags" field, enter at least one keyword that is relevant to the change you made 5. Click Submit to save the entry.

## Knack Editing Calendar

Prior to editing Knack applications, it's important to log your work, and schedule, in the Knack Editing Calendar. This helps those who'll be using the application of potential changes to the system, while using the system. If major changes are happening, the user may want to avoid the app until the maintenance/work is complete. Here are the steps: 1. Go to [DTS Portal ](https://atd.knack.com/dts#home2/) 2. Select any of the button options and **'Sign in'** 3. Choose '**Admin'** menu located in the banner 4. Select **'Knack Calendar'** from the list of values 5. Select the **'Date/Time'** to reflect your work \(This will prompt more menu items\) 6. Fill in all required information 7. Select **'Submit'**

## Object Creation

1. Always place derived field after source fields, for example a text formula field or equation field should be placed lower than the source field.
2. To avoid corrupted fields, don't overwrite text formula or equation fields. Start a new field when trying an alternative approach.
3. If calculated fields are not refreshing as expected, create a dummy field and run an update all records process with that dummy field \(for example, update a dummy date field to current date\) to initiate the refresh process.

## Training Users

1. Recruit someone who has not been involved in the process so far to do UAT. 
2. Ask product owner to keep builder/ product manager in the loop for all app related communication to their team. 
3. Aim for a user training plan that involves users at different user levels. 
4. Communicate with product owner how user testing and training will help with application adoption.

