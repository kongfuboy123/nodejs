const http = require('http');
const fs = require('fs');
const path = require('path');
http.createServer( (request, response)=> {
  // response.writeHead(200, {'Content-Type': 'text/html;charset=utf8'});
  //判断请求需要什么
  let reqUrl = request.url;
  if(reqUrl=='/'){
    let filePath = path.join(__dirname,'index.html');
    let content = fs.readFileSync(filePath, 'utf8');
    response.end(content)
  }
  else if(reqUrl=='/login.html') {
    request.on('data', postData => {
      console.log(postData.toString());
    });

  }else{
    response.end('404 error')
  }
  

  response.end();
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');