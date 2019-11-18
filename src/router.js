import Home from "./components/Home";
import TodoList from "./components/TodoList";

export default [{
  path: '',
  component: Home,
  redirect: '/todo',
  children: [{
    path: '/:taskStatus',
    component: TodoList,
  }],
}];
