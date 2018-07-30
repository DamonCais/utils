<template>
  <vue-scroll class="page-profile" id="affix-container">
    <div class="mt-20 mb-20">
      <el-alert title="警告提示的文案" type="warning">
      </el-alert>
    </div>
    <div class="card-base card-shadow--medium info bg-white black-text">
      <el-steps class="mb-20 mt-20" :active="actionStep" finish-status="success" simple>
        <el-step title="家庭信息"></el-step>
        <el-step title="学生信息"></el-step>
      </el-steps>
      <!-- <profile-edit></profile-edit> -->
      <div v-if="actionStep===0">
        <div v-for="(pf,i) in parentForms" :key="i">
          <h2>
            家长#{{i+1}}
            <el-button @click="addParentForm" type="success" icon="el-icon-plus" circle></el-button>
            <el-button v-show="parentForms.length>1" @click="delParentForm(i)" type="primary" icon="el-icon-minus" circle></el-button>
          </h2>
          <profile-form :form="pf.forms" :rule="pf.rules"></profile-form>
          <div class="profile-line"></div>
        </div>
        <div class="flex justify-flex-end">
          <el-button @click="actionStep=1" type="primary">下一步</el-button>
        </div>
      </div>
      <div v-else>
        <div v-for="(cf,i) in childrenForms" :key="i">
          <h2>
            小孩#{{i+1}}
            <el-button @click="addChildrenForm" type="success" icon="el-icon-plus" circle></el-button>
            <el-button v-show="childrenForms.length>1" @click="delChildrenForm(i)" type="primary" icon="el-icon-minus" circle></el-button>
          </h2>
          <profile-form :form="cf.forms" :rule="cf.rules"></profile-form>
          <div class="profile-line"></div>
        </div>
        <div class="flex justify-space-between">
          <el-button @click="actionStep=0" type="primary">上一步</el-button>
          <el-button type="success">完成</el-button>
        </div>
      </div>

    </div>
  </vue-scroll>
</template>

<script>
// import ColorThief from "color-thief-browser";
import ProfileEdit from "@/components/Profile/ProfileEdit";
import ProfileForm from "@/components/Profile/form";

import { pforms, prules } from "@/views/formConfig/parentConfig.js";
import { cforms, crules } from "@/views/formConfig/childrenConfig.js";

