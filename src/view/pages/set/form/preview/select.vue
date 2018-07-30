<template>
  <div>
    <el-form label-position="top" label-width="120px" class="dynamic">
      <el-form-item :label="form.title[language]||'缺少标题'" :required="form.required">
        <el-select clearable v-model="select" placeholder="请选择">
          <el-option v-for="(op,i) in form.options" :label="op[language]" v-if="op[language]" :value="op[language]" :key="i">
          </el-option>
        </el-select>
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
      select: ""
    };
  }
};
</script>

<style lang="scss">
</style>

