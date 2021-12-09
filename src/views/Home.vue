<template>
  <div>
    <cards-section></cards-section>
  </div>
</template>
<script>
import CardsSection from "../components/CardsSection.vue";
export default {
  name: "Home",
  data: () => ({
    items: [],
  }),

  components: {
    CardsSection,
  },
};
</script>
