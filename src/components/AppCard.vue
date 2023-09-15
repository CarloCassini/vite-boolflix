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
  <div class="col-3 my-2">
    <div class="card" style="width: 18rem">
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
