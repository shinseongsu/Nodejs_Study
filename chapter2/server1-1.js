const https = require('https');
const fs = require('fs');

https.createServer({
    key: fs.readFileSync('./key2/localhost.key'),     // 개인 키
    cert: fs.readFileSync('./key2/localhost.crt'),    // 공개 키
    passphrase:'0000'
}, (req, res) => {
    res.write('<h1>Hello World</h1>');
    res.end('<p>Hello Server!</p>');
}).listen(443, () => {
    console.log('443번 포트에서 서버 대기 중입니다.');
});

//chrome://flags/#allow-insecure-localhost -- 크롬에서 해제 시켜줘야합니다.