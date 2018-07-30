<template>
  <div>
    <el-form label-position="top" label-width="120px" class="dynamic">
      <el-form-item :label="form.title[language]||'缺少标题'" :required="form.required">
        <el-radio v-if="op[language]" v-model="radio" v-for="(op,i) in form.options" :label="op" :key="i">{{op[language]}}</el-radio>
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
      radio: ""
    };
  }
};
</script>

<style lang="scss">
</style>

