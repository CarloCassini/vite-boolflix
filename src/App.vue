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

  methods: {
    uploadStore(resultsMovie, resultsTV) {
      store.tvSearched = resultsTV;
    },
  },

  // created(): {},

  components: { AppHeader, AppMain },

  props: {},

  emits: [],
};
</script>

<template>
  <AppHeader
    :apiUriFilm="store.apiUriFilm"
    :apiUriTV="store.apiUriTV"
    :apiKey="store.apiKey"
    @cerca-film="uploadStore"
  />
  <AppMain />
</template>

<style lang="scss">
@use "./style/general.scss" as *;
</style>
