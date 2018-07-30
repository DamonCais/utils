<template>
  <div>
    <el-form label-width="120px" class="dynamic">
      <el-form-item label='标题'>
        <el-input v-model="form.title[language]"></el-input>
      </el-form-item>

      <el-form-item label='格式'>
        <el-select clearable v-model="form.inputType" placeholder="请选择">
          <el-option label="年月日" value="yy-MM-dd" />
          <el-option label="日月年" value="dd-MM-yy" />
        </el-select>
      </el-form-item>

      <el-form-item label='格式'>
        <el-select clearable v-model="form.limitType" placeholder="请选择">
          <el-option label="过去的时间" value="pickerBefore" />
          <el-option label="未来的时间" value="pickerFuture" />
          <el-option label="限定的时间" value="pickerLimit" />
          <el-option label="不限时间" value="pickerUnlimit" />

        </el-select>
      </el-form-item>

      <el-form-item v-show="form.limitType==='pickerLimit'" label='限定的日期'>
        <el-date-picker v-model="form.limitTime" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" value-format="timestamp">
        </el-date-picker>
      </el-form-item>

      <el-form-item label='是否必填'>
        <el-switch v-model="form.required" active-text="必填" inactive-text="">
        </el-switch>
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
    }
  }
};
</script>

<style lang="scss">
</style>
