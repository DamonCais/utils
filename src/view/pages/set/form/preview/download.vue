<template>
  <div>
    <p>{{form.title[language]||'缺少标题'}}</p>
    <el-button type="text">下载文件</el-button>
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
      radio: ""
    };
  }
};
</script>

<style lang="scss">
</style>

