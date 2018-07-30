<template>
  <div>
    <el-form label-width="130px" class="dynamic">
      <el-form-item label='步骤名'>
        <el-input v-model="step.stepName[language]"></el-input>
      </el-form-item>
      <el-form-item label='备注'>
        <!-- <el-input type="textarea" v-model="step.remark[language]"></el-input> -->
        <vue-html5-editor ref="remark" :content="step.remark[language]" :height="120" @onclick="onClick" :show-module-name="false" />
      </el-form-item>
      <el-form-item label='需要填写表格'>
        <el-select clearable multiple v-model="step.form" placeholder="请选择">
          <el-option label="表单1" value="form1" />
          <el-option label="表单2" value="form2" />
        </el-select>
      </el-form-item>
      <el-form-item label="是否需要付款">
        <el-radio-group v-model="step.needPay">
          <el-radio :label="true">是</el-radio>
          <el-radio :label="false">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item v-show="step.needPay" label="付款金额">
        <el-input v-model="step.pay"></el-input>
      </el-form-item>
      <el-form-item v-show="step.needPay" label="可支付的方式">
        <el-checkbox-group v-model="step.paymentOptions">
          <el-checkbox label="Online">在线支付</el-checkbox>
          <el-checkbox label="Cash">现金支付</el-checkbox>
          <el-checkbox label="ATM">ATM转账</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item v-show="step.needPay" label="是否需要生成账单">
        <el-radio-group v-model="step.needBill">
          <el-radio :label="true">是</el-radio>
          <el-radio :label="false">否</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
import { options } from "./options.js";
export default {
  props: {
    step: {
      type: Object
    },
    language: {
      type: String
    }
  },
  data() {
    return {
      optionInput: "",
      editor: null
    };
  },
  methods: {
    onClick(editor) {
      this.editor = editor;
    },
    test() {
      let img = `<img src="https://s3.cn-north-1.amazonaws.com.cn/guzzu-cn-dev-assets-1/images/74e4f9f3-f7a8-4085-b528-a657a80847e7-medium.jpg" />`;
      this.editor.execCommand("insertHTML", img);
    }
  },
  components: {},
  watch: {
    interfaceLanguage(val) {
      if (val === "zh") {
        this.$refs.remark.locale = options.i18n["zh-cn"];
      } else {
        this.$refs.remark.locale = options.i18n["en-us"];
      }
    }
  }
};
</script>

<style lang="scss">
</style>
