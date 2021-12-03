<template>
  <div>
    <header-main />
    <v-card class="mx-auto" max-width="1200" max-height="0">
      <v-container fluid style="width: 100%; margin: 25px 0">
        <v-row dense>
          <v-col v-for="card in cards" :key="card.tittle" :cols="card.flex">
            <v-card style="width: 175px; margin-bottom: 10px">
              <v-img
                :src="card.src"
                class="yellow--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="150"
              >
                <v-card-title v-text="card.title"></v-card-title>
              </v-img>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>
<script>
import HeaderMain from "../components/HeaderMain";

export default {
  data: () => ({
    items: [],
    cards: [
      {
        title: "1",
        src: require("@/assets/poder-darth-vader-960x720.jpg"),
        flex: 3,
      },
      {
        title: "3",
        src: require("@/assets/poder-darth-vader-960x720.jpg"),
        flex: 3,
      },
      {
        title: "3",
        src: require("@/assets/WhatsApp Image 2021-11-23 at 21.16.49.jpeg"),
        flex: 3,
      },
      {
        title: "4",
        src: require("@/assets/poder-darth-vader-960x720.jpg"),
        flex: 3,
      },
      {
        title: "4",
        src: require("@/assets/poder-darth-vader-960x720.jpg"),
        flex: 3,
      },
      {
        title: "4",
        src: require("@/assets/poder-darth-vader-960x720.jpg"),
        flex: 3,
      },
      {
        title: "4",
        src: require("@/assets/poder-darth-vader-960x720.jpg"),
        flex: 3,
      },
    ],
  }),
  name: "Home",

  components: {
    HeaderMain,
  },

  methods: {
    getApi() {
      return fetch("https://swapi.dev/api/planets")
        .then((res) => res.json())
        .then((data) => {
          this.items = data;
          console.log(this.items);
        });
    },
  },
};
</script>
