<template>
  <div>
    <el-form label-position="top" label-width="120px" class="dynamic">
      <el-form-item :label="form.title[language]||'缺少标题'" :required="form.required">
        <el-checkbox-group v-model="checkbox" :max="parseInt(form.maxOptions)">
          <el-checkbox v-for="(op,i) in form.options" v-if="op[language]" :label="op" :key="i">{{op[language]}}</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
export default {
  activated() {
    console.log("lllll");
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
      checkbox: []
    };
  },
  watch: {
    "form.maxOptions": function() {
      this.checkbox = [];
    }
  }
};
</script>

<style lang="scss">
</style>

