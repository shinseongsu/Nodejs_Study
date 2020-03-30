open SSL 만들기

openssl req -new -newkey rsa:2048 -nodes -keyout localhost.key -out localhost.csr -confg open_ssl.cnf

openssl x509 -req -days 365 -in localhost.csr -signkey localhost.key -out localhost.crt


Country Name (2 letter code) [AU]:KO
State or Province Name (full name) [Some-State]:SEOUL
Locality Name (eg, city) []:SEOUL
Organization Name (eg, company) [Internet Widgits Pty Ltd]:CARAMEL
Organizational Unit Name (eg, section) []:CARAMEL
Common Name (e.g. server FQDN or YOUR name) []: shinseongsu
Email Address []:tlstjdtn321@naver.com