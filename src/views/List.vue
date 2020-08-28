<template>
  <div class="list">
    <h1>Lista de aves</h1>
    <div>
      <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
      <div class="mt-2">Value: {{ text }}</div>
      <b-button pill variant="info">Button</b-button>
    </div>

    <b-container class="bv-example-row mb-3">
      <b-row cols="6" class="cartas">
        <b-card
          class="m-2 card"
          v-for="bird in birds"
          :key="bird.id"
          :img-src="bird.images.main"
          img-alt="Image"
          img-top
        >
          <b-card-title class="titulo">{{ bird.name.spanish }}</b-card-title>
        </b-card>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "List",
  components: {},
  data() {
    return {
      text: "",
    };
  },
  computed: {
    ...mapState(["birds"]),
  },
  methods: {
    ...mapActions(["getBirds"]),
  },
  created() {
    this.getBirds();
  },
};
</script>

<style scoped>
.cartas {
  justify-content: center;
}
.card {
  max-height: 220px;
  min-height: 150px;
}
.titulo {
  font-size: 15px;
  padding: 0;
}
</style>
