<template lang="es">
    <v-container class="mx-auto" max-height="0" >
      <v-row>
         <v-col v-for="(card,index) in items"  v:cols="6"
            sm="4"
            md="3"
            lg="3"
            >
            <card :card="card" :src="images[index].url"></card>
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
      {
        url: "https://www.cinemascomics.com/wp-content/uploads/2020/06/poder-darth-vader.jpg",
        ide: 0,
      },
      {
        url: "https://sm.ign.com/t/ign_latam/screenshot/default/vader-palpatine_5gyy.1200.jpg",
        ide: 1,
      },
      {
        url: "https://www.cinemascomics.com/wp-content/uploads/2020/06/poder-darth-vader.jpg",
        ide: 2,
      },
      {
        url: "https://sm.ign.com/t/ign_latam/screenshot/default/vader-palpatine_5gyy.1200.jpg",
        ide: 3,
      },
      {
        url: "https://www.cinemascomics.com/wp-content/uploads/2020/06/poder-darth-vader.jpg",
        ide: 4,
      },
      {
        url: "https://sm.ign.com/t/ign_latam/screenshot/default/vader-palpatine_5gyy.1200.jpg",
        ide: 5,
      },
      {
        url: "https://www.cinemascomics.com/wp-content/uploads/2020/06/poder-darth-vader.jpg",
        ide: 6,
      },
      {
        url: "https://sm.ign.com/t/ign_latam/screenshot/default/vader-palpatine_5gyy.1200.jpg",
        ide: 7,
      },
      {
        url: "https://www.cinemascomics.com/wp-content/uploads/2020/06/poder-darth-vader.jpg",
        ide: 8,
      },
      {
        url: "https://sm.ign.com/t/ign_latam/screenshot/default/vader-palpatine_5gyy.1200.jpg",
        ide: 9,
      },
    ],

    api: [
      "https://swapi.dev/api/planets",
      "https://swapi.dev/api/people",
      "https://swapi.dev/api/starships",
      "https://swapi.dev/api/species",
    ],
    /*cards: [
      {
        title: "1",
        src: require("@/assets/poder-darth-vader-960x720.jpg"),
        flex: 3,
      },
      {
        title: "1",
        src: require("@/assets/poder-darth-vader-960x720.jpg"),
        flex: 3,
      },
      {
        title: "1",
        src: require("@/assets/poder-darth-vader-960x720.jpg"),
        flex: 3,
      },
      {
        title: "1",
        src: require("@/assets/poder-darth-vader-960x720.jpg"),
        flex: 3,
      },
    ],*/
  }),
  created: async function () {
    let response = await fetch(this.api[1]);
    let data = await response.json();
    this.items = data.results;
  },

  components: {
    Card,
  },
};
</script>
