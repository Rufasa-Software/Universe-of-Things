<template>
  <v-card class="mx-auto" max-width="240" max-height="0">
    <v-container>
      <v-row>
        <v-col v-for="card in cards" :key="card.tittle" :cols="6" :md="6">
          <v-card>
            <v-img
              :src="card.src"
              class="yellow--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            >
              <v-card-title>{{ planets.name }}</v-card-title>
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
import { Api } from "../api/Api";

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
      {
        title: "5",
        src: require("../assets/poder-darth-vader-960x720.jpg"),
        flex: 12,
      },
      {
        title: "6",
        src: require("../assets/poder-darth-vader-960x720.jpg"),
        flex: 12,
      },
      {
        title: "7",
        src: require("../assets/poder-darth-vader-960x720.jpg"),
        flex: 12,
      },
      {
        title: "8",
        src: require("../assets/poder-darth-vader-960x720.jpg"),
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

  methods: {},
  beforeMount: async function () {
    let api = await new Api();
    this.items = await api.getApi();
    console.log(this.items);
  },
  components: {},
};
</script>
