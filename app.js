var express = require("express");
var myApp = express();
var bodyParser = require('body-parser');
var serveStatic = express.static;

myApp.use(bodyParser.json());
myApp.use(serveStatic(".", {}));
myApp.set("views", "templates");
myApp.set("view engine", "jade");

myApp.use("/users", require("./routers/users"));
myApp.use("/fib", require("./routers/fib"));
myApp.use("/", require("./routers/root"));
myApp.use(require("./routers/errors"));

myApp.listen(8080);
