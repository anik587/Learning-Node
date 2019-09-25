const https = require('https');

const url = 'https://api.darksky.net/forecast/966f210d15503070d798f9e8064091a9/37.8267,-122.4233';

const request = https.request(url, (response) =>{ 

    let data = '';

    response.on('data', (chunk)=>{
        data = data+ chunk.toString();
    });

    response.on('end', ()=>{
        const responseBody = JSON.parse(data);
        console.log(responseBody);
    });

})

request.on('error', (error)=>{
    console.log(`error ${error}`)
})
request.end();