var mathjs = require("mathjs");
var fib = require("./fib");

module.exports = {
    fib: fib,
    add: mathjs.add,
    sub: mathjs.sub,
    pow: mathjs.pow,
};
