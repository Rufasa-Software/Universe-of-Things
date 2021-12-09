<template>
  <cards-section></cards-section>
</template>
<script>
import CardsSection from "../components/CardsSection.vue";
export default {
  name: "Naves",
  data: () => ({
    items: [],
  }),

  components: {
    CardsSection,
  },
};
</script>
