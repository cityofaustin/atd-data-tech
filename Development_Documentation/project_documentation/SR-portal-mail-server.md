### Initial project email



The use case is this: I want to create a new Service Request in the DTS Portal by sending an email.



I imagine the tooling would look roughly like this:

\- a Python smtpd mail server is created to receive new email messages

\- the mail server calls a function to parse expected values from the email message

\- the message contents are passed to knackpy,  which creates a record in the selected application



It looks like smtpd is pretty simple (but I have not used it):

<https://pymotw.com/2/smtpd/>

This also seems to be a popular 3rd-party Python mail server:

<https://salmon-mail.readthedocs.io/en/latest/getting_started.html>



the server will be on one of the AWS server. 

Let me know what you think. I think the Knack community would also be interested in this tool!

ser

### Use case

1. parsing CTM receipt (Primary object)

   Ticket opened for CTM

   Download the receipt

   Parse the receipt and open a SR request

   Requestd and assigned will the same person opened the CTM ticket.

   the sender of the email will be the requester and assigned to

   status: in progress

2. Create Ticket from Email

   the email title will the title for the request

   creating SR template:

   ​	sender requester and assigned to (phase 2: parse the email to find real requester, Maybe hastag)

   the whole email will be the description

   status: in progress

   other field remain default

