<template lang="html">

  <section class="SystemBar">
      <v-system-bar
        dark
        color="indigo darken-2"
      >
        <v-spacer></v-spacer>
        <v-icon>mdi-wifi-strength-4</v-icon>
        <v-icon>mdi-signal-cellular-outline</v-icon>
        <v-icon>mdi-battery</v-icon>
        <span>12:30</span>
      </v-system-bar>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'SystemBar',
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