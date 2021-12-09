<template lang="es">
    <v-container class="mx-auto" max-height="0" >
      <v-row>
         <v-col v-for="(card,index) in homeItems"  v:cols="6"
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
import Card from "../components/Card.vue";

export default {
  name: "CardsSection",
  data: () => ({
    homeItems: [],

    images: [
      {
        url: "https://th.bing.com/th/id/R.c8a34c1db6195dff559f58642de81047?rik=HSqRL0PpVdkG1g&pid=ImgRaw&r=0",
      },
      {
        url: "https://th.bing.com/th/id/R.0ece0ea07c6ec6e127fa6c88053cc5fa?rik=MJOBSc2a%2b0p%2byQ&pid=ImgRaw&r=0",
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Triple-star_sunset.jpg/250px-Triple-star_sunset.jpg",
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/5/56/Alderaan.JPG",
      },
      {
        url: "https://www.cinemascomics.com/wp-content/uploads/2020/06/poder-darth-vader.jpg",
      },
      {
        url: "https://e.rpp-noticias.io/normal/2020/05/03/111311_936382.jpg",
      },
      {
        url: "https://mewmagazine.es/wp-content/uploads/2019/12/Luke-Skywalker.jpg",
      },
      {
        url: "https://i0.wp.com/hipertextual.com/wp-content/uploads/2020/12/star_wars_el_imperio_contraataca_irvin_kershner.jpg?fit=1200%2C800&ssl=1",
      },
    ],

    api: [
      "https://swapi.dev/api/planets",
      "https://swapi.dev/api/people",
      "https://swapi.dev/api/starships",
      "https://swapi.dev/api/species",
    ],
  }),

  methods: {
    async getPlanets() {
      let response = await fetch(this.api[0]);
      let data = await response.json();
      let dataArray = data.results.slice(0, 2);
      console.log(dataArray);
      dataArray.forEach((element) => {
        this.homeItems.push(element);
      });
    },
    async getPeople() {
      let response = await fetch(this.api[1]);
      let data = await response.json();
      let dataArray = data.results.slice(0, 2);
      console.log(dataArray);
      dataArray.forEach((element) => {
        this.homeItems.push(element);
      });
    },

    async getStarships() {
      let response = await fetch(this.api[2]);
      let data = await response.json();
      let dataArray = data.results.slice(0, 2);
      console.log(dataArray);
      dataArray.forEach((element) => {
        this.homeItems.push(element);
      });
    },

    async getSpecies() {
      let response = await fetch(this.api[3]);
      let data = await response.json();
      let dataArray = data.results.slice(0, 2);
      console.log(dataArray);
      dataArray.forEach((element) => {
        this.homeItems.push(element);
      });
    },
  },
  created: async function () {
    this.getStarships();
    this.getPlanets();
    this.getPeople();
    this.getSpecies();
  },

  components: {
    Card,
  },
};
</script>
