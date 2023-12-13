// Import Axios
const axios = require('axios');

// connexion à github
const apiUrl = 'https://github.com/rimmy-ma/projetWebServers3';

// requête get à github
axios.get(apiUrl)
  .then(response => {
    // Handle the successful response here
    console.log('Response Data:', response.data);
  })
  .catch(error => {
    // Handle any errors here
    console.error('Error:', error);
  });
