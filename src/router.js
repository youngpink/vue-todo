import Home from "./components/Home";
import TodoList from "./components/TodoList";

export default [{
  path: '',
  component: Home,
  children: [{
    path: '/:taskStatus',
    component: TodoList,
  }],
}];
