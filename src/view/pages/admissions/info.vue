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
        <el-breadcrumb-item>{{$t('ADMISSION_FORM')}}</el-breadcrumb-item>
        <el-breadcrumb-item>陈小号</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="card-base card-shadow--medium bg-white p-20 ">
      <div class="flex gaps grid-12">
        <div class="p-10 pr-200 bg-info-lighter admission-info col-8">
          <img src="/logo.png" alt="">
          <h4 class="fs-18">{{$t('ADMISSION_BASE_INFO')}}</h4>
          <table class="info-table">
            <tr>
              <td>{{$t('ADMISSION_STUDENT')}}:陈小号</td>
              <td>{{$t('ADMISSION_SEX')}}:男</td>
              <td>{{$t('ADMISSION_BIRTHDAY')}}:2008-06-16</td>
            </tr>
            <tr>
              <td>{{$t('ADMISSION_PARENTS')}}: Hardy Chen</td>
              <td>{{$t('ADMISSION_PARENTS_EMAIL')}}:123@qq.com</td>
              <td>{{$t('ADMISSION_CELL_PHONE')}}:1310000</td>
            </tr>
          </table>
        </div>
        <div class="p-10 bg-info-lighter col-4 fs-14">
          <h4 class="fs-18">{{$t('ADMISSION_APPLICATION_DETAILS')}}</h4>
          <p>{{$t('ADMISSION_ENROLLMENT_YEAR')}}:2018-2019</p>
          <p>{{$t('ADMISSION_ENROLLMENT_GRADE')}}:三年级</p>
          <p>{{$t('ADMISSION_ID')}}:Rx20182018110</p>
        </div>
      </div>
      <div class="mt-20 mb-20 p-10 bg-info-lighter">
        <h4 class="fs-18">{{$t('ADMISSION_PROCESS')}}</h4>
        <div class="pl-30 pr-30">
          <el-steps :active="1">
            <el-step title="入学登记表"></el-step>
            <el-step title="面试"></el-step>
            <el-step title="发送录取信息"></el-step>
            <el-step title="学费支付"></el-step>
            <el-step title="完成"></el-step>
          </el-steps>
        </div>

        <h4>{{$t('ADMISSION_FORM')}}</h4>
        <my-table style="width:400px;" :showData="showData" :gridData="gridData">
          <el-table-column label="表名" slot="slotHeader">
            <template slot-scope="scope">
              <div>
                <el-button type="text">{{scope.row.name}}</el-button>
              </div>
            </template>
          </el-table-column>
        </my-table>
        <h4>{{$t('ADMISSION_PAYMENT')}}</h4>
        <my-table :showData="showData2" :gridData="gridData2">

        </my-table>

      </div>
    </div>
    <div class="flex justify-flex-end p-20 mb-30">
      <el-button @click="goBack" type="info">{{$t('ADMISSION_BACK')}}</el-button>
      <el-button type="warning"> {{$t('ADMISSION_REVERSION')}}</el-button>
      <el-button type="danger">{{$t('ADMISSION_REFUSE')}}</el-button>
      <el-button type="success">{{$t('ADMISSION_PASS')}}</el-button>
      <el-button type="primary">{{$t('ADMISSION_NEXT')}}</el-button>

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
      showData: [{ type: "string", prop: "time", label: "ADMISSION_TIME" }],
      gridData: [
        { name: "表1", time: "2018年7月4日 15:09:45" },
        { name: "表2", time: "2018年7月4日 15:10:45" }
      ],
      showData2: [
        { type: "string", prop: "payFor", label: "ADMISSION_PAY_FOR" },
        { type: "string", prop: "price", label: "ADMISSION_PRICE" },
        {
          type: "html",
          prop: "paymentStatus",
          label: "ADMISSION_PAYMENT_STATUS"
        },
        {
          type: "string",
          prop: "paymentType",
          label: "ADMISSION_PAYMENT_TYPE"
        },
        { type: "string", prop: "time", label: "ADMISSION_PAYMENT_TIME" },
        { type: "html", prop: "id", label: "ADMISSION_PAYMENT_ID" },
        { type: "string", prop: "remark", label: "ADMISSION_REMARK" }
      ],
      gridData2: [
        {
          payFor: "报名费",
          price: "100元",
          paymentStatus: '<span style="color:green;"> 已付款</span>',
          paymentType: "ATM转账",
          time: "2018年7月4日 15:09:45",
          id: "<a>8421321565656</a>",
          remark: ""
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
