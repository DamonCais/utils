<template>
  <!-- <vue-scroll > -->
  <div>

    <div class="page-header card-base card-shadow--small mt-20">
      <h1>入学申请</h1>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">
          <i class="mdi mdi-home-outline"></i>
        </el-breadcrumb-item>
        <el-breadcrumb-item>申请步骤</el-breadcrumb-item>
        <el-breadcrumb-item>报名信息填写与支付报名费用</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="card-base card-shadow--medium bg-white p-20">
      <el-form label-width="80px" label-position="left" :inline="true" class="p-20">
        <el-col :md="8" :sm="12" :xs="24">
          <el-form-item label="申请编号">
            <el-input></el-input>
          </el-form-item>
        </el-col>
        <el-col :md="8" :sm="12" :xs="24">
          <el-form-item label="申请年级">
            <el-select clearable value="一年级" placeholder="请选择">
              <el-option label="一年级" value="一年级" />
              <el-option label="二年级" value="二年级" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :md="8" :sm="12" :xs="24">
          <el-form-item>
            <el-button type="primary">查询</el-button>
            <el-button>重置</el-button>
          </el-form-item>
        </el-col>

      </el-form>
      <my-table :showData="showData" :gridData="gridData">
        <el-table-column label="操作">
          <template slot-scope="scope">
            <div>
              <el-button type="text" @click="Operate(scope.row.id)">详情</el-button>
            </div>
          </template>
        </el-table-column>
      </my-table>
      <div class="flex justify-flex-end p-20">
        <el-pagination background layout="prev, pager, next" :total="1000">
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
      formInline: {
        user: "",
        status: ""
      },
      showData: [
        { type: "string", prop: "id", label: "申请编号" },
        { type: "string", prop: "kids", label: "学生" },
        { type: "string", prop: "parents", label: "家长" },
        { type: "string", prop: "email", label: "家长邮箱" },
        { type: "string", prop: "grade", label: "申请年级" },
        { type: "string", prop: "time", label: "提交时间" }
      ],
      gridData: [
        {
          id: "Rx18192018110",
          kids: "陈小号",
          parents: "Hardy Chan",
          email: "123@qq.com",
          grade: "一年级",
          time: "2018年7月4日 15:09:45"
        },
        {
          id: "Rx18192018111",
          kids: "陈二号",
          parents: "Hardy Chan",
          email: "123@qq.com",
          grade: "二年级",
          time: "2018年7月4日 15:10:45"
        }
      ],
      status: ""
    };
  },
  methods: {
    Operate(id) {
      this.$router.push("/admissions?p=info&id=" + id);
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


