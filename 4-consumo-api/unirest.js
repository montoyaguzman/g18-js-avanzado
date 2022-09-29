var unirest = require('unirest')
var config = require('./config')


var response = unirest(config.method, config.hostname+config.path)
    .end(function (response) {
        if (response.error) throw new Error(response.error);
        console.log(response.body)
    })