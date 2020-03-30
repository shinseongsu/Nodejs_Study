const http2 = require('http2');
const fs = require('fs');

http2.createSecureServer({
    key: fs.readFileSync('./key2/localhost.key'),     // 개인 키
    cert: fs.readFileSync('./key2/localhost.crt')    // 공개 키
}, (req, res) => {
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server!');
}).listen(443, () => {
    console.log('443번 포트에서 서버 대기 중입니다!');
});