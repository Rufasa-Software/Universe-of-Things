<template>
  <div>
    <header-main />
    <cards-section></cards-section>
  </div>
</template>
<script>
import HeaderMain from "../../src/components/HeaderMain.vue";
import CardsSection from "../components/CardsSection.vue";
export default {
  data: () => ({
    items: [],
  }),
  name: "Home",

  methods: {},

  components: {
    HeaderMain,
    CardsSection,
  },
};
</script>
