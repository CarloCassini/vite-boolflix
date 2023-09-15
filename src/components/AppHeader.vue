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

  //   created(): {},

  components: {},

  props: {},

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
      />
      <button class="btn btn-primary" type="button" id="button-addon2">
        Button
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;
.searchbar {
  width: 40%;
}
</style>
