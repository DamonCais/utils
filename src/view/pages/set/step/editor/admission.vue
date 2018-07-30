<template>
    <div>
        <el-form label-width="130px" class="dynamic">
            <el-form-item label='步骤名'>
                <el-input v-model="step.stepName[language]"></el-input>
            </el-form-item>
            <el-form-item label='备注'>
                <!-- <el-input type="textarea" v-model="step.remark[language]"></el-input> -->
                <vue-html5-editor  ref="remark" :content="step.remark[language]" :height="120" :show-module-name="false" />

            </el-form-item>

        </el-form>
        <h1>
            通知书
        </h1>
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
