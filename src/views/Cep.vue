<template lang="html">

  <div>
    <h1>{{cepTitle}}</h1>
    <h1>Pesquise o CEP:</h1>
    <v-text-field
      :rules="rules"
      v-model="cep"
      >
      </v-text-field>
    <v-btn @click="fetch">Dados</v-btn>
    <div>
      <v-row>
      <v-col
        v-for="(n,i) in dataCep.length"
        :key="n"
        cols="12"
        sm="4"
      >
        <CEPCard 
          :nCep = "dataCep[i].cep"
          :logradouro = "dataCep[i].logradouro"
          :complemento = "dataCep[i].complemento"
          :bairro = "dataCep[i].bairro"
          :localidade = "dataCep[i].localidade"
          :uf = "dataCep[i].uf"
          :ibge = "dataCep[i].ibge"
          :gia = "dataCep[i].gia"
          :ddd = "dataCep[i].ddd"
          :siafi = "dataCep[i].siafi"
        />
      </v-col>
    </v-row>
    </div>
  </div>

</template>

<script lang="js">
  // import axios from 'axios'
  import CEPCard from '../components/CEPCard.vue'

  export default  {
    name: 'CEP',
    props: [],
    components:{
      CEPCard
    },
    mounted () {
    },
    data: () => ({
      cep: null,
      rules: [
        value => !!value || 'Required.',
        value => (value || '').length <= 8 || 'Max 8 characters',
      ],
    }),
    computed: {
      dataCep(){
        return this.$store.state.dataCep
      },
      cepTitle(){
        return this.$store.getters.bigTitle
      }
    },    
    methods:{
      fetch(){
        this.$store.dispatch('fetchData',this.cep);
      }      
    },
    async created(){
      this.$store.dispatch('fetchData','25610320');
    }
}


</script>