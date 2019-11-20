<template>
  <div class="todo-container">
    <div class="title-area">
      <span>{{ task.title }}</span>
      <span>{{ task.status | statusText }}</span>
    </div>
    <p>{{ task.content }}</p>
    <button v-if="task.status === 'TODO'" @click="complete()">完成</button>
    <button v-if="task.status === 'DONE'" @click="remove()">删除</button>
  </div>
</template>

<script>
  export default {
    name: 'TodoItem',
    props: {
      task: Object,
    },
    filters: {
      statusText: function (value) {
        const statusMap = {
          'TODO': '待完成',
          'DONE': '已完成',
        };
        return statusMap[value];
      }
    },
    methods: {
      complete: function () {
        this.$emit('complete-task', this.task.id);
      },
      remove: function () {
        this.$emit('remove-task', this.task.id);
      },
    }
  }
</script>

<style scoped>
  .todo-container {
    width: 200px;
    height: 100px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
    margin-bottom: 16px;
    padding: 16px;
    text-align: left;
  }

  .title-area {
    display: flex;
  }

  .title-area > span:first-child {
    flex: 1;
  }
</style>
