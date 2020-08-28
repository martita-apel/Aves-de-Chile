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
          :key="bird.uid"
          :img-src="bird.images.main"
          img-alt="Image"
          img-top
        >
          <b-button id="show-btn" v-b-modal.modal-1 @click="showModal(bird)">{{
            bird.name.spanish
          }}</b-button>
        </b-card>
      </b-row>

      <b-modal
        :bird="currentBird"
        id="modal-1"
        hide-footer
        title="Descripción general"
      >
        <div class="d-block text-center">
          <h3>{{ currentBird.name.spanish }}</h3>
        </div>
      </b-modal>
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
      bird: { name: { spanish: "" } },
    };
  },
  computed: {
    ...mapState(["birds", "currentBird"]),
  },
  methods: {
    ...mapActions(["getBirds", "showBird"]),
    showModal(bird) {
      this.showBird(bird._links.self);

      /*       this.$refs["my-modal"].show();
       */
    },
    /* hideModal() {
      this.$refs["my-modal"].hide();
    }, */
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
.card-body {
  padding: 10px;
}

#show-btn {
  background: none;
  border: none;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
#show-btn:hover,
#show-btn:active {
  font-weight: bold;
}
</style>
