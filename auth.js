var authToken = require('./config')().authToken;

module.exports = function(request, response, next){
    if (!request.headers["x-auth"] || request.headers["x-auth"] !== authToken){
        response.sendStatus(403);
    } else {
        next();
    }
};
