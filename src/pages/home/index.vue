<template>
  <div>
    <el-menu mode="horizontal" :router="true" default-active="todo">
      <el-menu-item index="todo">待完成 ({{ todoTasks.length }})</el-menu-item>
      <el-menu-item index="done">已完成 ({{ doneTasks.length }})</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";

  export default {
    name: 'Home',
    computed: {
      ...mapGetters('task', ['todoTasks', 'doneTasks'])
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
