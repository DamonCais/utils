<template>
  <div>
    <my-table :showData="showData" :gridData="gridData" />
  </div>
</template>

<script>
import myTable from "@/components/myTable";
export default {
  components: {
    myTable
  },
  computed: {
    showData() {
      if (!this.items.tables.length) {
        return [];
      }
      return Object.values(this.items.tables[0]).map(function(label) {
        return {
          type: "string",
          label: label,
          prop: label
        };
      });
    },
    gridData() {
      if (!this.items.tables.length) {
        return [];
      }
      let arr = [];
      let titles = Object.values(this.items.tables[0]);
      for (var i = 1; i < this.items.tables.length; i++) {
        let obj = {};
        let grid = Object.values(this.items.tables[i]);
        titles.forEach((title, index) => {
          obj[title] = grid[index];
        });
        arr.push(obj);
      }
      return arr;
    }
  },
  props: {
    items: {
      type: Object
    }
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>
