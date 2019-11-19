import { getTasks } from "./api";
import Vuex from "vuex";
import Vue from "vue";
import { uuid } from "./utils/uuid";

Vue.use(Vuex);

const state = {
  tasks: [],
};

const getters = {
  todoTasks: state => state.tasks.filter(task => task.status === 'TODO'),
  doneTasks: state => state.tasks.filter(task => task.status === 'DONE'),
};

const mutations = {
  getTasks(state, tasks) {
    state.tasks = tasks;
  },
  completeTask(state, taskId) {
    const task = state.tasks.find(task => task.id === taskId);
    task.status = 'DONE';
  },
  addTask(state, { title, content }) {
    state.tasks.push({ id: uuid(), title, content, status: 'TODO' });
  },
  removeTask(state, taskId) {
    state.tasks = state.tasks.filter(task => task.id !== taskId);
  },
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
  getters,
  mutations,
  actions,
});
