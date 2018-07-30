<template>
  <div>
    <el-table @filter-change="filterChange" @sort-change="sortChange" stripe :data="gridData" @row-click="rowClick" style="width:100%">
      <!-- <el-table :header-cell-style="{background:'#fff',color:'#fff'}" @filter-change="filterChange" @sort-change="sortChange" stripe :data="gridData" @row-click="rowClick" style="width:100%"> -->
      <slot name="slotHeader" />
      <el-table-column v-for="(item,index) in showData" :prop="item.prop" :key="index+1" :columnIndex="index+2" :column-key="item.prop" :filters="item.filters" :sortable="item.sortable" :label="$t(item.label)">
        <template slot-scope="scope">
          <div>
            <img v-if="item.type ==='image'" :src="scope.row|deepGet(item.prop)" alt="" style="width: 50px;height: 50px">
            <span v-if="item.type ==='time'">{{scope.row|deepGet(item.prop)|_formatTime}}</span>
            <span v-if="item.type ==='string'">{{scope.row|deepGet(item.prop)}}</span>
            <span v-if="item.type ==='html'" v-html="scope.row[item.prop]"></span>
          </div>
        </template>
      </el-table-column>
      <slot />
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    showData: {
      type: Array
    },
    gridData: {
      type: Array
    }
  },
  data() {
    return {};
  },
  methods: {
    filterChange(e) {
      this.$emit("filterChange", e);
    },
    sortChange(e) {
      this.$emit("sortChange", e);
    },
    onClick(row) {
      this.$emit("onClick", row);
    },
    rowClick(row) {
      this.$emit("rowClick", row);
    }
  },
  filters: {
    deepGet(value, path, df = undefined) {
      return (
        "" +
          (!Array.isArray(path)
            ? path
                .replace(/\[/g, ".")
                .replace(/\]/g, "")
                .split(".")
            : path
          ).reduce((o, k) => (o || {})[k], value) || df
      );
    },
    _formatTime(val) {
      return parseTime(val);
      // return moment(val).format('YYYY-MM-DD hh:mm')
      // return formatTime(val)
    },
    yuan(val) {
      return "￥" + (val / 100).toFixed(2);
    }
  }
};
function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null;
  }
  const format = cFormat || "{y}-{m}-{d} {h}:{i}";
  let date;
  if (typeof time === "object") {
    date = time;
  } else {
    if (("" + time).length === 10) time = parseInt(time) * 1000;
    date = new Date(time);
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  };
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key];
    if (key === "a")
      return ["一", "二", "三", "四", "五", "六", "日"][value - 1];
    if (result.length > 0 && value < 10) {
      value = "0" + value;
    }
    return value || 0;
  });
  return time_str;
}
</script>

<style>
</style>
