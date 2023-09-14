<script>
// importo axios
import axios from "axios";
// importo lo store
import { store } from "./data/store.js";

// importo i componenti
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  data() {
    return {
      store,
    };
  },

  methods: {},

  // created: {},

  components: { AppHeader, AppMain },

  props: {},

  emits: [],
};
</script>

<template>
  <h1 class="container debug text-center">
    app

    <font-awesome-icon icon="paper-plane" class="me-5" />
  </h1>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss">
@use "./style/general.scss" as *;
</style>
