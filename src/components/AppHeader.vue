<script>
// importo lo store ((non voglio usare lo store a questo livello))
// import { store } from "../data/store";

// importo axios
import axios from "axios";

export default {
  data() {
    return {
      // store,
      resultsMovie: [],
      resultsTV: [],

      serachValue: "",
    };
  },

  methods: {
    search() {
      // ricerca Film

      this.srcMovie = true;
      this.fetchTitlesMovies(this.createUrlMovie());
      this.srcMovie = false;

      this.srcTV = true;
      // ricerca serieTV
      this.fetchTitlesTV(this.createUrlTV());

      this.srcTV = false;
    },

    createUrlMovie() {
      const newCallToApi =
        this.apiUriFilm + this.apiKey + "&query=" + this.serachValue;

      return newCallToApi;
    },

    createUrlTV() {
      const newCallToApi =
        this.apiUriTV + this.apiKey + "&query=" + this.serachValue;
      return newCallToApi;
    },

    fetchTitlesMovies(callToApi) {
      axios
        .get(callToApi)
        .then((response) => {
          // questo codice viene esequito se la chiamata all'API rende 200 e va a buon fine

          const foundFilm = response.data.results.map((movie) => {
            const {
              id,
              title,
              original_title,
              original_language,
              vote_average,
            } = movie;
            return {
              id,
              title,
              original_title,
              original_language,
              vote_average,
            };
          });
          this.resultsMovie = foundFilm;
        })

        // viene eseguito a un errore della chiamata
        .catch((error) => {
          console.error(error);
          // store.cards = [];
        })

        // viene eseguito sempre
        .finally(() => {});
    },
    fetchTitlesTV(callToApi) {
      axios
        .get(callToApi)
        .then((response) => {
          // questo codice viene esequito se la chiamata all'API rende 200 e va a buon fine

          const foundFilmTV = response.data.results.map((filmTV) => {
            const { id, name, original_name, original_language, vote_average } =
              filmTV;
            return {
              id,
              title: name,
              original_title: original_name,
              original_language,
              vote_average,
            };
          });
          this.resultsTV = foundFilmTV;
        })

        // viene eseguito a un errore della chiamata
        .catch((error) => {
          console.error(error);
          // store.cards = [];
        })

        // viene eseguito sempre
        .finally(() => {});
    },
  },

  //   created(): {},

  components: {},

  props: {
    apiKey: String,
    apiUriFilm: String,
    apiUriTV: String,
  },

  emits: [],
};
</script>

<template>
  <!-- ad app header diamo l'onere di chiamare i films -->
  <div class="container">
    <div class="input-group ms-auto mb-3 searchbar">
      <input
        type="text"
        class="form-control"
        placeholder="cerca.."
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
        v-model="serachValue"
      />
      <button
        class="btn btn-primary"
        type="button"
        id="button-addon2"
        @click="search()"
      >
        Button
      </button>
    </div>
    <div class="debug">
      <h1>zona films</h1>
      {{ resultsMovie }}
    </div>
    <div class="debug">
      <h1>zona serie tv</h1>
      {{ resultsTV }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.searchbar {
  width: 40%;
}
</style>
