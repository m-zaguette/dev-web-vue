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
  
    <v-main>
      <NavigationBar/>
      <HelloWorld/>
    </v-main>
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
import NavigationBar from './components/NavigationBar';

export default {
  name: 'App',

  components: {
    HelloWorld
    ,SystemBar
    ,AppBar
    ,NavigationBar
    ,BottomNavigator
    ,Footer
  },

  data: () => ({
    //
  }),
};
</script>
