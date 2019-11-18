<template>
  <div class="todo-container">
    <span>{{ task.title }}</span><span>{{ task.status }}</span>
    <p>{{ task.content }}</p>
    <button @click="complete()">完成</button>
  </div>
</template>

<script>
  export default {
    name: 'TodoItem',
    props: {
      task: Object,
    },
    methods: {
      complete: function () {
        this.$emit('complete-task', this.task.id);
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
  }

</style>
