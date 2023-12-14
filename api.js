import axios from 'axios';

const backendURL = 'https://github.com/rimmy-ma/projetWebServers3'; // Replace with your actual backend URL

// Create an Axios instance with the base URL
const api = axios.create({
  baseURL: backendURL,
});

// Export the Axios instance for use in your frontend components
export default api;
