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

  computed: {
    pathImage() {
      const path =
        "https://image.tmdb.org/t/p/w342/" + this.elemento.poster_path;
      return path;
    },

    starVote() {
      const diviso = parseInt(this.elemento.vote_average / 2);

      return diviso;
    },
  },

  props: {
    elemento: Object,
  },

  emits: [],
};
</script>

<template>
  <div class="card" style="width: 18rem">
    <img :src="pathImage" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ elemento.title }}</h5>
      <p>original_title: {{ elemento.original_title }}</p>

      <!-- paragrafo per stampare la bandierina -->
      <p>
        <img
          v-if="flags.flagsToManage.includes(elemento.original_language)"
          :src="flags.flagNotFound"
          alt=""
        />
        <img
          v-else-if="
            elemento.original_language == 'en' ||
            elemento.original_language == 'uk'
          "
          :src="flags.flagBase + 'gb' + '.png'"
          alt=""
        />
        <img
          v-else
          :src="flags.flagBase + elemento.original_language + '.png'"
          alt=""
        />
      </p>

      <p>vote_average: {{ elemento.vote_average }}</p>
      <p>
        <span v-for="(stella, index) in 5">
          <font-awesome-icon
            :icon="index < starVote ? 'fa-solid fa-star' : 'fa-regular fa-star'"
          />
        </span>
      </p>
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
