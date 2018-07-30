<template>
  <div>
    <el-tabs type="border-card">
      <component :step="items" :language="language" v-bind:is="items.type|typeFilter"></component>
    </el-tabs>

  </div>
</template>

<script>
import editorForm from "./form";
import editorInterview from "./interview";
import editorAdmission from "./admission";
import editorPayment from "./payment";

// import preview from "../preview";
export default {
  props: {
    items: {
      type: Object
    },
    language: {
      type: String
    }
  },
  components: {
    editorForm,
    editorInterview,
    editorAdmission,
    editorPayment
  },
  methods: {},
  filters: {
    typeFilter(val) {
      return "editor" + val.substr(0, 1).toUpperCase() + val.slice(1);
    }
  }
};
</script>

<style lang="scss" scoped>
.edu-preview {
  margin-top: 10px;
  border-top: 1px solid black;
}
</style>
