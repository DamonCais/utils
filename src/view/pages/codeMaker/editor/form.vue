<template>
  <div>
    <el-table border :data="items.forms">
      <el-table-column label="类型" width="180">
        <template slot-scope="scope">
          <el-select class="select-wide" v-model="scope.row['type']" placeholder="请选择类型">
            <el-option v-for="op in options" :key="op" :label="op" :value="op">
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column label="标签" width="180">
        <template slot-scope="scope">
          <el-input v-model="scope.row['label']"></el-input>
        </template>
      </el-table-column>
      <el-table-column label="子元素" width="180">
        <template slot-scope="scope">
          <div v-if="scope.row.type!=='input'" class="columnSelect">
            <div>
              <el-input class="input-new-tag" v-model="scope.row.optionText" ref="saveTagInput" size="small" @keyup.enter.native="handleInputConfirm(scope.row)">
                <el-button @click.stop="handleInputConfirm(scope.row)" slot="append" icon="el-icon-plus"></el-button>
              </el-input>
            </div>
            <draggable v-model="scope.row.options" :options="tagOption">
              <el-tag :key="index" style="margin:3px;" v-for="(tag,index) in scope.row.options" closable :disable-transitions="false" @close="handleClose(scope.row,index)">
                {{tag}}
              </el-tag>
            </draggable>
          </div>
          <div v-else>
            没有选项
          </div>
        </template>
      </el-table-column>
      <el-table-column label="占位" width="180">
        <template slot-scope="scope">
          <el-input v-model="scope.row['md']"></el-input>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button size="small" @click="addColumn" type="success">增加</el-button>
          <el-button size="small" v-show="items.forms.length>1" @click="delColumn(scope.$index)" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  components: {
    draggable
  },
  props: {
    items: {
      type: Object
    }
  },
  data() {
    return {
      options: ["input", "select", "btns"],
      tagOption: {
        group: { name: "main", pull: true, put: true },
        sort: true
      }
    };
  },
  methods: {
    handleInputConfirm(row) {
      if (row.optionText.trim()) {
        row.options.push(row.optionText.trim());
        row.optionText = "";
      }
    },
    handleClose(row, i) {
      row.options.splice(i, 1);
    },
    addColumn() {
      this.items.forms.push({
        type: "",
        label: "",
        options: [],
        md: "",
        value: ""
      });
    },
    delColumn(index) {
      this.items.forms.splice(index, 1);
    }
  }
};
</script>

<style>
</style>
