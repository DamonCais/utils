<template>
  <div>
    <el-form label-width="120px" class="dynamic">
      <el-form-item label='标题'>
        <el-input v-model="form.title[language]"></el-input>
      </el-form-item>

      <el-form-item v-for="(option,index) in form.options" :key="'选项'+index" :label="'option'+(1+index)">
        <el-input v-model="option[language]"></el-input>
        <el-button @click="delOption(index)" v-if="form.options.length>1">删除</el-button>
      </el-form-item>

      <el-form-item>
        <el-button @click="addOption">新增选项</el-button>
      </el-form-item>

      <el-form-item label='是否必填'>
        <el-switch v-model="form.required" active-text="必填" inactive-text="">
        </el-switch>
      </el-form-item>

      <el-form-item label='最多可选'>
        <el-input v-model="form.maxOptions" @input="numTest" label="描述文字">
          <template slot="append">个</template>
        </el-input>
      </el-form-item>

      <el-form-item label='自动填充方法'>
        <el-select clearable v-model="form.trackFun" placeholder="请选择">
          <el-option label="姓名" value="textOnly" />
          <el-option label="年龄" value="url" />
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
      optionInput: ""
    };
  },
  methods: {
    addOption(index) {
      this.form.options.push({ zh: "", en: "" });
    },
    delOption(index) {
      this.form.options.splice(index, 1);
    },
    numTest(val) {
      this.$nextTick(() => {
        this.form.maxOptions = parseInt(val.replace(/[^\d]/g, "")) || null;
        this.$forceUpdate();
      });
    }
  }
};
</script>

