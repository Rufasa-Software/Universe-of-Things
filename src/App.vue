<template>
  <v-app>
    <header-main />
    <v-main
      style="
        background-image: url('https://wallpaperaccess.com/full/2217435.jpg');
      "
    >
      <router-view />
    </v-main>

    <v-footer dark padless>
      <v-card class="flex" flat tile color="#001029">
        <v-card-text class="py-3 text-center copyright">
          <strong>© Copyright</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import HeaderMain from "../src/components/HeaderMain.vue";
export default {
  name: "App",
  data: () => ({
    //
  }),
  components: {
    HeaderMain,
  },
};
</script>

<style lang="scss" scoped>
.copyright {
  color: #f6c646 !important;
}
</style>
