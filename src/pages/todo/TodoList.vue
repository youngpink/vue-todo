<template>
  <div class="list">
    <CreateTask
            class="create-task"
            ref="createTask"
            v-if="shouldDisplayTodo()"
            @addTask="add($event)"
    ></CreateTask>
    <TodoItem
            :key="task.id"
            :task="task"
            v-for="task in displayTasks"
            @complete-task="complete($event)"
            @remove-task="remove($event)"
    ></TodoItem>
  </div>
</template>

<script>
  import TodoItem from "./TodoItem";
  import { mapActions, mapGetters, mapMutations } from "vuex";
  import CreateTask from "./CreateTask";

  export default {
    name: 'TodoList',
    components: { TodoItem, CreateTask },
    computed: {
      ...mapGetters('task', ['todoTasks', 'doneTasks']),
      displayTasks: function () {
        if (this.shouldDisplayTodo()) {
          return this.todoTasks;
        }
        if (this.shouldDisplayDone()) {
          return this.doneTasks;
        }
        return [];
      },
    },
    created: function () {
      this.getTasks();
    },
    methods: {
      ...mapActions('task', ['getTasks']),
      ...mapMutations('task', ['completeTask', 'addTask', 'removeTask']),
      complete: function (taskId) {
        this.completeTask(taskId);
      },
      add: function (taskData) {
        this.addTask(taskData);
        this.$refs.createTask.reset();
      },
      remove: function (taskId) {
        this.removeTask(taskId);
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

<style scoped lang="scss">
  .list {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  
  .create-task {
    position: absolute;
    right: 100px;
  }
</style>
