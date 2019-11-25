<template>
  <div>
    <el-button @click="showForm = true">添加任务</el-button>
    <el-dialog title="添加任务" :visible="showForm" @close="close">
      <el-form :model="form" :rules="rules" ref="newTaskForm">
        <el-form-item label="标题" prop="title">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
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
        },
        rules: {
          title: [{ required: true, message: '请输入标题', trigger: 'blur' }]
        },
      };
    },
    methods: {
      add: function () {
        this.$refs.newTaskForm.validate((valid) => {
          if (valid) {
            this.$emit('addTask', this.form);
            return;
          }
        });
      },
      reset: function () {
        this.$refs.newTaskForm.resetFields();
        this.form.content = '';
        this.showForm = false;
      },
      close: function () {
        this.showForm = false;
        this.reset();
      }
    }
  }
</script>
