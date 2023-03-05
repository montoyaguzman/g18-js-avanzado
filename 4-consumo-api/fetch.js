const fetch = require('cross-fetch');

var url = 'https://rickandmortyapi.com/api/character/12'

fetch(url)
    .then((response)=>{
        return response.json();
    }).then((resp)=>{
        console.log(resp);
    })