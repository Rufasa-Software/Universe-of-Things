<template>
  <v-card class="mx-auto" max-width="200">
    <v-container fluid>
      <v-row>
        <v-col v-for="card in cards" :key="card.tittle" :cols="flex">
          <v-card>
            <v-img
              :src="card.src"
              class="yellow--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
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
</template>

<script>
export default {
  data: () => ({
    items: [],
    cards: [
      {
        title: "1",
        src: require("@/assets/poder-darth-vader-960x720.jpg"),
        flex: 12,
      },
      {
        title: "2",
        src: require("@/assets/poder-darth-vader-960x720.jpg"),
        flex: 12,
      },
      {
        title: "3",
        src: require("@/assets/WhatsApp Image 2021-11-23 at 21.16.49.jpeg"),
        flex: 12,
      },
      {
        title: "4",
        src: require("@/assets/poder-darth-vader-960x720.jpg"),
        flex: 12,
      },
    ],
    cards2: [
      {
        title: "5",
        src: require("../assets/poder-darth-vader-960x720.jpg"),
        flex: 12,
      },
      {
        title: "5",
        src: require("../assets/poder-darth-vader-960x720.jpg"),
        flex: 12,
      },
      {
        title: "5",
        src: require("../assets/poder-darth-vader-960x720.jpg"),
        flex: 12,
      },
      {
        title: "5",
        src: require("../assets/poder-darth-vader-960x720.jpg"),
        flex: 12,
      },
    ],
  }),
  name: "Home",

  methods: {
    getApi() {
      return fetch("https://swapi.dev/api/planets")
        .then((res) => res.json())
        .then((data) => {
          this.items = data;
          console.log(this.items);
        });
    },
    /*created() {
      fetch("https://swapi.co/api/films")
        .then((res) => res.json())
        .then(
          (data) => console.log(data)
          /*console.log((this.films = res.results));
        );
    },*/
  },

  components: {},
};
</script>
