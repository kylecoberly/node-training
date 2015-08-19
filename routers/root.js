var express = require("express");
var router = express.Router();

router.get("/", function handleRoot(request, response, next){
    response.send("Hey now");
});

module.exports = router;
