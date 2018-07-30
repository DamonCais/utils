
<template>
  <div>

    <div style="width:800px;height:400px;position:relative;">
      <canvas width=800 height=400 ref="canvas0"></canvas>
    </div>

    <div style="width:800px;height:400px;position:relative;">
      <canvas width=800 height=400 ref="canvas1"></canvas>
    </div>

  </div>
</template>
      
<script>
import myTable from "@/components/myTable";
import myForm from "@/components/myForm";
import myChart from "@/components/myChart";

export default {
  components: {
    myTable,
    myForm
  },
  mounted() {
    this.canvas0 = this.$refs.canvas0;
    new myChart(
      this.canvas0,
      this.chartOptions0.type,
      this.chartData0,
      this.chartOptions0
    );

    this.canvas1 = this.$refs.canvas1;
    new myChart(
      this.canvas1,
      this.chartOptions1.type,
      this.chartData1,
      this.chartOptions1
    );
  },
  data() {
    return {
      chartData0: [
        { name: "27", value: "5" },
        { name: "28", value: "6" },
        { name: "29", value: "63" },
        { name: "30", value: "24" },
        { name: "31", value: "5" }
      ],
      chartOptions0: {
        padding: 50,
        bgColor: "#FFFFFF",
        title: "条形图",
        titleColor: "#000000",
        titlePosition: "top",
        yEqual: 5,
        fillColor: "#86CD75",
        contentColor: "#eeeeee",
        axisColor: "#666666",
        unit: "点击数/天",
        type: "bar"
      },

      chartData1: [
        { name: "24", value: "35" },
        { name: "25", value: "55" },
        { name: "26", value: "18.6" },
        { name: "27", value: "15.2" }
      ],
      chartOptions1: {
        padding: 50,
        bgColor: "#FFFFFF",
        title: "折线图",
        titleColor: "#000000",
        titlePosition: "top",
        yEqual: 5,
        fillColor: "#86CD75",
        contentColor: "#eeeeee",
        axisColor: "#666666",
        unit: "万元/天",
        type: "line"
      }
    };
  }
};
</script>