<script>
// importo lo store
import { store } from "../data/store";
import { flags } from "../data/flags";

export default {
  data() {
    return {
      store,
      flags,
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
  <h5>trovati {{ store.movieSearched.length }} elementi</h5>
  <div class="col-3 my-2" v-for="movie in store.movieSearched" :key="movie.id">
    <div class="card" style="width: 18rem">
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ movie.title }}</h5>
        <p>original_title: {{ movie.original_title }}</p>

        <!-- paragrafo per stampare la bandierina -->
        <p>
          <img
            v-if="flags.flagsToManage.includes(movie.original_language)"
            :src="flags.flagNotFound"
            alt=""
          />
          <img
            v-else-if="
              movie.original_language == 'en' || movie.original_language == 'uk'
            "
            :src="flags.flagBase + 'gb' + '.png'"
            alt=""
          />
          <img
            v-else
            :src="flags.flagBase + movie.original_language + '.png'"
            alt=""
          />
        </p>

        <p>vote_average: {{ movie.vote_average }}</p>
      </div>
    </div>
  </div>

  <h3>zona serie tv</h3>
  <h5>trovati {{ store.tvSearched.length }} elementi</h5>
  <div class="col-3 my-2" v-for="tvSerie in store.tvSearched" :key="tvSerie.id">
    <div class="card" style="width: 18rem">
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ tvSerie.title }}</h5>
        <p>original_title: {{ tvSerie.original_title }}</p>

        <!-- paragrafo per stampare la bandierina -->
        <p>
          <img
            v-if="flags.flagsToManage.includes(tvSerie.original_language)"
            :src="flags.flagNotFound"
            alt=""
          />
          <img
            v-else-if="
              tvSerie.original_language == 'en' ||
              tvSerie.original_language == 'uk'
            "
            :src="flags.flagBase + 'gb' + '.png'"
            alt=""
          />
          <img
            v-else
            :src="flags.flagBase + tvSerie.original_language + '.png'"
            alt=""
          />
        </p>

        <p>vote_average: {{ tvSerie.vote_average }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
p {
  img {
    width: 10%;
  }
}
</style>
