# Knack:-SSO-ADFS-Setup

Knack supports Active Directory Single Sign On \(SSO\). Here's how to set it up.

1. As a first step, open a help desk ticket and let them know you’d like to configure ADFS for one of your applications. 
2. Log into the City's ServiceNow Portal 
3. Indicate you want to set up `Active Directory` on an application
4. Provide a copy of the application metadata 
   * Open the Knack builder and navigate to the login page where you want to add ADFS. 
   * Click on the Login Form to bring up the editing interface. 
   * From the `Options` tab, click on the link `Metadata`. 
   * Right click an select `View page source` \(\_copy and paste\)
   * Save the metadata information in a .txt format and attach to service desk ticket

_They \(CTM\) will need to provide you with their ADFS metadata, which contains configuration data for completing the setup. At time of writing, that data was available here:_ [https://sts.austintexas.gov/federationmetadata/2007-06/federationmetadata.xml](https://sts.austintexas.gov/federationmetadata/2007-06/federationmetadata.xml)

1. You will need to locate our self-signed SSL \(X.509\) certificate for your app. It is stored in 1Password as **Self-Signed x509 SSL Certificates for SAML/ADFS**. Once you've located the certificate, you can continue to Step 3.

   If you need to generate a new certificate \(because the current cert has expired, for example\), see our [wiki entry](https://github.com/cityofaustin/atd-data-tech/wiki/Knack:-SSL-Certificate-Management) for instructions. Note that as a best practice we use the same certificate across all knack apps. So, if you do need to generate a new certificate, you should do this for every Knack application. Consult the application team before embarking on this.

2. Now you’ll configure the authentication provider in your knack app. Open the Knack builder and navigate to the login page where you want to add ADFS. Click on the Login Form to bring up the editing interface.
3. From the `Options` tab, click on the link to `Add a custom SSO provider`. Complete the fields as follows:

**Provider type**: SAML 1.1 or 2.0

**Provider Entry Point**: Use the “EndpointReference” field in the CTM-provided metadata. Currently it is: `https://login.microsoftonline.com/5c5e19f6-a6ab-4b45-b1d0-be4608a9a67f/saml2`

**Issuer**: This needs to uniquely and globally identify your app, so use the base URL for your app. E.g.; `atd.knack.com/your-app-name`.

**Identity Provider's certificate**: Find the provider certificate in the metadata under the Signature tag, then the KeyInfo tag, then the X509Certificate tag.

![x509](https://github.com/cityofaustin/atd-data-tech/blob/master/images/x509_cert.png) You will need to copy the text from the certificate and paste it into the Knack field. Note that you will also need to prepend `-----BEGIN CERTIFICATE-----` and append `-----END CERTIFICATE-----` to the data you paste in the certificate field.

You can use the [SAMLTool Certificate Formatter](https://www.samltool.com/format_x509cert.php) to make sure the certificate is properly formatted. Just paste the certificate in the box at the top of the page, and click "Format X.509 Certificate." Then copy the contents of output box labeled "X.509 cert with header".

If you can’t figure out which cert to pull from the metadata, just ask CTM directly for their ADFS certificate.

**Private signing certificate**: Leave this blank.

**Decryption private certificate**: Paste your private key from step 2 here.

**Decryption public certificate**: Paste your public certificate from step 2 here.

**Logout URL**: Blank

**Authentication Context**: Blank

**ID Property**: Find the `windowsaccountname` claim assertion in the metadata. You will need to copy/paste the entire URI into the Knack form. Currently it is: `http://schemas.microsoft.com/ws/2008/06/identity/claims/windowsaccountname`

That's it. You're done!

