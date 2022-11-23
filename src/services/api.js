import axios from "axios";
// configuração da base da Url da API
const api = axios.create({
    baseURL: 'http://192.168.1.5:5000/'
});

export default api;