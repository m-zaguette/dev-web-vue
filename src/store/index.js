import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    titleView:"Restaurantes em sua região:",
    bigTitle: "Restaurantes",
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
    ]
  },
  mutations:{},
  actions:{},
  getters: {},
})

