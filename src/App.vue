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
      class="d-flex inline"
    >
      <v-flex>
          <v-layout fill-height>
            <SideBar/>
          </v-layout>
      </v-flex>
      <v-layout fill-height align-center>
          <router-view/>
      </v-layout>
        
      
    </v-card>
    <Footer/>
  <BottomNavigator/>
  </v-app>
</template>

<script>
import SystemBar from './components/SystemBar';
import AppBar from './components/AppBar';
import BottomNavigator from './components/BottomNavigator';
import Footer from './components/Footer';
import SideBar from './components/SideBar';

export default {
  name: 'App',

  components: {
    SystemBar
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