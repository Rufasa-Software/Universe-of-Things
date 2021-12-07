<template lang="es">   
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
       
</template>
<script>
export default {
  name: "Card",
  data: () => ({}),
};
</script>
