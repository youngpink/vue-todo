<template>
  <div class="home">
    <router-link to="todo">待完成 ({{ todoTasks.length }})</router-link>
    <router-link to="done">已完成 ({{ doneTasks.length }})</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";

  export default {
    name: 'Home',
    computed: {
      ...mapGetters(['todoTasks', 'doneTasks'])
    },
  }
</script>

<style scoped>
  .home {
    text-align: center;
  }
  
  a {
    display: inline-block;
    margin-bottom: 16px;
  }
  
  a + a {
    margin-left: 16px;
  }
</style>
