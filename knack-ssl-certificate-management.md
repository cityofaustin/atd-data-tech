# Knack:-SSL-Certificate-Management

This will guide you through creating a new self-signed X.509 certificate which can be installed in Knack applications \(or elsewhere\) for SSL authentication.

Note that as a best practice we use the same certificate across all knack apps. So, if you do need to generate a new certificate, you should do this for every Knack application. _Consult the application team before embarking on this._

You may also be interested in our [wiki page](https://github.com/cityofaustin/atd-data-tech/wiki/Knack:-SSO---ADFS-Setup) about configuring ADFS logins in Knack.

1. Before you begin, make sure you have looked at our existing SSL certificate in 1Password. It's saved as **Self-Signed x509 SSL Certificates for SAML/ADFS**. The expiration date is noted there as well.

   If you need to generate a new certificate \(because the current cert has expired, for example\), continue.

2. Visit the [SAML Developer Tools website](https://www.samltool.com/self_signed_certs.php)
3. Complete the certificate form fields as follows:
4. `Common Name`: austintexas.gov
5. `Organization`: City of Austin
6. `Organization Unit Name`: Austin Transportation
7. `State`: Texas
8. `Country`: us
9. `Valid Days`: 365
10. `Email Address`: transportation.data@austintexas.gov
11. `Bits to generate the private key`: 1024 bits
12. `Digest Algorithm`: SHA512
13. Click the **Generate Self-Signed Certs**
14. Store the Private Key and X.509 cert in 1Password, following the conventions in the existing 1Password entry.
15. Coordinate with CTM to update our certs. Set a calendar reminder to update the certificates again before they expire!

