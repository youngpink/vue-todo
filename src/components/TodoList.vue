<template>
  <div>{{ JSON.stringify(tasks) }}</div>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    msg: String
  },
  data: function () {
    return {
      tasks: [
        { id: '001', title: '起床', content: '早上7点起床', status: 'TODO' },
        { id: '002', title: '吃早餐', content: '早上8点前吃完早餐', status: 'TODO' },
        { id: '003', title: '读书', content: '读《重构》1-10页', status: 'TODO' },
        { id: '004', title: '锻炼', content: '步行1万步', status: 'TODO' },
        { id: '005', title: '打电话', content: '给狗娃纸打电话', status: 'TODO' },
      ],
    };
  }
}
</script>

<style scoped>
</style>
