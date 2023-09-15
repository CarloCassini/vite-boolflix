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
  <div class="debug">
    <h1 class="container debug">main</h1>

    <section>
      <!-- visualizzazione della movielist -->
      <MovieList />
    </section>
  </div>
</template>

<style lang="scss" scoped></style>
