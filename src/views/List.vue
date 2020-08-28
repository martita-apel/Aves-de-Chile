<template>
  <div class="list">
    <h1>Inventario</h1>
    <h2>AVES DE CHILE</h2>
    <hr class="linea" />
    <div class="buscador">
      <b-form-input v-model="search" placeholder="Busca tu ave"></b-form-input>
    </div>

    <b-container class="bv-example-row mb-3">
      <b-row cols="6" class="cartas">
        <b-card
          class="m-2 card"
          v-for="bird in computedBirds"
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
        scrollable
        title="Descripción general"
      >
        <div id="modal-body" class="d-block text-center">
          <img class="image-modal" :src="currentBird.images.main" alt="" />
          <div class="modal-text">
            <h3>{{ currentBird.name.spanish }}</h3>
            <h4 class="especie">
              Especie: <i>{{ currentBird.species }}</i>
            </h4>
            <h4 class="especie">
              Mide: <i>{{ currentBird.size }}</i>
            </h4>
            <hr />
            <h5 class="descrip">{{ currentBird.didyouknow }}</h5>
            <h6 class="habitat"><b>Hábitat: </b> {{ currentBird.habitat }}</h6>
            <hr />
            <h6>
              <b>La podemos encontrar: <br /> </b> {{ currentBird.map.title }}
            </h6>
            <img class="image-modal" :src="currentBird.map.image" alt="" />
          </div>
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
      search: "",
      bird: {
        name: { spanish: "" },
        images: { main: "" },
        map: { image: "", title: "" },
      },
    };
  },
  computed: {
    ...mapState(["birds", "currentBird"]),
    computedBirds() {
      return this.birds.filter((bird) => {
        return bird.name.spanish
          .toLowerCase()
          .includes(this.search.toLowerCase());
      });
    },
  },
  methods: {
    ...mapActions(["getBirds", "showBird"]),
    showModal(bird) {
      this.showBird(bird._links.self);
    },
  },
  created() {
    this.getBirds();
  },
};
</script>

<style scoped>
h1 {
  margin: 30px 0 0 0;
}
h2 {
  letter-spacing: 3px;
  font-weight: lighter;
}
.linea {
  width: 50%;
  margin: auto;
}
.buscador {
  width: fit-content;
  display: inline-flex;
  justify-content: center;
  margin: 30px;
}
.cartas {
  justify-content: center;
}
.card {
  max-height: 250px;
  min-height: 160px;
  min-width: 150px;
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
#modal-body {
  padding: 0;
}
.image-modal {
  max-width: 100%;
}
.modal-text {
  padding: 30px;
}
.especie {
  font-size: 18px;
}
.descrip {
  font-weight: 300;
}
.habitat {
  font-size: 14px;
  font-weight: 300;
}
</style>
