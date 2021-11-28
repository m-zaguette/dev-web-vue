<template lang="html">

  <div>
    <h1>{{bigTitle}}</h1>
    <h3>{{applicationTitle}}</h3>
    <v-row>
      <v-col
        v-for="(n,i) in 8"
        :key="n"
        cols="12"
        sm="4"
      >
        <StoreProducts 
          :textRestaurants="myCards[i].text"
          :ratingRestaurants="myCards[i].rating"
          :nRatingRestaurants="myCards[i].nRating"
          :restaurantDescription="myCards[i].description"
        />
      </v-col>
    </v-row>
  </div>

</template>

<script lang="js">
  import StoreProducts from '../components/StoreProducts.vue'

  export default  {
    name: 'Products',
    components:{
      StoreProducts
    },
    data () {
      return {}
    },
    computed:{
      myCards(){
        return this.$store.state.restaurants
      },
      applicationTitle(){
        return this.$store.state.titleView
      },
      bigTitle(){
        return this.$store.state.bigTitle
      }
    },
}


</script>