# Banner Scripts

This folder is for munging data from our old Sharepoint app for Over the Street Banners to Knack.

## Data Sources

Source files can be requested from DM

### Sharepoint

- `OTS_RSVP_45.xlsx`
  - Raw export from Sharepoint of Over the Street Reservations combined with Reservation Locations

### AMANDA

There are 2 sets of data attached:

- `SBFolderInfo.csv`: permit folder info. I only included the permit applicant information, and the 8 folder infos that staff are actually using. I did not include the folder process info because I’ve heard staff doesn’t see any value in the folder processes.
- `SBFees.csv`: All fees invoiced on SB folders and their payment status. Payment status options are Y (paid), N (not paid), and C (cancelled).

### Knack

Knack files represent the new data schema:

- `banner_reservations_ots.csv`: Resercations Table
- `banner_locations.csv`: Reservation Locations Table
- `banners_over_the_street_locations.csv`: Locations Table
