<template lang="html">

  <section class="SideBar">
    <v-navigation-drawer
      clipped
      color="#09151E"
      height
      expand
      sidebar
    >
        <v-divider></v-divider>
        <v-list nav dense>
            <v-list-item link href="#">
                <v-list-item-icon>
                    <v-icon color="white" small>mdi-lightbulb</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="title">Blue</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
  </section>
</template>

<script lang="js">
  export default  {
    name: 'SideBar',
    
    props: [],
    mounted () {

    },
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
        ],
        mini: true,
      }
    },
    methods: {

    },
    computed: {

    }
}
</script>