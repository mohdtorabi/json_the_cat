const request = require('request');
const breedName = process.argv[2];

const apiLink = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
request(apiLink, (error, response, body) => {
  console.log('error:', error);
  const data = JSON.parse(body);

  if (error === null) {
    console.log("failed to read");

  } else if (breedName !== undefined) {
    console.log(data[0].description);
    
  } else {
    console.log("No iput was inserted. please try again! ");
  }
  

});