var request = require('request');

var config = {
    'method': 'get',
    'url': 'https://rickandmortyapi.com/api/character/13',
    'headers':{}
}

request(config, function (error, response) {
    if (error) throw new Error(error);
    var body = response.body
    console.log(JSON.parse(body));
})
