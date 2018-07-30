<template>
  <!-- <vue-scroll > -->
  <div class="scrollable only-y">
    <component v-bind:is="$route.query.p"></component>
  </div>
  <!-- </vue-scroll> -->
</template>

<script>
import myTable from "@/components/myTable";
import admit from "./admit";
import formandpay from "./form";
import interview from "./interview";
import paper from "./paper";
import pay from "./pay";
import step from "./step";
import info from "./info";
export default {
  components: {
    myTable,
    admit,
    formandpay,
    interview,
    paper,
    pay,
    step,
    info
  },
  mounted() {
    console.log(this.$route);
    if (!this.$route.query.p) {
      this.$route.query.p = "paper";
    }
  },
  data() {
    return {
      formInline: {
        user: "",
        status: ""
      },
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


