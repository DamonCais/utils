<template>
  <div>
    <el-form label-position="top" label-width="120px" class="dynamic">

      <el-form-item :label="form.title[language]||'缺少标题'" :required="form.required">
        <el-input v-model="textbox" :maxlength="form.maxLength"></el-input>
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
      textbox: ""
    };
  }
};
</script>

<style lang="scss">
</style>
