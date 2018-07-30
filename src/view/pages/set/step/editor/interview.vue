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

            <el-form-item label="面试">
                <el-date-picker v-model="step.interviewTime" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                </el-date-picker>
            </el-form-item>

            <el-form-item label="面试地点">
                <el-input v-model="step.interviewPlace"></el-input>
            </el-form-item>
            <el-form-item label="是否需要分组">
                <el-radio-group v-model="step.needGroup">
                    <el-radio :label="true">是</el-radio>
                    <el-radio :label="false">否</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item v-show="step.needGroup" label="组名" v-for="(group,i) in step.groups" :key="i">
                <el-col :span="8">
                    <el-input v-model="group.name"></el-input>
                </el-col>
                <el-col style="text-align:right" :span="2">表</el-col>
                <el-col :span="8">
                    <el-select clearable v-model="group.form" placeholder="请选择">
                        <el-option label="表单1" value="form1" />
                        <el-option label="表单2" value="form2" />
                    </el-select>
                </el-col>
                <el-col class="line" :span="6">
                    <el-button @click="addGroup">添加</el-button>
                    <el-button v-show="step.groups.length>1" @click="delGroup(i)">删除</el-button>
                </el-col>
            </el-form-item>
            <el-form-item label="是否需要多轮面试">
                <el-radio-group v-model="step.multiInterview">
                    <el-radio :label="true">是</el-radio>
                    <el-radio :label="false">否</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item v-show="step.multiInterview" label='面试成功'>
                <el-select clearable v-model="step.nextStepWhenPass" placeholder="请选择">
                    <el-option label="下一个步骤" value="nextstep" />
                    <el-option label="第1个步骤" value="step1" />
                </el-select>
            </el-form-item>
            <el-form-item v-show="step.multiInterview" label='面试失败'>
                <el-select clearable v-model="step.nextStepWhenFail" placeholder="请选择">
                    <el-option label="下一个步骤" value="nextstep" />
                    <el-option label="第1个步骤" value="step1" />
                </el-select>
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
  methods: {
    addGroup() {
      this.step.groups.push({ name: "", form: [] });
    },
    delGroup(index) {
      this.step.groups.splice(index, 1);
    }
  }
};
</script>

<style lang="scss">
</style>
