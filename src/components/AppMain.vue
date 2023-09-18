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

  //   created(): {},

  components: { MovieList },

  props: {},

  emits: [],
};
</script>

<template>
  <section>
    <!-- visualizzazione della movielist -->
    <MovieList v-if="store.movieSearched[0] || store.tvSearched[0]" />
  </section>
</template>

<style lang="scss" scoped>
section {
  min-height: 90vh;
  background-color: grey;
}
</style>
