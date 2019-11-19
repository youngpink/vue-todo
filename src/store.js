import { getTasks } from "./api";
import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const state = {
  tasks: [],
};

const mutations = {
  getTasks(state, tasks) {
    state.tasks = tasks;
  }
};

const actions = {
  async getTasks({ commit }) {
    try {
      const tasks = await getTasks();
      commit('getTasks', tasks);
    } catch (e) {
      //es-lint: disabled
    }
  }
};

export default new Vuex.Store({
  state,
  actions,
  mutations,
});
