<template>
  <!-- <vue-scroll class="page-user" id="page-user"> -->
  <div class="scrollable only-y">

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
      <el-tabs class="p-20" v-model="activeName">
        <el-tab-pane :label="$t('USER_ACCOUNT_INFO')" name="account">
          <profile-form :form="accountForm"></profile-form>
        </el-tab-pane>
        <el-tab-pane :label="$t('USER_FAMILY_INFO')" name="parent">
          <div v-for="(pf,i) in parentForms" :key="i">
            <h2>
              {{$t('USER_PARENT')}} #{{i+1}}
              <el-button @click="addParentForm" type="success" icon="el-icon-plus" circle></el-button>
              <el-button v-show="parentForms.length>1" @click="delParentForm(i)" type="primary" icon="el-icon-minus" circle></el-button>
            </h2>
            <profile-form :form="pf.forms" :rules="pf.rules"></profile-form>
            <div class="profile-line"></div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="$t('USER_KIDS_INFO')" name="children">
          <div v-for="(cf,i) in childrenForms" :key="i">
            <h2>
              {{$t('USER_KIDS')}} #{{i+1}}
              <el-button @click="addChildrenForm" type="success" icon="el-icon-plus" circle></el-button>
              <el-button v-show="childrenForms.length>1" @click="delChildrenForm(i)" type="primary" icon="el-icon-minus" circle></el-button>
            </h2>
            <profile-form :form="cf.forms" :rules="cf.rules"></profile-form>
            <div class="profile-line"></div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>

  <!-- </vue-scroll> -->
</template>


<script>
import ProfileForm from "@/components/Profile/form";
import myTable from "@/components/myTable";
import { pforms, prules } from "@/view/formConfig/parentConfig.js";
import { cforms, crules } from "@/view/formConfig/childrenConfig.js";
import { aforms, arules } from "@/view/formConfig/accountConfig.js";

export default {
  components: {
    myTable,
    ProfileForm
  },
  mounted() {
    this.addParentForm();
    this.addChildrenForm();
  },
  data() {
    return {
      activeName: "account",
      accountForm: aforms,
      parentForms: [],
      childrenForms: []
    };
  },
  methods: {
    Operate(row) {
      console.log(row);
    },
    addParentForm() {
      this.parentForms.push({
        forms: JSON.parse(JSON.stringify(pforms)),
        rules: prules
      });
    },
    delParentForm(i) {
      this.parentForms.splice(i, 1);
    },
    addChildrenForm() {
      this.childrenForms.push({
        forms: JSON.parse(JSON.stringify(cforms)),
        rules: crules
      });
    },
    delChildrenForm(i) {
      this.childrenForms.splice(i, 1);
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



