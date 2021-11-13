<template>
  <v-app>
    <div
      class="d-flex flex-column justify-end"
      flat
      tile
    >
      <SystemBar/>
    </div>
    <v-card
      class="d-flex"
      flat
      tile
    >
      <v-app-bar>
        <AppBar/>
      </v-app-bar>
    </v-card>
    <v-card
      height="100%"
    >
      <v-layout
        
      >
        <SideBar/>
      </v-layout>
      <v-layout>
        <HelloWorld/>
      </v-layout>
    </v-card>
    <Footer/>
  <BottomNavigator/>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import SystemBar from './components/SystemBar';
import AppBar from './components/AppBar';
import BottomNavigator from './components/BottomNavigator';
import Footer from './components/Footer';
import SideBar from './components/SideBar';

export default {
  name: 'App',

  components: {
    HelloWorld
    ,SystemBar
    ,AppBar
    ,SideBar
    ,BottomNavigator
    ,Footer
  },

  data: () => ({
    //
  }),
};
</script>
