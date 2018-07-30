<template>
    <div>
        <el-form label-width="120px" class="dynamic">
            <el-form-item label='标题'>
                <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label='默认值'>
                <el-input type="textarea" v-model="form.default"></el-input>
            </el-form-item>
            <el-form-item v-for="(option,index) in form.options" :key="'options'+index" :label="'option'+index">
                <el-input v-model="option.value"></el-input>
                <el-button>删除</el-button>
            </el-form-item>
            <el-form-item>
                <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" multiple :limit="3" :file-list="form.fileList">
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
            </el-form-item>

            <el-form-item v-for="(column,index) in form.columns" :key="'columns'+index" :label="'column'+index">
                <el-input v-model="column.value"></el-input>
                <el-select clearable v-model="column.type" placeholder="类型">
                    <el-option label="纯文本" value="textOnly" />
                    <el-option label="网址" value="url" />
                </el-select>
                <el-switch v-model="column.require" active-text="必填" inactive-text="">
                </el-switch>
                <el-button>删除</el-button>
            </el-form-item>

            <el-form-item>
                <el-button>新增选项</el-button>
            </el-form-item>
            <el-form-item label='类型'>
                <el-select clearable v-model="form.type" placeholder="请选择">
                    <el-option label="纯文本" value="textOnly" />
                    <el-option label="网址" value="url" />
                </el-select>
            </el-form-item>
            <el-form-item label='是否必填'>
                <el-switch v-model="form.require" active-text="必填" inactive-text="">
                </el-switch>
            </el-form-item>
            <el-form-item label='最大长度'>
                <el-input placeholder="" v-model.number="form.maxLength">
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
  data() {
    return {
      form: {
        title: "",
        options: [{ value: "" }],
        columns: [{ value: "", type: "", require: true }],
        default: "",
        type: "textOnly",
        require: false,
        maxLength: null,
        trackFun: "",
        fileList: []
      }
    };
  }
};
</script>

<style lang="scss">
.dynamic {
  .el-input {
    width: 270px;
  }
}
</style>
