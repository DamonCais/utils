<template>
  <!-- <vue-scroll > -->
  <div>

    <div class="page-header card-base card-shadow--small mt-20">
      <h1>{{$t('NAV_INTERVIEW')}}</h1>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">
          <i class="mdi mdi-home-outline"></i>
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{$t('NAV_INTERVIEW')}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{$t('INTERVIEW_GROUPS')}}</el-breadcrumb-item>
        <el-breadcrumb-item>一年级组</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="card-base card-shadow--medium bg-white p-20">
      <el-menu default-active="1" mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item index="1">{{$t('INTERVIEW_UN_FINISH')}}</el-menu-item>
        <el-menu-item index="2">{{$t('INTERVIEW_FINISH')}}</el-menu-item>
      </el-menu>
      <el-form label-width="80px" label-position="left" :inline="true" class="p-20">
        <el-col :md="8" :sm="12" :xs="24">
          <el-form-item :label="$t('INTERVIEW_ID')">
            <el-input></el-input>
          </el-form-item>
        </el-col>
        <el-col :md="8" :sm="12" :xs="24">
          <el-form-item :label="$t('INTERVIEW_ENROLLMENT_GRADE')">
            <el-select clearable value="一年级" placeholder="请选择">
              <el-option label="一年级" value="一年级" />
              <el-option label="二年级" value="二年级" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :md="4" :sm="12" :xs="24">
          <el-form-item>
            <el-button type="primary">{{$t('INTERVIEW_QUERY')}}</el-button>
            <el-button>{{$t('INTERVIEW_RESET')}}</el-button>
          </el-form-item>
        </el-col>
        <el-col class="flex justify-flex-end" :md="4" :sm="12" :xs="24">
          <el-form-item>
            <el-button type="info">{{$t('INTERVIEW_SEND_MESSAGE')}}</el-button>
          </el-form-item>
        </el-col>
      </el-form>

      <my-table :showData="showData" :gridData="gridData">
        <el-table-column slot="slotHeader" type="selection" width="55">
        </el-table-column>
        <el-table-column :label="$t('INTERVIEW_OPERATE')">
          <template slot-scope="scope">
            <div>
              <el-button type="text" @click="Operate(scope.row)">{{$t('INTERVIEW_BEGIN_INTERVIEW')}}</el-button>
            </div>
          </template>
        </el-table-column>
      </my-table>
      <div class="p-20 flex justify-flex-end">
        <el-pagination :page-size="100" layout="prev, pager, next, jumper" :total="1000">
        </el-pagination>
      </div>
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
        { type: "string", prop: "id", label: "INTERVIEW_INDEX" },
        { type: "string", prop: "interviewId", label: "INTERVIEW_ID" },
        { type: "string", prop: "student", label: "INTERVIEW_STUDENT" },
        { type: "string", prop: "enrollmentGrade", label: "INTERVIEW_ENROLLMENT_GRADE" },
        { type: "html", prop: "status", label: "INTERVIEW_STATUS" },
        { type: "string", prop: "time", label: "INTERVIEW_TIME" }
        // { type: "string", prop: "applicants", label: "Applicants" }
      ],
      gridData: [
        {
          id: 1,
          interviewId: "RX18192018110",
          student: "陈小号",
          enrollmentGrade: "一年级",
          status: '<span style="color:orange;">等待通知</span>',
          time: ""
        },
        {
          id: 2,
          interviewId: "RX18192018111",
          student: "陈二号",
          enrollmentGrade: "一年级",
          status: '<span style="color:green;">已发送</span>',
          time: "2018年7月5日 11:51:09"
        }
      ],
      status: ""
    };
  },
  methods: {
    Operate(row) {
      this.$router.push("/interview?p=interview&id=" + row.interviewId);
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


