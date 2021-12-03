<template>
  <v-card class="overflow-hidden" style="height: 30%">
    <v-app-bar absolute color="#001029" dark>
      <template>
        <v-img src="./../assets/logo.png" max-width="100px" id="logo"></v-img>
      </template>
      <v-spacer></v-spacer>
      <template v-slot:extension>
        <v-tabs active active-class="active" slider-color="#f6c646">
          <v-tab>HOME</v-tab>
          <v-tab>PERSONAS</v-tab>
          <v-tab>ESPECIES</v-tab>
          <v-tab>PLANETAS</v-tab>
          <v-tab>NAVES ESPACIALES</v-tab>
          <v-tab>MIS FAVORITOS</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-container class="header_app" style="height: 111px"></v-container>
  </v-card>
</template>

<script>
export default {
  name: "HeaderMain",
  data: () => ({}),
};
</script>
<style lang="scss" scoped>
.active {
  color: #f6c646 !important;
}
#logo {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
@media (max-width: 756px) {
  .header_app {
    height: 103px !important;
  }
}
</style>
