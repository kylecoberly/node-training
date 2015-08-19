var fs = require("fs");
var path = require("path");
var mime = require("mime");

module.exports = function(request, response){
    var filePath = path.join(__dirname, request.url);
    var mimeType = mime.lookup(filePath);
    fs.readFile(filePath, function(error, data){
        if (error){
            response.writeHead(404, {
            });
            response.write("There was a problem");
            response.end();
        } else {
            response.writeHead(200, {
                "Content-Type": mimeType
            });
            response.write(data);
            response.end();
        }
    });
};
