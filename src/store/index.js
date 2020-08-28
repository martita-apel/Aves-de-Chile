import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: undefined,
    birds: [],
    currentBird: {
      name: { spanish: "" },
      images: { main: "" },
      map: { image: "", title: "" },
    },
    overlay: false,
  },
  mutations: {
    UPDATE_CURR_USER(state, user) {
      state.currentUser = user;
    },
    GET_BIRDS(state, birds) {
      state.birds = birds;
    },
    CURRENT_BIRD(state, bird) {
      state.currentBird = bird;
    },
    SHOW_OVERLAY(state) {
      state.overlay = true;
    },
    HIDE_OVERLAY(state) {
      state.overlay = false;
    },
  },
  actions: {
    updateUser({ commit }, user) {
      return new Promise((resolve, reject) => {
        try {
          commit("UPDATE_CURR_USER", user);
          resolve(user);
        } catch (e) {
          reject(e);
        }
      });
    },
    getBirds({ commit }) {
      commit("SHOW_OVERLAY");
      axios
        .get("http://aves.ninjas.cl/api/birds")
        .then((response) => {
          console.log(response.data);
          commit("GET_BIRDS", response.data);
          commit("HIDE_OVERLAY");
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    showBird({ commit }, birdHref) {
      commit("SHOW_OVERLAY");
      axios
        .get(birdHref)
        .then((response) => {
          console.log(response.data);
          commit("CURRENT_BIRD", response.data);
          commit("HIDE_OVERLAY");
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
  modules: {},
});
