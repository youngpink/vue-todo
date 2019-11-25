<template>
  <div>
    <el-button @click="showForm = true">添加任务</el-button>
    <el-dialog title="添加任务" :visible="showForm" @close="showForm = false">
      <LabelInput title="标题" v-model="newTitle" type="input"></LabelInput>
      <LabelInput title="内容" v-model="newContent" type="textarea"></LabelInput>
      <button @click="add()">确定添加</button>
    </el-dialog>
  </div>
</template>
<script>
  import LabelInput from "../../components/LabelInput";

  export default {
    name: 'CreateTask',
    components: { LabelInput },
    data: function () {
      return {
        showForm: false,
        newTitle: '',
        newContent: '',
      };
    },
    methods: {
      add: function () {
        this.$emit('addTask', {
          newTitle: this.newTitle,
          newContent: this.newContent
        });
      },
      reset: function () {
        this.newTitle = '';
        this.newContent = '';
        this.showForm = false;
      }
    }
  }
</script>
