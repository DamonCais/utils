<template>
  <!-- <vue-scroll > -->
  <div>

    <div class="page-header card-base card-shadow--small mt-20">
      <h1>表单编辑</h1>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">
          <i class="mdi mdi-home-outline"></i>
        </el-breadcrumb-item>
        <el-breadcrumb-item>set</el-breadcrumb-item>
        <el-breadcrumb-item>form</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="card-base card-shadow--medium bg-white p-20">
      <el-form label-width="80px" label-position="left" :inline="true" class="p-20">
        <el-col :md="8" :sm="12" :xs="24">
          <el-form-item label="标题">
            <el-input v-model="formInline.user" placeholder="标题"></el-input>
          </el-form-item>
        </el-col>
        <el-col :md="8" :sm="12" :xs="24">
          <el-form-item>
            <el-button type="info">查询</el-button>
            <el-button>重置</el-button>
          </el-form-item>
        </el-col>
        <el-col :md="8" :sm="12" :xs="24">
          <el-form-item>
            <el-button @click="toUrl('/set/form/create')" type="primary">+新建</el-button>
          </el-form-item>
        </el-col>
      </el-form>
      <my-table :showData="showData" :gridData="gridData">
        <el-table-column label="Operate">
          <template slot-scope="scope">
            <div>
              <el-button @click="toUrl('/set/form/'+scope.row.id)" type="text">编辑</el-button>
              <el-button type="text" style="color:red">删除</el-button>

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
        { type: "string", prop: "id", label: "Id" },
        { type: "string", prop: "title", label: "Title" },
        { type: "string", prop: "description", label: "Description" },
        { type: "string", prop: "type", label: "Type" }
      ],
      gridData: [
        {
          id: 1,
          title: "入学报名基本表格",
          description: "这是一段描述",
          type: "入学"
        },
        {
          id: 2,
          title: "2018-2019入学报名表格",
          description: "这是一段描述",
          type: "面试"
        }
      ],
      status: ""
    };
  },
  methods: {
    Operate(id) {
      this.$router.push("/set/step/" + id);
    }
  }
};
</script>


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


