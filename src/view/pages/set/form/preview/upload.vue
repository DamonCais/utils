<template>
  <div>
    <el-form label-position="top" class="dynamic">
      <el-form-item :label="form.title[language]||'缺少标题'" :required="form.required">
        <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" multiple :limit="3" :file-list="fileList">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip" v-if="form.maxSize">只能上传{{form.uploadType}}文件，且不超过{{form.maxSize}}MB</div>
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
      fileList: []
    };
  }
};
</script>

<style lang="scss">
</style>

