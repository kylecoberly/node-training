var express = require("express");
var router = express.Router();
var myMath = require("../mymath");

router.use(require("../auth"));
router.get("/", function fibonacciHandler(request, response, next){
    var result = myMath.fib(request.query.i);
    response.json({
        iterations: request.query.i,
        result: result
    });
});

module.exports = router;

