# mailer-notes
Notes for configuration of PHPMailer


https://oit.ncsu.edu/campus-it/email/about/

https://github.com/PHPMailer/PHPMailer/wiki/Using-Gmail-with-XOAUTH2

https://oauth2-client.thephpleague.com/providers/league/

https://artisansweb.net/how-to-send-email-using-gmail-api-with-phpmailer/

http://localhost/tbas2_3/ext/PHPMailer/get_oauth_token.php

http://localhost/vendor/phpmailer/phpmailer/get_oauth_token.php

https://console.cloud.google.com/cloud-resource-manager

https://developers.google.com/gmail/api/?hl=en_US


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
