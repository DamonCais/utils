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
        <el-breadcrumb-item>陈小号</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="card-base card-shadow--medium bg-white p-20 ">
      <div class="flex gaps grid-12">
        <div class="p-10 pr-200 bg-info-lighter admission-info col-8">
          <img src="/logo.png" alt="">
          <h4 class="fs-18">{{$t('INTERVIEW_BASE_INFO')}}</h4>
          <table class="info-table">
            <tr>
              <td>{{$t('INTERVIEW_STUDENT')}}:陈小号</td>
              <td>{{$t('INTERVIEW_SEX')}}:男</td>
              <td>{{$t('INTERVIEW_BIRTHDAY')}}:2008-06-16</td>
            </tr>
            <tr>
              <td>{{$t('INTERVIEW_PARENTS')}}: Hardy Chen</td>
              <td>{{$t('INTERVIEW_EMAIL')}}:123@qq.com</td>
              <td>{{$t('INTERVIEW_CELL_PHONE')}}:1310000</td>
            </tr>
          </table>
        </div>
        <div class="p-10 bg-info-lighter col-4 fs-14">
          <h4 class="fs-18">{{$t('INTERVIEW_DETAIL')}}</h4>
          <p>{{$t('INTERVIEW_ENROLLMENT_YEAR')}}:2018-2019</p>
          <p>{{$t('INTERVIEW_ENROLLMENT_GRADE')}}:三年级</p>
          <p>{{$t('INTERVIEW_ID')}}:Rx20182018110</p>
        </div>
      </div>
      <div class="mt-20 mb-20 p-10 bg-info-lighter">

        <h4>{{$t('INTERVIEW_FROM_DETAIL')}}</h4>
        <my-table :showData="showData" :gridData="gridData">
          <el-table-column :label="$t('INTERVIEW_GRADE')+'(0-10)'">
            <template slot-scope="scope">
              <div>
                <el-input></el-input>
              </div>
            </template>
          </el-table-column>
        </my-table>
        <el-form class="mt-30" style="width:400px;">
          <el-form-item :label="$t('INTERVIEW_OPINION')">
            <el-input type="textarea"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="flex justify-flex-start p-20 mb-30">

      <el-button type="primary">{{$t('INTERVIEW_SUBMIT')}}</el-button>
      <el-button>{{$t('INTERVIEW_CANCEL')}}</el-button>

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
        { type: "string", prop: "id", label: "INTERVIEW_FORM_INDEX" },
        { type: "string", prop: "test", label: "INTERVIEW_TEST_CONTENT" },
        { type: "string", prop: "require", label: "INTERVIEW_REQUIRE" }
      ],
      gridData: [
        {
          id: "1",
          test: "仪容仪表",
          require:
            "要求仪表修饰无论是修饰程度，还是在饰品数量和修饰技巧上，都应把握分寸，自然适度。追求虽刻意雕琢而又不露痕迹的效果。"
        },
        {
          id: "2",
          test: "心里素质",
          require: ""
        }
      ],

      status: ""
    };
  },
  methods: {
    Operate(id) {
      // this.$router.push("/message-box/" + id);
    }
  }
};
</script>


<style lang="scss" scoped>
@import "../../../assets/scss/_variables";
.admission-info {
  position: relative;
  img {
    position: absolute;
    right: 50px;
    top: 20px;
    width: 120px;
    height: 120px;
  }
  .info-table {
    font-size: 14px;
    width: 100%;
    tr {
      line-height: 30px;
      td {
        padding-right: 20px;
      }
    }
  }
}
</style>
