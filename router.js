module.exports = {
    "/echo": function(request, response){
        response.write("You called " + request.url);
    }
};
