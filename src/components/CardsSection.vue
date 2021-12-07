<template lang="es">
    <v-container class="mx-auto" max-height="0" >
      <v-row>
         <v-col v-for="card in cards" :key="card.title" :cols="6"
            sm="4"
            md="3"
            lg="3">
            
        </v-col>
      </v-row>
    </v-container>
</template>
<script>
import Card from "../components/Card.vue";
export default {
  data: () => ({
    items: [],
    cards: [
      {
        title: "1",
        src: require("@/assets/poder-darth-vader-960x720.jpg"),
        flex: 3,
      },
    ],
  }),
  name: "CardsSection",
  components: {
    Card,
  },
};
</script>
