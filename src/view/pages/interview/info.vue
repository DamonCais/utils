<template>
  <!-- <vue-scroll > -->
  <div>

    <div class="page-header card-base card-shadow--small mt-20">
      <h1>入学申请</h1>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">
          <i class="mdi mdi-home-outline"></i>
        </el-breadcrumb-item>
        <el-breadcrumb-item>入学申请</el-breadcrumb-item>
        <el-breadcrumb-item>申请步骤</el-breadcrumb-item>
        <el-breadcrumb-item>报名信息填写与支付报名费用</el-breadcrumb-item>
        <el-breadcrumb-item>陈小号</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="card-base card-shadow--medium bg-white p-20 ">
      <div class="flex gaps grid-12">
        <div class="p-10 pr-200 bg-info-lighter admission-info col-8">
          <img src="/logo.png" alt="">
          <h4 class="fs-18">基本信息</h4>
          <table class="info-table">
            <tr>
              <td>学生:陈小号</td>
              <td>性别:男</td>
              <td>出生日期:2008-06-16</td>
            </tr>
            <tr>
              <td>家长: Hardy Chen</td>
              <td>电子邮箱:123@qq.com</td>
              <td>手机号:1310000</td>
            </tr>
          </table>
        </div>
        <div class="p-10 bg-info-lighter col-4 fs-14">
          <h4 class="fs-18">申请内容</h4>
          <p>申请年份:2018-2019</p>
          <p>申请年级:三年级</p>
          <p>申请编号:Rx20182018110</p>
        </div>
      </div>
      <div class="mt-20 mb-20 p-10 bg-info-lighter">
        <h4 class="fs-18">申请过程</h4>
        <div class="pl-30 pr-30">
          <el-steps :active="1">
            <el-step title="入学登记表"></el-step>
            <el-step title="面试"></el-step>
            <el-step title="发送录取信息"></el-step>
            <el-step title="学费支付"></el-step>
            <el-step title="完成"></el-step>
          </el-steps>
        </div>

        <h4>表格</h4>
        <my-table style="width:400px;" :showData="showData" :gridData="gridData">
          <el-table-column label="表名" slot="slotHeader">
            <template slot-scope="scope">
              <div>
                <el-button type="text">{{scope.row.name}}</el-button>
              </div>
            </template>
          </el-table-column>
        </my-table>
        <h4>付款</h4>
        <my-table :showData="showData2" :gridData="gridData2">

        </my-table>

      </div>
    </div>
    <div class="flex justify-flex-end p-20 mb-30">
      <el-button @click="goBack" type="info">返回</el-button>
      <el-button type="warning"> 退回修改</el-button>
      <el-button type="danger">拒绝</el-button>
      <el-button type="success">通过</el-button>
      <el-button type="primary">查看下一个</el-button>

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
      showData: [{ type: "string", prop: "time", label: "提交时间" }],
      gridData: [
        { name: "表1", time: "2018年7月4日 15:09:45" },
        { name: "表2", time: "2018年7月4日 15:10:45" }
      ],
      showData2: [
        { type: "string", prop: "payFor", label: "费用用途" },
        { type: "string", prop: "price", label: "金额" },
        { type: "html", prop: "paymentStatus", label: "付款状态" },
        { type: "string", prop: "paymentType", label: "付款方式" },
        { type: "string", prop: "time", label: "付款时间" },
        { type: "html", prop: "id", label: "流水号" },
        { type: "string", prop: "remark", label: "备注" }
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
