<template>
  <div class="list">
    <div class="">
      <div>标题<input v-model="newTitle"/></div>
      <div>内容<textarea v-model="newContent"/></div>
      <button @click="add()">确定添加</button>
    </div>
    <div class="todo">
      <TodoItem
              :key="task.id"
              :task="task"
              v-for="task in todoTasks"
              @complete-task="complete($event)"
      ></TodoItem>
    </div>
    <div class="done">
      <TodoItem
              :key="task.id"
              :task="task"
              v-for="task in doneTasks"
              @remove-task="remove($event)"
      ></TodoItem>
    </div>
  </div>
</template>

<script>
  import TodoItem from "./TodoItem";
  import { uuid } from "../utils/uuid";

  export default {
    name: 'TodoList',
    components: { TodoItem },
    data: function () {
      return {
        tasks: [
          { id: '001', title: '起床', content: '早上7点起床', status: 'TODO' },
          { id: '002', title: '吃早餐', content: '早上8点前吃完早餐', status: 'TODO' },
          { id: '003', title: '读书', content: '读《重构》1-10页', status: 'TODO' },
          { id: '004', title: '锻炼', content: '步行1万步', status: 'TODO' },
          { id: '005', title: '打电话', content: '给狗娃纸打电话', status: 'TODO' },
        ],
        newTitle: '',
        newContent: '',
      };
    },
    computed: {
      todoTasks: function () {
        return this.tasks.filter(task => task.status === 'TODO');
      },
      doneTasks: function () {
        return this.tasks.filter(task => task.status === 'DONE');
      }
    },
    methods: {
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
    },
  }
</script>

<style scoped>
  .list {
    display: flex;
    justify-content: center;
  }
  
  .todo {
    width: 250px;
  }
  
  .done {
    width: 250px;
  }
</style>
