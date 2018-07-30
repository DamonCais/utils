<template>
  <div>
    <!-- <el-tabs type="border-card">
      <el-tab-pane label="中文">
        <component :form="items" language="zh" v-bind:is="items.type|typeFilter"></component>

      </el-tab-pane>
      <el-tab-pane label="英文">
        <component :form="items" language="en" v-bind:is="items.type|typeFilter"></component>

      </el-tab-pane>

    </el-tabs> -->
    <span v-show="index">{{index}}</span>
    <component :form="items" :language="language" v-bind:is="items.type|typeFilter"></component>
  </div>
</template>

<script>
import eduTips from "./tips";
import eduTextbox from "./textbox";
import eduTextarea from "./textarea";
import eduRadio from "./radio";
import eduCheckbox from "./checkbox";
import eduSelect from "./select";
import eduDatePicker from "./datePicker";
import eduTable from "./table";
import eduDownload from "./download";
import eduUpload from "./upload";

export default {
  props: {
    items: {
      type: Object
    },
    language: {
      type: String,
      default: "zh"
    },
    index: {
      type: Number
    }
  },
  components: {
    eduTips,
    eduTextbox,
    eduTextarea,
    eduRadio,
    eduCheckbox,
    eduSelect,
    eduDatePicker,
    eduTable,
    eduDownload,
    eduUpload
  },
  methods: {},
  filters: {
    typeFilter(val) {
      return "edu" + val.substr(0, 1).toUpperCase() + val.slice(1);
    }
  }
};
</script>

<style>
</style>
