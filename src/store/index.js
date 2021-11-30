import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    titleView:"Restaurantes em sua região:",
    bigTitle: "Restaurantes",
    cepTitle: "titulo cep",
    restaurants: [
      {
       text: 'Pasta da Itália',
       rating: 4.1,
       nRating: 5,
       description: 'AAA'
      },
      {
       text: 'Pasta da França',
       rating: 4.2,
       nRating: 10,
       description: 'BBB'
      },
      {
       text: 'Pasta da Alemanha',
       rating: 4.3,
       nRating: 15,
       description: 'CCC'
      },
      {
       text: 'Pasta da Suiça',
       rating: 4.4,
       nRating: 20,
       description: 'DDD'
      },
      {
       text: 'Pasta de Portugal',
       rating: 4.5,
       nRating: 25,
       description: 'FFF'
      },
      {
       text: 'Pasta da Espanha',
       rating: 4.6,
       nRating: 30,
       description: 'GGG'
      },
      {
       text: 'Pasta da Inglaterra',
       rating: 4.7,
       nRating: 35,
       description: 'HHH'
      },
      {
       text: 'Pasta da Escocia',
       rating: 4.7,
       nRating: 40,
       description: 'III'
      }
    ],
    dataCep: []
  },
  mutations:{
    SET_DATA(state, data){
      state.dataCep.push(data);
    }
  },
  actions:{
    fetchData({commit}, cep){
      console.log(commit);
      console.log(cep);
      axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res=>{
          commit('SET_DATA',res.data);
        })
        .catch(err=>{
          console.log(err);
        })
    }
  },
  getters: {
    bigTitle(state){
      return state.cepTitle.toUpperCase()
    }
  },
})

