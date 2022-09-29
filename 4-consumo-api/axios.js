var axios = require('axios');
var config = require('./config')

var options = {
    method: config.method,
    url: config.hostname+config.path,
    headers:{}
}

axios(options)
    .then(function(response) {
        console.log(response.data);
    })
    .catch(function(error){
        console.log(error)
    })