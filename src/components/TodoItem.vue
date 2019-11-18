<template>
  <div>{{ task | JSON }}</div>
</template>

<script>
  export default {
    name: 'TodoItem',
    props: {
      task: Object,
    },
  }
</script>

<style scoped>

</style>
