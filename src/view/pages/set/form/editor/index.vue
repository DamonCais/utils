<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="中文内容">

        <el-col :span="14">
          <component :form="items" language="zh" v-bind:is="items.type|typeFilter"></component>
        </el-col>
        <el-col :span="10">
          <div style="padding-left:20px;">
            <h5>preview</h5>
            <preview class="edu-preview" :items="items" language="zh" />
          </div>
        </el-col>

      </el-tab-pane>
      <el-tab-pane label="English content">
        <el-col :span="14">
          <component :form="items" language="en" v-bind:is="items.type|typeFilter"></component>
        </el-col>
        <el-col :span="10">
          <div style="padding-left:20px;">
            <h5>preview</h5>
            <preview class="edu-preview" :items="items" language="en" />
          </div>
        </el-col>
      </el-tab-pane>

    </el-tabs>

  </div>
</template>

<script>
import editorTips from "./tips";
import editorTextbox from "./textbox";
import editorTextarea from "./textarea";
import editorRadio from "./radio";
import editorCheckbox from "./checkbox";
import editorSelect from "./select";
import editorDatePicker from "./datePicker";
import editorTable from "./table";
import editorDownload from "./download";
import editorUpload from "./upload";

import preview from "../preview";
export default {
  props: {
    items: {
      type: Object
    }
  },
  components: {
    editorTips,
    editorTextbox,
    editorTextarea,
    editorRadio,
    editorCheckbox,
    editorSelect,
    editorDatePicker,
    editorTable,
    editorDownload,
    editorUpload,
    preview
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
