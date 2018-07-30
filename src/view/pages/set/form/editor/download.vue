<template>
  <div>
    <el-form label-width="120px" class="dynamic">
      <el-form-item label='标题'>
        <el-input v-model="form.title[language]"></el-input>
      </el-form-item>

      <el-form-item>
        <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" multiple :limit="3" :file-list="form.fileList">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    form: {
      type: Object
    },
    language: {
      type: String
    }
  },
  data() {
    return {
      optionInput: ""
    };
  },
  methods: {
    addOption(index) {
      if (this.optionInput.trim()) {
        this.form.columns[index].options.push(this.optionInput);
        this.optionInput = "";
      }
    },
    delOption(index, i) {
      let op = this.form.columns[index].options.splice(i, 1);
      if (op[0] === this.form.columns[index].select) {
        this.form.columns[index].select = "";
      }
    }
  }
};
</script>

<style lang="scss">
</style>
