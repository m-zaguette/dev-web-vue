<template lang="html">
  <section class="AppBar">
    <v-app-bar
      app
      color="primary"
      dark
      clipped-left
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
          transition="scale-transition"
          width="40"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com"
        target="_blank"
        text
      >
        <v-icon>mdi-git</v-icon>
      </v-btn>
      

      <v-btn
        href="https://stackoverflow.com"
        target="_blank"
        text
      >
        <v-icon>mdi-stack-overflow</v-icon>
      </v-btn>
      
      <v-btn
        href="https://youtube.com"
        target="_blank"
        text
      >
        <v-icon>mdi-youtube</v-icon>
      </v-btn>
      
      <v-btn
        href="https://google.com"
        target="_blank"
        text
      >
        <v-icon>mdi-google</v-icon>
      </v-btn>

    </v-app-bar>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'AppBar',
    props: [],
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
