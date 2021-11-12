<template lang="html">
  <section class="Footer">
    <v-footer
      color="primary lighten-1"
      padless
    >
      <v-row
        justify="center"
        no-gutters
      >
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          text
          rounded
          class="my-2"
        >
          {{ link }}
        </v-btn>
      </v-row>
    </v-footer>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'Footer',
    props: [],
    mounted () {

    },
    data: () => ({
      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ],
    }),
    methods: {

    },
    computed: {

    }
}


</script>
