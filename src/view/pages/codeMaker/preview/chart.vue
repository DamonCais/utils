<template>
  <div class="myChart">
    <canvas width=800 height=400 ref="canvas"></canvas>
  </div>
</template>

<script>
import myChart from "@/components/myChart";
export default {
  mounted() {
    this.canvas = this.$refs.canvas;
  },
  props: {
    items: {
      type: Object
    }
  },
  computed: {
    chartData() {
      let arr = [];
      let name, value;
      this.items.data.forEach((element, index) => {
        if (index % 3 === 0) {
          name = element.value;
        } else if (index % 3 === 1) {
          value = element.value;
        } else if (index % 3 === 2) {
          arr.push({ name, value });
        }
      });
      return arr;
    },
    chartOption() {
      let options = {};
      this.items.options.forEach(element => {
        options[element.label] = element.value;
      });
      return options;
    }
  },
  data() {
    return {
      options: {
        padding: 50, // canvas 内边距
        bgColor: "#FFFFFF", // 默认背景颜色
        title: "图表", // 图表标题
        titleColor: "#000000", // 图表标题颜色
        titlePosition: "top", // 图表标题位置: top / bottom
        yEqual: 5, // y轴分成5等分
        fillColor: "#86CD75", // 默认填充颜色
        contentColor: "#eeeeee", // 内容横线颜色
        axisColor: "#666666", // 坐标轴颜色
        unit: "点击数/天" //纵坐标单位
      }
    };
  },
  watch: {
    chartData(newVal) {
      new myChart(
        this.canvas,
        this.chartOption.type || "bar",
        newVal,
        this.options
      );
    },
    chartOption(newOption) {
      new myChart(
        this.canvas,
        newOption.type || "bar",
        this.chartData,
        Object.assign(this.options, newOption)
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.myChart {
  width: 100%;
  min-height: 400px;
  position: relative;
}
</style>
