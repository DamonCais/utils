<template>
  <!-- <vue-scroll > -->
  <div>
    <div class="page-header card-base card-shadow--small mt-20">
      <h1>{{$t('NAV_USERS')}}</h1>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">
          <i class="mdi mdi-home-outline"></i>
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{$t('NAV_USERS')}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{$t('NAV_PARENTS')}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="card-base card-shadow--medium bg-white p-20">
      <el-form label-width="80px" label-position="left" :inline="true" class="p-20">
        <el-col :md="8" :sm="12" :xs="24">
          <el-form-item :label="$t('USERS_NAME')">
            <el-input v-model="formInline.user" :placeholder="$t('USERS_NAME')"></el-input>
          </el-form-item>
        </el-col>
        <el-col :md="8" :sm="12" :xs="24">
          <el-form-item :label="$t('USERS_STATUS')">
            <el-select v-model="formInline.status" :placeholder="$t('USERS_STATUS')">
              <el-option label="未激活" value="unactive"></el-option>
              <el-option label="已激活" value="active"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :md="8" :sm="12" :xs="24">
          <el-form-item>
            <el-button type="primary">{{$t('USERS_QUERY')}}</el-button>
            <el-button>{{$t('USERS_RESET')}}</el-button>
          </el-form-item>
        </el-col>
      </el-form>
      <my-table :showData="showData" :gridData="gridData">
        <el-table-column :label="$t('USERS_OPERATE')">
          <template slot-scope="scope">
            <div>
              <el-button type="text" @click="Operate(scope.row)">{{$t('USERS_DETAIL')}}</el-button>
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
      formInline: {
        user: "",
        status: ""
      },
      showData: [
        { type: "string", prop: "id", label: "USERS_ID" },
        { type: "string", prop: "name", label: "USERS_NAME" },
        { type: "string", prop: "email", label: "USERS_EMAIL" },
        { type: "string", prop: "phone", label: "USERS_PHONE" },
        { type: "time", prop: "registerTime", label: "USERS_REGISTER_TIME" }
      ],
      gridData: [
        {
          id: 111,
          name: "小强",
          email: "xxx@zz.com",
          phone: "1235",
          registerTime: new Date()
        }
      ],
      status: ""
    };
  },
  methods: {
    Operate(row) {
      this.$router.push("/user/parent/" + row.id);
    }
  }
};
</script>


<style lang="scss" scoped>
@import "../../../../assets/scss/_variables";

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


