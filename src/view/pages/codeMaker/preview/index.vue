<template>
  <div>
    <el-tabs type="border-card">
      <component :items="items" v-bind:is="items.type|typeFilter"></component>
    </el-tabs>
  </div>
</template>

<script>
import previewHeader from "./header";
import previewForm from "./form";
import previewTable from "./table";
import previewChart from "./chart";

// import preview from "../preview";
export default {
  props: {
    items: {
      type: Object
    }
  },
  components: {
    previewHeader,
    previewForm,
    previewTable,
    previewChart
  },
  methods: {},
  filters: {
    typeFilter(val) {
      return "preview" + val.substr(0, 1).toUpperCase() + val.slice(1);
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
