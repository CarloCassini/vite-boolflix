<script>
// importo lo store
import { store } from "../data/store";

export default {
  data() {
    return {
      store,
    };
  },

  methods: {},

  //  created(): {},

  components: {},

  props: {},

  emits: [],
};
</script>

<template>
  <h3>zona film</h3>
  <div class="col-3 my-2" v-for="movie in store.movieSearched" :key="movie.id">
    <div class="card" style="width: 18rem">
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ movie.title }}</h5>
        <p>original_title: {{ movie.original_title }}</p>
        <p>original_language: {{ movie.original_language }}</p>
        <p>vote_average: {{ movie.vote_average }}</p>
      </div>
    </div>
  </div>

  <h3>zona serie tv</h3>
  <div class="col-3 my-2" v-for="tvSerie in store.tvSearched" :key="tvSerie.id">
    <div class="card" style="width: 18rem">
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ tvSerie.title }}</h5>
        <p>original_title: {{ tvSerie.original_title }}</p>
        <p>original_language: {{ tvSerie.original_language }}</p>
        <p>vote_average: {{ tvSerie.vote_average }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
