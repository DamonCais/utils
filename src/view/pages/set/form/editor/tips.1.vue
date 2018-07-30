<template>
  <div>
    <el-form label-width="120px">
      <el-form-item label="title">
        <editor ref="titleEditor" style="width:400px;" :content="form.title[language]" @input="updateTitle" :auto-height="true" :show-module-name="false"></editor>
      </el-form-item>
      <!-- <el-form-item label="description">
        <editor ref="descEditor" style="width:400px;" :content="form.description[language]" @input="updateDescription" :height="150" :z-index="1000" :auto-height="true" :show-module-name="false"></editor>
      </el-form-item> -->
    </el-form>
  </div>
</template>

<script>
import VueHtml5Editor from "vue-html5-editor";
import { options } from "./options.js";
let editor = new VueHtml5Editor(options);

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
      content: ""
    };
  },
  methods: {
    updateTitle(data) {
      this.form.title[this.language] = data;
    },
    updateDescription(data) {
      this.form.description[this.language] = data;
    },
    langChange() {
      this.$refs.titleEditor.locale = options.i18n["zh-cn"];
    }
  },
  components: {
    editor
  }
};
</script>

<style>
</style>
