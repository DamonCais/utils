<template>
  <div>
    <!-- <textarea :value="components|templateMaker" style="width:100%;min-height:400px;"></textarea>
    <textarea :value="components|scriptMaker" style="width:100%;min-height:400px;"></textarea> -->
    <textarea :value="codeMaker(components)" style="width:100%;min-height:600px;"></textarea>
  </div>
</template>

<script>
var headerMaker = function(title, index) {
  let header = `     
      <h1>${title}</h1>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">
          <i class="mdi mdi-home-outline"></i>
        </el-breadcrumb-item>
        <el-breadcrumb-item  v-for="(bread,i) in breads${index}" :key="i" >{{bread}}</el-breadcrumb-item>
      </el-breadcrumb>\n`;
  return header;
};
var headerScript = function(item, index) {
  let breads = item.bread.split("/");
  return `breads${index}:${JSON.stringify(breads)},`;
};
var tableMaker = function(index) {
  return `
    <my-table :showData="showData${index}" :gridData="gridData${index}"/>
  `;
};
var tableScript = function(item, index) {
  if (!item.tables.length) {
    return "";
  }
  let showData = Object.values(item.tables[0]).map(function(label) {
    return {
      type: "string",
      label: label,
      prop: label
    };
  });
  let gridData = [];
  let titles = Object.values(item.tables[0]);
  for (var i = 1; i < item.tables.length; i++) {
    let obj = {};
    let grid = Object.values(item.tables[i]);
    titles.forEach((title, index) => {
      obj[title] = grid[index];
    });
    gridData.push(obj);
  }
  return `
  showData${index}:${JSON.stringify(showData)},
  gridData${index}:${JSON.stringify(gridData)},
  `;
};
var queryMaker = function(index) {
  return `
      <my-form :form="forms${index}" />
`;
};
var queryScript = function(item, index) {
  return `
      forms${index}:${JSON.stringify(item.forms)},
`;
};
var chartMarker = function(index) {
  return `
  <div style="width:800px;height:400px;position:relative;">
    <canvas width=800 height=400 ref="canvas${index}"></canvas>
  </div>
  `;
};
var chartScript = function(item, index) {
  let arr = [];
  let name, value;
  item.data.forEach((element, index) => {
    if (index % 3 === 0) {
      name = element.value;
    } else if (index % 3 === 1) {
      value = element.value;
    } else if (index % 3 === 2) {
      arr.push({ name, value });
    }
  });
  let options = {
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
  };
  item.options.forEach(element => {
    options[element.label] = element.value;
  });
  return `
      chartData${index}:${JSON.stringify(arr)},
      chartOptions${index}:${JSON.stringify(options)},
      `;
};
var chartMounted = function(index) {
  return `
      this.canvas${index} = this.$refs.canvas${index};
      new myChart(this.canvas${index}, this.chartOptions${index}.type, this.chartData${index},this.chartOptions${index});

  `;
};
export default {
  props: {
    components: {
      type: Array
    }
  },
  methods: {
    codeMaker(components) {
      return this.templateMaker(components) + this.scriptMaker(components);
    },
    templateMaker(components) {
      let html = "";
      components.forEach((item, index) => {
        if (item.type === "header") {
          html += headerMaker(item.title, index);
        } else if (item.type === "table") {
          html += tableMaker(index);
        } else if (item.type === "form") {
          html += queryMaker(index);
        } else if (item.type === "chart") {
          html += chartMarker(index);
        }
      });
      return `
<template>
  <div>
    ${html}
  </div>
</template>
      `;
    },
    scriptMaker(components) {
      let script = "";
      let mounted = "";
      components.forEach((item, index) => {
        if (item.type === "header") {
          script += headerScript(item, index);
        } else if (item.type === "table") {
          script += tableScript(item, index);
        } else if (item.type === "form") {
          script += queryScript(item, index);
        } else if (item.type === "chart") {
          script += chartScript(item, index);
          mounted += chartMounted(index);
        }
      });
      return `
<script>
import myTable from "@/components/myTable";
import myForm from "@/components/myForm";
import myChart from "@/components/myChart";

export default {
  components:{
    myTable,
    myForm
  },
  mounted(){
    ${mounted}
  },
  data(){
    return{
      ${script}
    }
  }
};
<\/script>
      `;
    }
  },
  filters: {}
};
</script>

<style lang="scss" scoped>
.edu-preview {
  margin-top: 10px;
  border-top: 1px solid black;
}
</style>
