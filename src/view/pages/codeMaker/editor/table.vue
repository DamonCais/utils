<template>
    <div>
        <el-form :inline="true">
            <el-form-item label="行数">
                <el-input v-model="items.rows" placeholder="输入行数"></el-input>
            </el-form-item>
            <el-form-item label="列数">
                <el-input v-model="items.columns" placeholder="输入列数"></el-input>
            </el-form-item>
        </el-form>
        <el-table :show-header="false" border :data="rows">
            <el-table-column v-for="i in parseInt(items.columns)" :label="'column'+i" :key="i" width="180">
                <template slot-scope="scope">
                    <div class="columnSelect">
                        <el-input v-model="scope.row['column'+(i-1)]"></el-input>
                    </div>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
  computed: {
    rows() {
      let arr = [];
      for (var i = 0; i < this.items.rows; i++) {
        arr[i] = {};
        for (var j = 0; j < this.items.columns; j++) {
          arr[i]["column" + j] = "";
        }
      }
      //   this.items.tables = arr;
      this.items.tables = arr;
      return arr;
    }
  },
  props: {
    items: {
      type: Object
    }
  },
  watch: {
    rows(newVal) {
      this.items.tables = newVal;
    }
  }
};
</script>

<style>
</style>
