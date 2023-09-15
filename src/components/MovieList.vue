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
  <div class="container debug">
    <div class="row">
      <h1 class="container debug">movie list</h1>
      <AppCard />
      <AppCard />
      <AppCard />
      <AppCard />
      <AppCard />
      <AppCard />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
