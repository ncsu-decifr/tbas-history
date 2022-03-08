# mailer-notes
Notes for configuration of PHPMailer


https://oit.ncsu.edu/campus-it/email/about/

https://github.com/PHPMailer/PHPMailer/wiki/Using-Gmail-with-XOAUTH2

https://oauth2-client.thephpleague.com/providers/league/

https://artisansweb.net/how-to-send-email-using-gmail-api-with-phpmailer/

http://localhost/tbas2_3/ext/PHPMailer/get_oauth_token.php



https://console.cloud.google.com/cloud-resource-manager




```
sudo apt install composer
composer require league/oauth2-google
```
Go here to create keys.
https://console.developers.google.com/

1. create credentials
2. OAuth client ID
3. Web Application
4. add Authorized redirect URIs - http://localhost/tbas2_3/ext/PHPMailer/get_oauth_token.php
5. create
6. download json
7. open oauth2-google and set $clientId and $clientSecret from the json or the google api page.
8. set the $redirectUri for server retrieving the token, eg http://localhost/phpmailer/get_oauth_token.php


