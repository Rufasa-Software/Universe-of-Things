<template lang="es">
    <v-container class="mx-auto" max-height="0" >
      <v-row>
         <v-col v-for="card in items" :cols="6"
            sm="4"
            md="3"
            lg="3">
            <card :card="card" :src="image"></card> 
         </v-col>
      </v-row>
    </v-container>
</template>
<script>
// import Api from "../api/Api.js";
import Card from "../components/Card.vue";
export default {
  name: "CardsSection",
  data: () => ({
    items: [],
    images: [
      "https://www.google.com/search?q=imagen+darth+vader&rlz=1C1ONGR_esES930ES930&sxsrf=AOaemvKbWAfVGOma5MS9hsQBq-SxJcf5mA:1638887547148&tbm=isch&source=iu&ictx=1&fir=UVJjRfnpM6L5XM%252COCuz6RD7cU3rdM%252C_%253BVRK3RUXpzWJr3M%252Cj8gHdIDRDnUHGM%252C_%253BgkQQl60ehdW7GM%252CNpWtCq5P97LDYM%252C_%253BHEjD0B4aY5-jHM%252CDI_MT2NqN-yVRM%252C_%253BPf4oXYZbCLKaSM%252CI5kvpRNSx5bZ-M%252C_%253BuEQyPwSvMke9kM%252CE3oQTo0ANTG6BM%252C_%253BKgBgZzmZKjxYwM%252COCuz6RD7cU3rdM%252C_%253BWw00bMc034522M%252CtZUNiEVcofZdtM%252C_%253B8paplE6WmUuN3M%252CJAPsXKjnp6DGGM%252C_%253BDjRG9QOQn2rVOM%252C4sEHnsSx7sbOKM%252C_%253BEdo2kk4vzLik3M%252CJxDxgT-jxyMvEM%252C_%253BQYOxV9DIGxI6DM%252CXQaLjL2C_ZyXlM%252C_%253B-btPmY_y4-fbNM%252CLHc_yO8UPIXBLM%252C_%253ByVvvqk89cpAaXM%252CJAPsXKjnp6DGGM%252C_&vet=1&usg=AI4_-kSPTRzhzQMwkKOPMMekNJ1uWg2jtA&sa=X&ved=2ahUKEwjh88vw89H0AhXMzYUKHUZCAj8Q9QF6BAgSEAE#imgrc=uEQyPwSvMke9kM",
    ],
    api: "https://swapi.dev/api/planets",
    /* cards: [
      {
        title: "1",
        src: require("@/assets/poder-darth-vader-960x720.jpg"),
        flex: 3,
      },
      {
        title: "2",
        src: require("@/assets/poder-darth-vader-960x720.jpg"),
        flex: 3,
      },
      {
        title: "3",
        src: require("@/assets/poder-darth-vader-960x720.jpg"),
        flex: 3,
      },
    ], */
  }),
  created: async function () {
    let response = await fetch(this.api);
    let data = await response.json();
    this.items = data.results;
  },
  components: {
    Card,
  },
};
</script>
