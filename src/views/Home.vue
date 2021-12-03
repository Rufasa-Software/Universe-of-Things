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
import { Api } from "../api/Api";
import HeaderMain from "../../src/components/HeaderMain.vue";

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
        title: "5",
        src: require("../assets/poder-darth-vader-960x720.jpg"),
        flex: 3,
      },
      {
        title: "6",
        src: require("../assets/poder-darth-vader-960x720.jpg"),
        flex: 3,
      },
      {
        title: "7",
        src: require("../assets/poder-darth-vader-960x720.jpg"),
        flex: 3,
      },
      {
        title: "8",
        src: require("../assets/poder-darth-vader-960x720.jpg"),
        flex: 3,
      },
    ],
  }),
  name: "Home",

  methods: {},
  beforeMounted: async function () {
    let api = await new Api();
    this.items = await api.getApi();
    console.log(this.items);
  },
  components: {
    HeaderMain,
  },
};
</script>
