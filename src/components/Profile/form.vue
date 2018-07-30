<template>
  <div class="my-form">
    <el-form ref="form" :model="form" :rules="rules" label-width="120px" :label-position="labelPosition">
      <el-col v-for="(f,key,i) in form" :key="i" :md="f.md||12" :sm="24" :xs="24" class="col-p">
        <el-form-item v-if="!f.line" :prop="key" :label="$t(f.label)">
          <el-input :placeholder="$t(f.placeholder)" v-if="f.type==='input'" v-model="f.value" />
          <el-input :placeholder="$t(f.placeholder)" v-if="f.type==='textarea'" type="textarea" v-model="f.value" />

          <el-select class="select-wide" v-if="f.type==='select'" v-model="f.value" :placeholder="$t(f.placeholder)">
            <el-option v-for="op in f.options" :key="op.value" :label="$t(op.label)" :value="op.value">
            </el-option>
          </el-select>

          <div v-if="f.type==='radio'">
            <el-radio-group v-model="f.value">
              <el-radio border v-for="op in f.options" :key="op.value" :label="$t(op.label)" :value="op.value"></el-radio>
            </el-radio-group>
            <div style="height:1px;"></div>
          </div>
          <el-date-picker v-if="f.type==='datePicker'" v-model="f.value" align="right" type="date" placeholder="选择日期">
          </el-date-picker>
          <el-upload v-if="f.type==='imginput'" class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或
              <em>点击上传</em>
            </div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
        <hr v-else class="styled mb-20">
      </el-col>
      <slot/>
    </el-form>
    <div style="clear:both;height:1px;"></div>

  </div>
</template>

<script>
export default {
  props: {
    form: {
      type: Object
    },
    rules: {
      type: Object
    },
    labelPosition: {
      type: String,
      default: "top"
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/_variables";
.my-form {
  .label-switch-box {
    display: block;
    clear: both;
    width: 100%;
    text-align: right;
    margin-bottom: 20px;
  }
  .col-p {
    padding: 0 10px;
    box-sizing: border-box;
  }
  .select-wide {
    width: 100%;
  }
  .el-date-editor {
    width: 100%;
  }
}
</style>
