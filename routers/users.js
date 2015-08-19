var express = require("express");
var router = express.Router();

var users = [{
    id: 1,
    first: "Kyle",
    last: "Coberly"
},{
    id: 2,
    first: "Joe",
    last: "Green"
},{
    id: 3,
    first: "Bill",
    last: "Stevens"
}];

router.get("/", function handleRoot(request, response, next){
    if (!request.xhr) {
        response.render("simple-form", {users: users});
    } else {
        response.json(users);
    }
});

router.get("/:id", function handleRoot(request, response, next){
    if (typeof users[request.params.id - 1] === "undefined") {
        var e = new Error("Not found!");
        e.code = 404;
        next(e);
    }
    if (!request.xhr) {
        response.render("user", {user: users[request.params.id - 1]});
    } else {
        response.json(users[request.params.id - 1]);
    }
});

router.post("/", function handleRoot(request, response, next){
    users.push(request.body);

    response.redirect(201, "/users/" + users.length);
});

router.delete("/:id", function handleRoot(request, response, next){
    users.splice(request.params.id, 1);
    response.sendStatus(204);
});
module.exports = router;
