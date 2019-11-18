<template>
  <div>
    <router-link to="todo">待完成</router-link>
    <router-link to="done">已完成</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  
  export default {
    name: 'Home',
  }
</script>

<style scoped>

</style>
