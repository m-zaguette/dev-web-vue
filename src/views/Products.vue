<template lang="html">

  <div>
    <v-row>
      <v-col
        v-for="(n,i) in 8"
        :key="n"
        cols="12"
        sm="4"
      >
        <StoreProducts 
          :textRestaurants="restaurants[i].text"
          :ratingRestaurants="restaurants[i].rating"
          :nRatingRestaurants="restaurants[i].nRating"
          :restaurantDescription="restaurants[i].description"
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
    data: ()  => ({
       restaurants: [
        {
         text: 'Pasta da Itália',
         rating: 4.1,
         nRating: 5,
         description: 'AAA'
        },
        {
         text: 'Pasta da França',
         rating: 4.2,
         nRating: 10,
         description: 'BBB'
        },
        {
         text: 'Pasta da Alemanha',
         rating: 4.3,
         nRating: 15,
         description: 'CCC'
        },
        {
         text: 'Pasta da Suiça',
         rating: 4.4,
         nRating: 20,
         description: 'DDD'
        },
        {
         text: 'Pasta de Portugal',
         rating: 4.5,
         nRating: 25,
         description: 'FFF'
        },
        {
         text: 'Pasta da Espanha',
         rating: 4.6,
         nRating: 30,
         description: 'GGG'
        },
        {
         text: 'Pasta da Inglaterra',
         rating: 4.7,
         nRating: 35,
         description: 'HHH'
        },
        {
         text: 'Pasta da Escocia',
         rating: 4.7,
         nRating: 40,
         description: 'III'
        }
      ],
    })
}


</script>