const http = require('http');
const url = require('url');
http.createServer( (request, response)=> {
  response.writeHead(200, {'Content-Type': 'text/html;charset=utf8'});
  // console.log(request.method);
  request.on('data', (postData) => {
    console.log(postData.toString());
  })
   

  response.end('<h1> 服务器成功开启，http://127.0.0.1:8081/ </h1>');
}).listen(8081);