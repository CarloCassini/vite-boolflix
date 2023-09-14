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

  // created: {},

  components: { AppCard },

  props: {},

  emits: [],
};
</script>

<template>
  <div class="debug">
    <h1 class="container debug">movie list</h1>
    <AppCard />
  </div>
</template>

<style lang="scss">
@use "../style/general.scss" as *;
</style>
