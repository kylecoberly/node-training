var http = require("http");
var router = require("./router.js");
var serveStatic = require("./static.js");

var server = http.createServer(function(request, response){
    if (router[request.url]){
        router[request.url](request, response);
    } else {
        serveStatic(request, response);
    }
});

server.listen(3030);
