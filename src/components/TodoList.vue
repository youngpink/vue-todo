<template>
  <div class="list">
    <div v-if="shouldDisplayTodo()">
      <div>标题<input v-model="newTitle"/></div>
      <div>内容<textarea v-model="newContent"/></div>
      <button @click="add()">确定添加</button>
    </div>
    <div class="tasks">
      <TodoItem
              :key="task.id"
              :task="task"
              v-for="task in displayTasks"
              @complete-task="complete($event)"
              @remove-task="remove($event)"
      ></TodoItem>
    </div>
  </div>
</template>

<script>
  import TodoItem from "./TodoItem";
  import { uuid } from "../utils/uuid";
  import { mapActions, mapState } from "vuex";

  export default {
    name: 'TodoList',
    components: { TodoItem },
    data: function () {
      return {
        newTitle: '',
        newContent: '',
      };
    },
    computed: {
      ...mapState({
        tasks: state => state.tasks,
      }),
      displayTasks: function () {
        if (this.shouldDisplayTodo()) {
          return this.todoTasks;
        }
        if (this.shouldDisplayDone()) {
          return this.doneTasks;
        }
        return [];
      },
      todoTasks: function () {
        return this.tasks.filter(task => task.status === 'TODO');
      },
      doneTasks: function () {
        return this.tasks.filter(task => task.status === 'DONE');
      }
    },
    created: function () {
      this.getTasks();
    },
    methods: {
      ...mapActions(['getTasks']),
      complete: function (taskId) {
        const task = this.tasks.find(task => task.id === taskId);
        task.status = 'DONE';
      },
      add: function () {
        this.tasks.push({ id: uuid(), title: this.newTitle, content: this.newContent, status: 'TODO' });
        this.newTitle = '';
        this.newContent = '';
      },
      remove: function (taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
      },
      shouldDisplayTodo: function () {
        return this.$route.params.taskStatus === 'todo';
      },
      shouldDisplayDone: function () {
        return this.$route.params.taskStatus === 'done';
      },
    },
  }
</script>

<style scoped>
  .list {
    display: flex;
    justify-content: center;
  }
  
  .tasks {
    width: 250px;
  }
</style>
