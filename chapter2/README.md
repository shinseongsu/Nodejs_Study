open SSL 만들기

openssl genrsa 1024 > key.pem
openssl req -x509 -new -key key.pem > cert.pem -config openssl.cnf

git clone https://github.com/openssl/openssl.git

openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365


Country Name (2 letter code) [AU]:KO
State or Province Name (full name) [Some-State]:SEOUL
Locality Name (eg, city) []:SEOUL
Organization Name (eg, company) [Internet Widgits Pty Ltd]:CARAMEL
Organizational Unit Name (eg, section) []:CARAMEL
Common Name (e.g. server FQDN or YOUR name) []: shinseongsu
Email Address []:tlstjdtn321@naver.com