const http = require('http');
const url = require('url');
http.createServer( (request, response)=> {
  response.writeHead(200, {'Content-Type': 'text/html;charset=utf8'});
  let reqUrl = request.url;
  let reqMethod = request.method;
  let obj = url.parse(reqUrl, true);
  console.log(obj.query.num);
  // console.log(reqUrl,reqMethod);
  response.end('<h1> 服务器成功开启，http://127.0.0.1:8081/ </h1>');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');
