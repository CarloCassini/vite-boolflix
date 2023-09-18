<script>
// importo lo store
import { store } from "../data/store";
import AppCard from "./AppCard.vue";

export default {
  data() {
    return {
      store,
    };
  },

  methods: {},

  //   created(): {},

  components: { AppCard },

  props: {},

  emits: [],
};
</script>

<template>
  <div class="container">
    <div class="row justify-content-between">
      <h1 class="container">movie list</h1>

      <h3>zona film</h3>
      <h5>trovati {{ store.movieSearched.length }} elementi</h5>
      <!-- <div v-for="elemento in store.movieSearched">{{ elemento.title }}</div> -->
      <AppCard
        class="col-3 m-2"
        v-for="elemento in store.movieSearched"
        :key="elemento.id"
        :elemento="elemento"
      />
      <h3>zona serie TV</h3>
      <h5>trovati {{ store.tvSearched.length }} elementi</h5>
      <!-- <div v-for="elemento in store.movieSearched">{{ elemento.title }}</div> -->
      <AppCard
        class="col-3 m-2"
        v-for="elemento in store.tvSearched"
        :key="elemento.id"
        :elemento="elemento"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
