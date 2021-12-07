<template>
  <div>
    <header-main />
    <cards-section><card /></cards-section>
  </div>
</template>
<script>
import { Api } from "../api/Api";
import HeaderMain from "../../src/components/HeaderMain.vue";
import CardsSection from "../components/CardsSection.vue";
import Card from "../components/Card.vue";
export default {
  data: () => ({
    items: [],
  }),
  name: "Home",

  methods: {},
  beforeMounted: async function () {
    let api = await new Api();
    this.items = await api.getApi();
    console.log(this.items);
  },
  components: {
    HeaderMain,
    CardsSection,
    Card,
  },
};
</script>
