<script>
// importo lo store ((non voglio usare lo store a questo livello))
import { store } from "../data/store";

// importo axios
import axios from "axios";

export default {
  data() {
    return {
      store,
      resultsMovie: [],
      resultsTV: [],

      serachValue: "",
    };
  },

  methods: {
    search() {
      // ricerca Film
      this.fetchTitlesMovies(this.createUrlMovie());

      // ricerca serieTV
      this.fetchTitlesTV(this.createUrlTV());
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
              poster_path,
            } = movie;
            return {
              id,
              title,
              original_title,
              original_language,
              vote_average,
              poster_path,
            };
          });
          this.resultsMovie = foundFilm;
          store.movieSearched = this.resultsMovie;
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
            const {
              id,
              name,
              original_name,
              original_language,
              vote_average,
              poster_path,
            } = filmTV;
            return {
              id,
              title: name,
              original_title: original_name,
              original_language,
              vote_average,
              poster_path,
            };
          });
          this.resultsTV = foundFilmTV;
          store.tvSearched = this.resultsTV;
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

  emits: ["cerca-film"],
};
</script>

<template>
  <section>
    <!-- ad app header diamo l'onere di chiamare i films -->
    <div class="container header py-3">
      <div class="header-text">BOOFLIX</div>
      <div class="input-group ms-auto searchbar">
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
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  display: flex;
  align-content: center;
  background-color: black;
  min-height: 10vh;
}
.header {
  display: flex;
  justify-content: center;
  align-content: center;

  .header-text {
    font-size: xx-large;
    color: red;
    font-weight: bolder;
  }
}
.searchbar {
  width: 40%;
}
</style>
