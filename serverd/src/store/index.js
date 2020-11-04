import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login: false
  },
  mutations: {
    setLogin(state, data) {
      state.login = data
    }
  },
  actions: {},
  modules: {}
});
