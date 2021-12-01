<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="#001029"
      dark
      scroll-target="#scrolling-techniques-3"
      style="border: 1px solid red"
    >
      <template>
        <v-img src="./../assets/logo.png" max-width="100px"></v-img>
      </template>
      <v-spacer></v-spacer>
      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab>HOME</v-tab>
          <v-tab>PERSONAS</v-tab>
          <v-tab>ESPECIES</v-tab>
          <v-tab>PLANETAS</v-tab>
          <v-tab>NAVES ESPACIALES</v-tab>
          <v-tab>MIS FAVORITOS</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 1000px"></v-container>
    </v-sheet>
  </v-card>
</template>

<script>
export default {
  name: "HeaderMain",
  data: () => ({}),
};
</script>
<style lang="scss" scoped></style>