export default {
  name: "Profile",
  data() {
    return {
      actionStep: 0,
      parentForms: [],
      childrenForms: []
    };
  },
  methods: {
    resizeAffixEnabled() {
      if (window.innerWidth <= 768) {
        this.affixEnabled = false;
      } else {
        this.affixEnabled = true;
      }
    },
    addForm() {
      if (this.actionStep === 0) {
        this.addParentForm();
      } else {
        this.addChildrenForm();
      }
    },
    addParentForm() {
      this.parentForms.push({
        forms: JSON.parse(JSON.stringify(pforms)),
        rules: JSON.parse(JSON.stringify(prules))
      });
    },
    delParentForm(i) {
      this.parentForms.splice(i, 1);
    },
    addChildrenForm() {
      this.childrenForms.push({
        forms: JSON.parse(JSON.stringify(cforms)),
        rules: JSON.parse(JSON.stringify(crules))
      });
    },
    delChildrenForm(i) {
      this.childrenForms.splice(i, 1);
    }
  },
  mounted() {
    // var colorThief = new ColorThief();
    // setTimeout(() => {
    //   let rgb = colorThief.getColor(document.getElementById("color-thief"));
    //   //console.log('Profile mounted', rgb)
    //   this.colorActive = true;
    //   this.color = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
    // }, 1000);

    this.resizeAffixEnabled();
    window.addEventListener("resize", this.resizeAffixEnabled);

    this.addParentForm();
    this.addChildrenForm();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resizeAffixEnabled);
  },
  components: {
    ProfileEdit,
    ProfileForm
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/_variables";

.page-profile {
  overflow: auto;
  .profile-line {
    display: block;
    clear: both;
    width: 100%;
    margin: 20px 0;
    border-top: 1px dotted #999;
  }
  .identity {
    margin-bottom: 20px;
    position: relative;
    width: 100%;
    height: 370px;

    .cover {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: url("../../assets/images/cover-2.jpg");
      background-position: 50%;
      background-size: cover;
      background-repeat: no-repeat;
      width: 100%;
      height: 100%;
    }
    .username {
      color: #32325d;
      position: absolute;
      width: 100%;
      height: 50px;
      bottom: 75px;
      left: 0;
      right: 0;
      background: #fff;
      line-height: 50px;
      box-sizing: border-box;
      padding-left: 250px;
      font-size: 25px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      box-shadow: 0 7px 14px 0 rgba(50, 50, 93, 0.1),
        0 3px 6px 0 rgba(0, 0, 0, 0.07);

      .cover-small {
        width: 220px;
        height: 50px;
        overflow: hidden;
        display: block;
        float: left;
        margin-right: -220px;
        position: relative;
        left: -250px;
        border-radius: 9px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        border: 4px solid white;
        opacity: 0;
        top: 0px;
        background-image: url("../../assets/images/cover-2.jpg");
        background-position: 50%;
        background-size: cover;
        background-repeat: no-repeat;
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
      }
      .avatar-small {
        width: 50px;
        height: 50px;
        overflow: hidden;
        display: block;
        float: left;
        margin-right: -50px;
        position: relative;
        left: -100px;
        border-radius: 50%;
        box-sizing: border-box;
        border: 4px solid white;
        opacity: 0;
        top: 0px;
        transform: rotate(-50deg);
        transition: all 0.5s;
      }
      .avatar-small img {
        width: 100%;
      }

      &.affix {
        z-index: 99;
        border-radius: 5px;

        .cover-small {
          opacity: 1;
        }

        .avatar-small {
          opacity: 1;
          left: -60px;
          transform: rotate(0deg);
        }
      }

      .colors-box {
        height: 50px;
        background: white; //091c2d
        float: right;

        .color {
          width: 50px;
          height: 50px;
          background: white; //091c2d
          float: right;
          transform: skew(-45deg);
          box-shadow: 1px 0px 1px 0px transparent;
          position: relative;
          right: -25px;
          margin-right: -50px;
          transition: margin-right 0.75s;

          &.active {
            margin-right: 0;
          }

          &:nth-child(2) {
            opacity: 0.8;
          }
          &:nth-child(3) {
            opacity: 0.6;
          }
          &:nth-child(4) {
            opacity: 0.4;
          }
          &:nth-child(5) {
            opacity: 0.2;
          }
        }
      }
    }
    .avatar {
      border: 6px solid #fff;
      position: absolute;
      bottom: 10px;
      left: 50px;
      width: 180px;
      height: 180px;
      overflow: hidden;
      border-radius: 50%;
      box-sizing: border-box;
      box-shadow: 0px 20px 15px -15px rgba(0, 0, 0, 0.15);

      img {
        width: 100%;
      }
    }

    .color-thief {
      display: block;
      width: 100px;
      visibility: hidden;
      z-index: -999999;
      position: absolute;
    }
  }

  .info {
    padding: 24px 32px;
  }
}

@media (max-width: 768px) {
  .page-profile {
    .identity {
      height: auto;

      .avatar {
        bottom: inherit;
        top: 10px;
        left: 50%;
        width: 100px;
        margin-left: -50px;
        height: 100px;
        border-width: 3px;
      }

      .username {
        position: inherit;
        padding: 10px;
        margin: 0;
        top: inherit;
        left: inherit;
        z-index: 1;
        right: inherit;
        text-align: center;
        bottom: inherit;
        white-space: inherit;
        line-height: inherit;
        height: auto;
        margin-top: 120px;
        width: 90%;
        margin-left: 5%;
        margin-bottom: 10px;
        border-radius: 50px;

        .colors-box {
          display: none;
        }

        .avatar-small {
          display: none;
        }

        .cover-small {
          display: none;
        }
      }
    }

    .info {
      padding: 8px 16px;
    }
  }
}
</style>

<style lang="scss">
.page-profile {
  .el-tabs:not(.el-tabs--border-card) {
    .el-tabs__item:not(.is-active) {
      color: #32325d;
    }
  }
}
</style>
