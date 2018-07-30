<template>
  <div>
    <el-form label-position="top" label-width="120px" class="dynamic">
      <el-form-item :label="form.title[language]||'缺少标题'" :required="form.required">
        <el-input type="textarea" v-model="textarea" :maxlength="form.maxLength"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  mounted() {
    this.textarea = this.form.default[this.language];
  },
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
      textarea: ""
    };
  },
  methods: {},
  watch: {
    "form.default": {
      handler(newName, oldName) {
        this.textarea = this.form.default[this.language];
      },
      immediate: true,
      deep: true
    }
  }
};
</script>

<style lang="scss">
</style>
