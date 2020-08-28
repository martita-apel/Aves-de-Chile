import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: undefined,
    birds: [],
  },
  mutations: {
    UPDATE_CURR_USER(state, user) {
      state.currentUser = user;
    },
    GET_BIRDS(state, birds) {
      state.birds = birds;
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
      axios
        .get("http://aves.ninjas.cl/api/birds")
        .then((response) => {
          console.log(response.data);
          commit("GET_BIRDS", response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
  modules: {},
});
