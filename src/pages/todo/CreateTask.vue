<template>
  <div>
    <el-button @click="showForm = true">添加任务</el-button>
    <el-dialog title="添加任务" :visible="showForm" @close="close">
      <el-form :model="form">
        <LabelInput title="标题" v-model="form.title" type="input"></LabelInput>
        <LabelInput title="内容" v-model="form.content" type="textarea"></LabelInput>
      </el-form>
      <div slot="footer">
        <el-button @click="close">取消</el-button>
        <el-button @click="add()">确定</el-button>
      </div>
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
        form: {
          title: '',
          content: '',
        }
      };
    },
    methods: {
      add: function () {
        this.$emit('addTask', this.form);
      },
      reset: function () {
        this.form = {
          title: '',
          content: '',
        };
        this.showForm = false;
      },
      close: function () {
        this.showForm = false;
        this.reset();
      }
    }
  }
</script>
