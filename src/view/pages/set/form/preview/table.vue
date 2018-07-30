<template>
  <div>
    <el-form label-position="top" class="dynamic">
      <el-form-item :label="form.title[language]||'缺少标题'" :required="form.required">
        <div style="width:100%;" class="scrollable only-x">
          <div :style="{'width':180*form.columns.length+1+'px'}">
            <el-table border :data="rows">
              <el-table-column v-for="(column,i) in form.columns" :key="i" :label="column.required?column.title[language]+'(必填)':column.title[language]" width="180">
                <template slot-scope="scope">
                  <div class="columnSelect">
                    <el-input v-if="column.type!=='select'" v-model="scope.row[column.title[language]]"></el-input>
                    <el-select clearable v-else v-model="scope.row[column.title[language]]" placeholder="请选择">
                      <el-option v-for="(op,i) in column.options[language]" :label="op" :value="op" :key="i">
                      </el-option>
                    </el-select>
                    <!-- <div>{{scope.row}}</div> -->
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>

      </el-form-item>
    </el-form>
    <!-- <el-button @click="submit">提交</el-button> -->
  </div>
</template>

<script>
export default {
  computed: {
    rows() {
      let rows = {};

      let arr = [];
      for (var i = 0; i < this.form.maxRow; i++) {
        arr[i] = {};
      }

      return arr;
    }
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
      select: ""
    };
  },
  methods: {
    submit() {
      console.log(this.rows);
    }
  }
};
</script>

<style lang="scss">
</style>

