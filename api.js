import axios from 'axios';

const backendURL = 'https://github.com/rimmy-ma/projetWebServers3'; //url pour le backedend

const api = axios.create({
  baseURL: backendURL,
});

// Exportation de l'API
export default api;
