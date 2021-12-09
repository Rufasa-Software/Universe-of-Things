<template>
  <v-app-bar color="#001029" dark>
    <template>
      <v-img src="./../assets/logo.png" max-width="100px" id="logo"></v-img>
    </template>
    <v-spacer></v-spacer>
    <template v-slot:extension>
      <v-tabs active active-class="active" slider-color="#f6c646">
        <v-tab> <router-link to="/">HOME</router-link></v-tab>
        <v-tab><router-link to="/personas">PERSONAS </router-link></v-tab>
        <v-tab>ESPECIES</v-tab>
        <v-tab>PLANETAS</v-tab>
        <v-tab>NAVES ESPACIALES</v-tab>
        <v-tab>MIS FAVORITOS</v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
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
