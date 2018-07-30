<template>
  <div>
    <el-form label-width="120px" class="dynamic">
      <el-form-item label='标题'>
        <el-input v-model="form.title[language]"></el-input>
      </el-form-item>

      <el-form-item label='输入类型'>
        <el-select clearable v-model="form.inputType" placeholder="请选择">
          <el-option label="纯文本" value="textOnly" />
          <el-option label="网址" value="url" />
        </el-select>
      </el-form-item>

      <el-form-item label='是否必填'>
        <el-switch v-model="form.required" active-text="必填" inactive-text="">
        </el-switch>
      </el-form-item>

      <el-form-item prop="maxLength" label='最大长度'>
        <el-input placeholder="" @input="numTest" v-model="form.maxLength">
          <template slot="append">个字</template>
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
      console.log(index);
      if (this.optionInput.trim()) {
        this.form.columns[index].options.push(this.optionInput);
        this.optionInput = "";
      }
    },
    delOption(index, i) {
      let op = this.form.columns[index].options.splice(i, 1);
      if (op[0] === this.form.columns[index].select) {
        this.form.columns[index].select = "";
      }
    },
    numTest(val) {
      // console.log(parseInt(val.replace(/[^\d]/g, "")) || null;         this.$forceUpdate(););
      this.$nextTick(() => {
        this.form.maxLength = parseInt(val.replace(/[^\d]/g, "")) || null;
        this.$forceUpdate();
      });
    }
  }
};
</script>

<style lang="scss">
</style>
