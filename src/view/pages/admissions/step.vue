<template>
  <!-- <vue-scroll > -->
  <div>

    <div class="page-header card-base card-shadow--small mt-20">
      <h1>{{$t('NAV_ADMISSIONS')}}</h1>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">
          <i class="mdi mdi-home-outline"></i>
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{$t('NAV_ADMISSIONS')}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{$t('ADMISSION_STEP')}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="card-base card-shadow--medium bg-white p-20">
      <my-table :showData="showData" :gridData="gridData">
        <el-table-column :label="$t('ADMISSION_OPERATE')">
          <template slot-scope="scope">
            <div>
              <el-button type="text" @click="Operate(scope.row)">{{$t('ADMISSSION_DETAIL')}}</el-button>
            </div>
          </template>
        </el-table-column>
      </my-table>
    </div>
  </div>

  <!-- </vue-scroll> -->
</template>


<script>
import myTable from "@/components/myTable";

export default {
  components: {
    myTable
  },
  mounted() {},
  data() {
    return {
      activeName: "wait",
      formInline: {
        user: "",
        status: ""
      },
      showData: [
        { type: "string", prop: "id", label: "ADMISSION_STEP_ID" },
        { type: "string", prop: "name", label: "ADMISSION_STEP_NAME" },
        { type: "string", prop: "number", label: "ADMISSION_APPLICANTS" }
      ],
      gridData: [
        {
          id: 1,
          name: "报名信息填写与支付报名费",
          number: 30,
          p: "formandpay"
        },
        { id: 2, name: "面试", number: 30, p: "interview" },
        { id: 3, name: "发送录取信息", number: 30, p: "admit" },
        { id: 4, name: "学费支付", number: 30 },
        { id: 5, name: "完成", number: 30 },
        { id: 6, name: "已入学", number: 30 },
        { id: 7, name: "失败", number: 30 }
      ],
      status: ""
    };
  },
  methods: {
    Operate(row) {
      if (row.p) {
        this.$router.push("/admissions?p=" + row.p);
      }
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
.page-user {
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


