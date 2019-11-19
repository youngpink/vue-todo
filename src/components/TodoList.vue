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
  import { mapActions, mapGetters, mapMutations } from "vuex";

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
      ...mapGetters(['todoTasks', 'doneTasks']),
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
      ...mapActions(['getTasks']),
      ...mapMutations(['completeTask', 'addTask', 'removeTask']),
      complete: function (taskId) {
        this.completeTask(taskId);
      },
      add: function () {
        this.addTask({
          title: this.newTitle,
          content: this.newContent
        });
        this.newTitle = '';
        this.newContent = '';
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

<style scoped>
  .list {
    display: flex;
    justify-content: center;
  }
  
  .tasks {
    width: 250px;
  }
</style>
