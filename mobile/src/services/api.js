import axios from "axios";

const api = axios.create({
  baseURL: "http://000.000.0.0:3333" //colocar o seu ip aqui
});

export default api;
