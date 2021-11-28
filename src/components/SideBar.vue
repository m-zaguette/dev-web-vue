<template lang="html">

  <section class="SideBar">
    <v-navigation-drawer
      clipped
      expand
      sidebar
    >
        <v-divider></v-divider>
        <v-list nav dense>
            <v-list-item link href="#">
                <v-list-item-icon>
                    <v-icon color="black" small>mdi-lightbulb</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="title">SideBar</v-list-item-title>
            </v-list-item>
            <v-list-item link href="#">
                <v-list-item-icon>
                    <v-icon color="black" small>mdi-git</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="title">Github</v-list-item-title>
            </v-list-item>
            <v-list-item link href="#">
                <v-list-item-icon>
                    <v-icon color="black" small>mdi-stack-overflow</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="title">Stack Overflow</v-list-item-title>
            </v-list-item>
            <v-list-item link href="#">
                <v-list-item-icon>
                    <v-icon color="black" small>mdi-youtube</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="title">Youtube</v-list-item-title>
            </v-list-item>
            <v-list-item link href="#">
                <v-list-item-icon>
                    <v-icon color="black" small>mdi-google</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="title">Google</v-list-item-title>
            </v-list-item>
            <v-list-item link href="/">
                <v-list-item-icon>
                    <v-icon color="black" small>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="title">Home</v-list-item-title>
            </v-list-item>
            <v-list-item link href="/careers">
                <v-list-item-icon>
                    <v-icon color="black" small>mdi-briefcase</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="title">Careers</v-list-item-title>
            </v-list-item>
            <v-list-item link href="/contact">
                <v-list-item-icon>
                    <v-icon color="black" small>mdi-cellphone</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="title">Contact</v-list-item-title>
            </v-list-item>
            <v-list-item link href="/about">
                <v-list-item-icon>
                    <v-icon color="black" small>mdi-plus</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="title">About</v-list-item-title>
            </v-list-item>
            <v-list-item link href="/products">
                <v-list-item-icon>
                    <v-icon color="black" small>mdi-store</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="title">Products</v-list-item-title>
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