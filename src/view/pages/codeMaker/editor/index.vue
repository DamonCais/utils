<template>
  <div>
    <el-tabs type="border-card">
      <component :items="items" v-bind:is="items.type|typeFilter"></component>
    </el-tabs>
  </div>
</template>

<script>
import editorHeader from "./header";
import editorForm from "./form";
import editorTable from "./table";
import editorChart from "./chart";

// import preview from "../preview";
export default {
  props: {
    items: {
      type: Object
    }
  },
  components: {
    editorHeader,
    editorForm,
    editorTable,
    editorChart
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
