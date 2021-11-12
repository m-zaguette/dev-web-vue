<template lang="html">
  <section class="BottomNavigator">
    <v-bottom-navigation v-model="value">
      <v-btn value="web">
        <span>Web</span>

        <v-icon>mdi-web</v-icon>
      </v-btn>

      <v-btn value="mobile">
        <span>Mobile</span>

        <v-icon>mdi-cellphone</v-icon>
      </v-btn>

      <v-btn value="recent">
        <span>Recent</span>

        <v-icon>mdi-history</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'BottomNavigator',
    props: [],
    mounted () {

    },
    data: () => ({ value: 'web' }),
    methods: {

    },
    computed: {

    }
}


</script>