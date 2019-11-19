import Home from "./components/Home";
import TodoList from "./components/TodoList";
import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [{
  path: '',
  component: Home,
  redirect: '/todo',
  children: [{
    path: '/:taskStatus',
    component: TodoList,
  }],
}];

export default new VueRouter({ routes });
