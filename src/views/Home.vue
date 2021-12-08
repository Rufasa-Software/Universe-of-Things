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
  name: "Home",
  data: () => ({
    items: [],
  }),

  components: {
    HeaderMain,
    CardsSection,
  },
};
</script>
