<template lang="html">

  <div>
    <v-card
      class="mx-auto my-12"
      max-width="374"
      min-width="200"
    >
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-card-title>{{nCep}}</v-card-title>

      <v-card-text>
        <div class="my-4 text-subtitle-1">
          Rua: {{logradouro}}
        </div>
        <div class="my-4 text-subtitle-1">
          Complemento: {{complemento}}
        </div>
        <div class="my-4 text-subtitle-1">
          Bairro: {{bairro}}
        </div>
        <div class="my-4 text-subtitle-1">
          Localidade: {{localidade}}
        </div>
        <div class="my-4 text-subtitle-1">
          UF: {{uf}}
        </div>
        <div class="my-4 text-subtitle-1">
          IBGE: {{ibge}}
        </div>
        <div class="my-4 text-subtitle-1">
          GIA: {{gia}}
        </div>
        <div class="my-4 text-subtitle-1">
          DDD: {{ddd}}
        </div>
        <div class="my-4 text-subtitle-1">
          siafi: {{siafi}}
        </div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>
    </v-card>
  </div>

</template>

<script lang="js">

  export default  {
    name: 'CEPCard',
    props: [
      'nCep',
      'logradouro',
      'complemento',
      'bairro',
      'localidade',
      'uf',
      'ibge',
      'gia',
      'ddd',
      'siafi'
    ],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  .src-components-cep-card {

  }
</style>
