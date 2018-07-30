<template>
    <div>
        <el-form label-width="120px" class="dynamic" style="">
            <el-form-item label='标题'>
                <el-input v-model="form.title[language]"></el-input>
            </el-form-item>

            <el-form-item label='列选项'>
                <el-table :data="form.columns" border stripe style="width: 100%;">
                    <el-table-column prop="value" label="标题" width="150">
                        <template slot-scope="scope">
                            <div class="columnSelect">
                                <el-input v-model="scope.row.title[language]"></el-input>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="type" label="类型" width="120">
                        <template slot-scope="scope">
                            <div class="columnSelect">
                                <el-select clearable v-model="scope.row.type" placeholder="类型">
                                    <el-option label="纯文本" value="textOnly" />
                                    <el-option label="数字" value="url" />
                                    <el-option label="下拉框" value="select" />
                                </el-select>
                            </div>
                        </template>
                    </el-table-column>

                    <el-table-column min-width="150" prop="options" label="选项">
                        <template slot-scope="scope">
                            <div v-if="scope.row.type==='select'" class="columnSelect">
                                <div>
                                    <el-input class="input-new-tag" v-model="scope.row.optionText" ref="saveTagInput" size="small" @keyup.enter.native="handleInputConfirm(scope.row)">
                                        <el-button @click.stop="handleInputConfirm(scope.row)" slot="append" icon="el-icon-plus"></el-button>
                                    </el-input>
                                </div>
                                <draggable v-model="scope.row.options[language]" :options="tagOption">
                                    <el-tag :key="index" style="margin:3px;" v-for="(tag,index) in scope.row.options[language]" closable :disable-transitions="false" @close="handleClose(scope.row,index)">
                                        {{tag}}
                                    </el-tag>
                                </draggable>
                            </div>
                            <div v-else>
                                没有选项
                            </div>
                        </template>
                    </el-table-column>

                    <el-table-column prop="required" label="是否必填" width="120">
                        <template slot-scope="scope">
                            <div class="columnSelect">
                                <el-switch v-model="scope.row.required" active-text="必填" inactive-text="">
                                </el-switch>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" width="180">
                        <template slot-scope="scope">
                            <div class="columnSelect">
                                <el-button size="small" @click="addColumn" type="primary">新增</el-button>
                                <el-button size="small" v-show="form.columns.length>1" @click="delColumn(scope.$index)">删除</el-button>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
            </el-form-item>

            <el-form-item label='最大行数'>
                <el-input placeholder="" @input="numTest" v-model="form.maxRow">
                    <template slot="append">行</template>
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
import draggable from "vuedraggable";

export default {
  components: {
    draggable
  },
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
      tagOption: {
        group: { name: "main", pull: true, put: true },
        sort: true
      },
      optionInput: ""
    };
  },
  methods: {
    handleInputConfirm(row) {
      console.log(row);
      if (row.optionText.trim()) {
        row.options[this.language].push(row.optionText.trim());
        row.optionText = "";
      }
    },
    handleClose(row, i) {
      row.options[this.language].splice(i, 1);
    },
    addColumn() {
      this.form.columns.push({
        title: {
          zh: "",
          en: ""
        },
        type: "",
        required: false,
        options: { zh: [], en: [] }
      });
    },
    delColumn(index) {
      this.$confirm("此操作删除items, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.form.columns.splice(index, 1);

          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    numTest(val) {
      this.$nextTick(() => {
        this.form.maxRow = parseInt(val.replace(/[^\d]/g, "")) || null;
        this.$forceUpdate();
      });
    }
  }
};
</script>

<style lang="scss">
</style>
