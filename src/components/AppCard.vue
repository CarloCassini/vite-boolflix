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
  <div class="debug">
    <h1 class="container debug">app card</h1>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;
</style>
