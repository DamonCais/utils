<template>
  <div>
    <my-form :form="items.options" labelPosition="top" />

    <el-row>
      <el-col :span="8" class="pl-10">Key</el-col>
      <el-col :span="8" class="pl-10">Value</el-col>
      <el-col :span="8" class="pl-10">Operate</el-col>
    </el-row>
    <my-form @myClick="clickHandle" :form="items.data" labelPosition="top" />
  </div>
</template>

<script>
import myForm from "@/components/myForm";
export default {
  mounted() {
    this.items.data = this.forms0;
    this.items.options = this.forms1;
  },
  components: {
    myForm
  },
  props: {
    items: {
      type: Object
    }
  },
  data() {
    return {
      forms1: [
        {
          type: "select",
          label: "type",
          options: ["line", "bar"],
          md: "8",
          value: "line",
          optionText: ""
        },
        { type: "input", label: "title", options: [], md: "8", value: "" },
        { type: "input", label: "unit", options: [], md: "8", value: "" }
      ],
      forms0: [
        { type: "input", label: "", options: [], md: "8", value: "" },
        { type: "input", label: "", options: [], md: "8", value: "" },
        {
          type: "btns",
          label: "",
          options: ["add", "del"],
          md: "8",
          value: "",
          optionText: ""
        }
      ]
    };
  },
  methods: {
    clickHandle(obj) {
      console.log(obj.index);

      if (obj.btn === "add") {
        this.items.data.push(
          ...[
            { type: "input", label: "", options: [], md: "8", value: "" },
            { type: "input", label: "", options: [], md: "8", value: "" },
            {
              type: "btns",
              label: "",
              options: ["add", "del"],
              md: "8",
              value: "",
              optionText: ""
            }
          ]
        );
      } else if (obj.btn === "del") {
        let start = (obj.index + 1) / 3 - 1;
        this.items.data.splice(start * 3, 3);
      }
    }
  }
};
</script>

<style>
</style>
