<template>
  <!-- <vue-scroll class="page-dashboard" id="page-dashboard"> -->
  <div class="page-dashboard scrollable only-y" id="page-dashboard">

    <el-row class="mt-30" :gutter="30">
      <el-col :xs="24" :sm="24" :md="12" :lg="8">
        <div class="card-base card-shadow--medium bg-white mb-20 p-20" style="hexight:200px">
          按钮一
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8">
        <div class="card-base card-shadow--medium bg-white mb-20 p-20" style="hexight:200px">
          按钮一
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8">
        <div class="card-base card-shadow--medium bg-white mb-20 p-20" style="hexight:200px">
          按钮一
        </div>
      </el-col>
    </el-row>
  </div>
  <!-- </vue-scroll> -->
</template>


<script>
import myTable from "@/components/myTable";
export default {
  components: {
    myTable
  },
  data() {
    return {
      showData: [
        { type: "string", prop: "id", label: "Id" },
        { type: "string", prop: "year", label: "Enrollment year" },
        { type: "string", prop: "project", label: "Project Name" },
        { type: "string", prop: "applicants", label: "Applicants" }
      ],
      gridData: [
        {
          id: 111,
          year: "2018-2019",
          project: "2018-2019小学申请",
          applicants: "102"
        }
      ]
    };
  },
  methods: {
    Operate(row) {
      console.log(row);
    },
    setPageWidth() {
      this.pageWidth = document.getElementById("page-dashboard").offsetWidth;
    },
    __resizeHanlder: _.throttle(function(e) {
      this.setPageWidth();
    }, 700)
  }
};
</script>


<style lang="scss" scoped>
@import "../../assets/scss/_variables";

.widget {
  height: 200px;
  position: relative;

  .widget-header {
    .widget-icon-box {
      background: rgba(0, 0, 0, 0.02);
      border: 1px solid rgba(0, 0, 0, 0.02);
      border-radius: 4px;
      text-align: center;
      width: 60px;
      padding: 5px;
    }

    .widget-title {
      font-weight: bold;
    }
  }

  .badge-box {
    .badge {
      //background: rgba(0, 0, 0, .02);
      display: inline-block;
      //padding: 2px 5px;
      //border: 1px solid rgba(0, 0, 0, .02);
      border-radius: 4px;
      font-size: 80%;
    }
  }
}

/*@media (max-width: 768px) {
	.el-row {
		//margin-left: 0 !important;
		//margin-right: 0 !important;

		.el-col-24 {
			//padding-left: 0 !important;
			//padding-right: 0 !important;
		}
	}
}*/

.timeline {
  max-width: 1200px;
  margin: 6px;
}
.timeline,
.timeline-title {
  color: $text-color;
  line-height: 1.4;
  cursor: default;
  font-family: inherit;
}

/*@media (min-width: 1200px) and (max-width: 1850px) {
	.widget {
		.widget-header {
			.widget-icon-box {
				display: none;
			}
		}
	}
}*/
@media (min-width: 768px) and (max-width: 1040px) {
  .radio-switcher {
    display: none;
  }

  .widget {
    .widget-header {
      .widget-icon-box {
        display: none;
      }
    }
  }
}
@media (max-width: 420px) {
  .radio-switcher {
    display: none;
  }
}
</style>

<style lang="scss">
.page-dashboard {
  .widget {
    .peity {
      position: absolute;
      bottom: -1px;
      left: 0;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }
  table.styled {
    .peity {
      margin-right: 10px;
    }
  }

  .vb-content {
    padding: 0 20px;
    box-sizing: border-box !important;
    margin-top: -5px;
    margin-left: -20px;
    margin-right: -20px;
    height: calc(100% + 15px) !important;
    width: calc(100% + 40px) !important;
  }
}

@media (max-width: 768px) {
  .page-dashboard {
    .vb-content {
      padding: 0 5px !important;
      margin: -5px;
      width: calc(100% + 10px) !important;
    }
  }
}
</style>


