import axios from 'axios'

const api = axios.create({
baseURL: 'http://localhost:3333/', //url base da sua api
timeout: 5000 //tempo máximo de espera de resposta
});

export default api