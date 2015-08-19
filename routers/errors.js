var express = require("express");
var router = express.Router();

router.use(function notFoundRoute(request,response,next){
    var e = new Error("Not found!");
    e.code = 404;
    next(e);
});

router.use(function notFoundHandler(error, request, response, next){
    if (error.code !== 404){
        next(error);
    }
    response.status(404).json(error);
});

router.use(function(error, request, response, next){
    response.status(404).json(error);
});

module.exports = router;
