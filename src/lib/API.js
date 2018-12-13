const API_URL = "http://localhost:3000/";
import axios from 'axios';

export default {

  //Carros

  getCarros() {
    return fetch(API_URL + "carros")
      .then(response => response.json(0))
  },

  deletarCarros(carro) {

    return axios.delete(API_URL + "carros", {
        data: carro
      })
      .then(response => response.data)
  },

  adicionarCarros(carro) {
    return axios.post(API_URL + "carros", carro)
      .then(response => response.data)
  },

  editarCarros(carro) {
    return axios.put(API_URL + "carros", carro)
      .then(response => response.data)
  }
}
