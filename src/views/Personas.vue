<template>
  <cards-section></cards-section>
</template>
<script>
import CardsSection from "../components/CardsSection.vue";
export default {
  name: "Personas",
  data: () => ({
    homeItems: [],
  }),

  components: {
    CardsSection,
  },
};
</script>
