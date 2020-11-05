const request = require('request');


const fetchBreedDescription = function(breedName, callBack) {
  const apiLink = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(apiLink, (error,response, body) => {
   

    if (error) {

      return callBack(error, null);
    }
    const data = JSON.parse(body);
    
    if (data[0]) {

      callBack(null, data[0].description);
      
    
    } else {
      callBack("Invalid cat breed. Please try again! ", null);
    }
  

  });
};


module.exports = { fetchBreedDescription };