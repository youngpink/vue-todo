<template>
  <el-card class="task-container">
    <div slot="header" class="title-area">
      <span>{{ task.title }}</span>
      <el-button v-if="task.status === 'TODO'" @click="complete()" size="mini">完成</el-button>
      <el-button v-if="task.status === 'DONE'" @click="remove()">删除</el-button>
    </div>
    <div class="card-body">
      {{ task.content }}
    </div>
  </el-card>
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
    },
    watch: {
      task: function (value, oldValue) {
        if (value.status === 'DONE' && oldValue.status === 'TODO') {
          alert(`完成任务[${this.task.title}]啦`)
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .task-container {
    width: 300px;
    margin-bottom: 16px;
  }

  .title-area {
    display: flex;
    align-content: center;
  
    span {
      flex: 1;
      display: flex;
      align-items: center;
    }
  }
  
  .card-body {
    min-height: 100px;
  }
</style>
