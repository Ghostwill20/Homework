var http = require('http');
var path = require("path")

var server = http.createServer(function (req, res){
   
    if(req === "homework\week 5\server\index.html")
    filename = "homework\week 5\server\index.html"
    console.log(filename);

    
res.writeHead(200, {'Content-Type': 'text/plain'});
res.end ('Was sup carlos');


});


server.listen(3000);

console.log("server is on")

