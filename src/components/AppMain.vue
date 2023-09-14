<script>
// importo lo store
import { store } from "../data/store";
import MovieList from "./MovieList.vue";

export default {
  data() {
    return {
      store,
    };
  },

  methods: {},

  // created: {},

  components: { MovieList },

  props: {},

  emits: [],
};
</script>

<template>
  <div class="debug">
    <h1 class="container debug">main</h1>
    <MovieList />
  </div>
</template>

<style lang="scss">
@use "../style/general.scss" as *;
</style>
