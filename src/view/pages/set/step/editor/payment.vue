<template>
  <div>
    <el-form label-width="130px" class="dynamic">
      <el-form-item label='步骤名'>
        <el-input v-model="step.stepName[language]"></el-input>
      </el-form-item>
      <el-form-item label='备注'>
        <vue-html5-editor  ref="remark" :content="step.remark[language]" :height="120" :show-module-name="false" />

        <!-- <el-input type="textarea" v-model="step.remark[language]"></el-input> -->
      </el-form-item>
      <el-form-item label="付款金额">
        <el-input v-model="step.pay"></el-input>
      </el-form-item>
      <el-form-item label="可支付的方式">
        <el-checkbox-group v-model="step.paymentOptions">
          <el-checkbox label="Online">在线支付</el-checkbox>
          <el-checkbox label="Cash">现金支付</el-checkbox>
          <el-checkbox label="ATM">ATM转账</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="是否需要生成账单">
        <el-radio-group v-model="step.needBill">
          <el-radio :label="true">是</el-radio>
          <el-radio :label="false">否</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
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
      optionInput: ""
    };
  },
  methods: {}
};
</script>

<style lang="scss">
</style>
