<template>
  <!-- <vue-scroll > -->
  <div class="page-message" id="page-message">
    <div class="no-print">
      <div class="page-header card-base card-shadow--small mt-20">
        <h1>消息详情</h1>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">
            <i class="mdi mdi-home-outline"></i>
          </el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/message-box' }">消息盒子</el-breadcrumb-item>
          <el-breadcrumb-item>消息详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="card-base card-shadow--medium bg-white mt-20 p-20">
        <h3 class="text-center ">Hardy Chen 同学的发票已生成,请尽快支付</h3>
        <h6 class="text-center info-text">发送时间:2018 xxxx 消息来源:入学报名</h6>
        <p>
          Multi language support is xxxx in the
        </p>
        <hr class="styled mb-20">
        <div>
          <strong class="mr-20"> 入学发票 </strong>
          <el-button @click="dialogVisible=true">查看</el-button>
        </div>
      </div>
    </div>

    <el-dialog title="invoice" :visible.sync="dialogVisible" width="60%">
      <invoice />
    </el-dialog>
  </div>

  <!-- </vue-scroll> -->
</template>


<script>
import myTable from "@/components/myTable";
import invoice from "@/views/pages/Invoice";
export default {
  components: {
    myTable,
    invoice
  },
  mounted() {},
  data() {
    return {
      showData: [
        // { type: "string", prop: "MsgStatus", label: " " },
        { type: "string", prop: "MsgTitle", label: "消息标题" },
        { type: "string", prop: "MsgTime", label: "发送时间" },
        { type: "string", prop: "MsgFrom", label: "消息来源" }
      ],
      gridData: [
        {
          MsgStatus: "negative",
          MsgTitle: "请交钱",
          MsgTime: "2018年7月19日xxx",
          MsgFrom: "系统信息"
        },
        {
          MsgStatus: "intermediary",
          MsgTitle: "感谢你的注册",
          MsgTime: "2018年7月19日xxx",
          MsgFrom: "系统信息"
        }
      ],
      status: "",
      dialogVisible: false
    };
  },
  methods: {
    Operate(row) {
      console.log(row);
    }
  }
};
</script>


<style lang="scss" scoped>
@import "../../../assets/scss/_variables";

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
.page-message {
  overflow: auto;
  .profile-line {
    display: block;
    clear: both;
    width: 100%;
    margin: 20px 0;
    border-top: 1px dotted #999;
  }
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


