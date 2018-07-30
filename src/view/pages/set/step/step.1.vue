<template>
  <div id="out-section" class="scrollable only-y">
    <resize-observer @notify="resizeHandle" />

    <div class="page-header card-base card-shadow--small mt-20">
      <h1>步骤编辑</h1>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">
          <i class="mdi mdi-home-outline"></i>
        </el-breadcrumb-item>
        <el-breadcrumb-item>set</el-breadcrumb-item>
        <el-breadcrumb-item>step</el-breadcrumb-item>
        <el-breadcrumb-item>create</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="set-step flex grid-12 gaps box grow" style="height:100%;">
      <!-- 中间items列表 -->
      <div class="col-1" style="heigt:1px;">

      </div>
      <div id="main-section" class="col-8 scrollable only-y" style="height:100%;position:relative;">
        <!-- <div id="main-section" class="col-8 " style="height:100%;position:relative;overflow-y:scroll"> -->
        <div style="margin-top:0;" class="form">
          <!-- <div style="margin-top:50px;" class="form"> -->
          <div>
            <el-form label-width="120px" label-position="left">
              <el-form-item :label="$t('STEP_TITLE')">
                <el-input v-model="steps.title[currentLanguage]"></el-input>
              </el-form-item>
              <el-form-item :label="$t('STEP_TYPE')">
                <el-select clearable v-model="steps.type" placeholder="请选择">
                  <el-option label="入学" value="admission" />
                  <el-option label="课程" value="course" />
                </el-select>
              </el-form-item>
            </el-form>
          </div>
          <div ref="sectionHeader" id="sectionHeader" class="step-section-header" :style="[{'transform':'translateY('+offsetTop+'px)'},{'opacity':fixed.isfixed?0:1}]">
            <el-card>
              <el-tabs v-model="currentLanguage" type="card">
                <el-tab-pane label="中文" name="zh">
                  <div class="cardHeader">
                    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll">{{$t('FORM_CHECK_ALL')}}</el-checkbox>
                    <div>
                      <!-- <el-button size="small" @click="currentLanguage=currentLanguage==='en'?'zh':'en'" type="primary">{{$t('FORM_CHANGE_LANGUAGE')}}({{currentLanguage==='en'?'zh':'en'}})</el-button> -->
                      <el-button size="small" type="info" @click="openCheck">{{$t('FORM_OPEN')}}</el-button>
                      <el-button size="small" @click="closeCheck">{{$t('FORM_CLOSE')}}</el-button>
                      <el-button size="small" type="danger" @click="delCheck">{{$t('FORM_DELETE')}}</el-button>
                    </div>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="English" name="en">
                  <div class="cardHeader">
                    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll">{{$t('FORM_CHECK_ALL')}}</el-checkbox>
                    <div>
                      <el-button size="small" type="info" @click="openCheck">{{$t('FORM_OPEN')}}</el-button>
                      <el-button size="small" @click="closeCheck">{{$t('FORM_CLOSE')}}</el-button>
                      <el-button size="small" type="danger" @click="delCheck">{{$t('FORM_DELETE')}}</el-button>
                    </div>
                  </div>
                </el-tab-pane>
              </el-tabs>

            </el-card>
          </div>
          <div v-if="fixed.isfixed" :style="[{'z-index':2000},{position:'fixed'},{top:`${fixed.top-outOffsetTop}px`},{left:`${fixed.left}px`},{width:`${fixed.width}px`},{height:`${fixed.height}px`}]">
            <el-card>
              <el-tabs v-model="currentLanguage" type="card">
                <el-tab-pane label="中文" name="zh">
                  <div class="cardHeader">
                    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll">{{$t('FORM_CHECK_ALL')}}</el-checkbox>
                    <div>
                      <el-button size="small" type="info" @click="openCheck">{{$t('FORM_OPEN')}}</el-button>
                      <el-button size="small" @click="closeCheck">{{$t('FORM_CLOSE')}}</el-button>
                      <el-button size="small" type="danger" @click="delCheck">{{$t('FORM_DELETE')}}</el-button>
                    </div>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="English" name="en">
                  <div class="cardHeader">
                    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll">{{$t('FORM_CHECK_ALL')}}</el-checkbox>
                    <div>
                      <el-button size="small" type="info" @click="openCheck">{{$t('FORM_OPEN')}}</el-button>
                      <el-button size="small" @click="closeCheck">{{$t('FORM_CLOSE')}}</el-button>
                      <el-button size="small" type="danger" @click="delCheck">{{$t('FORM_DELETE')}}</el-button>
                    </div>
                  </div>
                </el-tab-pane>
              </el-tabs>

            </el-card>
          </div>
          <!-- 顶部操作按钮 -->

          <!-- 中间items列表 -->
          <div ref="section" class="item-list">
            <div v-show="steps.components.length===0" style="z-index:-1; text-align: center;position:absolute;width:100%;line-height:500px;">
              {{$t('FORM_DRAG_FROM_THE_RIGHT_SIDE')}}
            </div>
            <el-checkbox-group v-model="checkList">
              <draggable v-model="steps.components" :options="formOptions">
                <transition-group tag="div" id="comps" style="min-height:500px;">
                  <el-card v-for="(item,index) in steps.components" :key="'card'+index" shadow="always" class="box-card">
                    <div>
                      <div class="cardHeader">
                        <span>
                          <span style="font-size:14px;padding-right:3px;">{{'步骤'+(index+1)}}.</span>
                          <el-checkbox :label="item._id">
                            <i style="vertical-align:middle; transition: transform .3s" class=' fa-2x el-icon-caret-right' :class="{'collapse':item.coll}" @click.prevent="item.coll=!item.coll"></i>
                            <!-- <i style="vertical-align:middle;" v-else class='el-icon-caret-right' @click.prevent="item.coll=!item.coll"></i> -->
                            <!-- <span v-if="!showTitle">{{item.type}} </span> -->
                            <span v-html="item.stepName[currentLanguage]||$t('FORM_NO_TITLE')"></span>
                          </el-checkbox>
                        </span>
                        <span>
                          <el-button size="small" type="success" @click.stop="copyItem(index)">{{$t('FORM_COPY')}}</el-button>
                          <!-- <el-button size="small" type="primary" @click.stop="editItem(index)">{{$t('FORM_EDIT')}}</el-button> -->
                          <el-button size="small" type="danger" @click.stop="delItem(index)">{{$t('FORM_DELETE')}}</el-button>
                        </span>
                      </div>
                      <div class=" cardContain" v-show="item.coll" style="font-size:14px;">
                        <edu-editor :language="currentLanguage" :items="item" />
                      </div>
                    </div>
                  </el-card>
                </transition-group>
              </draggable>
            </el-checkbox-group>

          </div>

        </div>
      </div>
      <!-- 右侧组件列表 -->
      <div class="col-3">
        <div style="padding-top:200px;" class="components">
          <draggable v-model="components" :clone="clone" ref="drag" :options="compOptions">
            <transition-group tag="div" id="comps" class="item-ul" mode="out-in">
              <div v-for="(item,index) in components" class="drag-list" :key="index">
                <i class="el-icon-rank"></i>
                {{$t('STEP_'+item.type.toUpperCase())}}
              </div>
            </transition-group>
          </draggable>
        </div>

      </div>

      <!-- 返回顶部 -->
      <!-- <el-tooltip placement="top" content="BackToTop">
            <back-to-top transitionName="fade" :visibilityHeight="300" :backPosition="50"></back-to-top>
        </el-tooltip> -->

      <!-- 弹框编辑器 -->
      <!-- <edu-footer /> -->
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import eduEditor from "./editor";
import { steps, components } from "./config.js";
import Sticky from "@/components/Sticky";
// import BackToTop from "@/components/BackToTop";
// import eduFooter from "./footer";
//获取元素的纵坐标（相对于窗口）
function getTop(e) {
  var offset = e.offsetTop;
  if (e.offsetParent != null) offset += getTop(e.offsetParent);
  return offset;
}
//获取元素的横坐标（相对于窗口）
function getLeft(e) {
  var offset = e.offsetLeft;
  if (e.offsetParent != null) offset += getLeft(e.offsetParent);
  return offset;
}
export default {
  mounted() {
    this.scroller = window.document.getElementById("main-section");
    this.outScroller = window.document.getElementById("out-section");
    this.scroller.addEventListener("scroll", this.handleScroll);
    this.outScroller.addEventListener("scroll", this.handleOutScroll);
  },
  destroyed() {
    this.scroller.removeEventListener("scroll", this.handleScroll);
    this.outScroller.removeEventListener("scroll", this.handleOutScroll);

    // this.$store.dispatch("setSteps", { steps: this.steps });
  },

  computed: {
    isIndeterminate() {
      let len = this.checkList.length;
      return len > 0 && len < this.steps.components.length;
    },
    checkAll: {
      get() {
        return (
          this.checkList.length &&
          this.checkList.length === this.steps.components.length
        );
      },
      set(value) {
        this.checkList = [];
        if (value) {
          this.steps.components.forEach(element => {
            this.checkList.push(element._id);
          });
        }
      }
    }
  },
  data() {
    return {
      fixed: {
        isfixed: false,
        width: 0,
        left: 0,
        top: 0,
        height: 0
      },
      scroller: window,
      outScroller: window,
      offsetTop: 175,
      outOffsetTop: 0,
      showTitle: true,
      currentLanguage: "zh",
      checkList: [],
      currentIndex: 0,
      sectionDialogVisible: false,
      dialogVisible: false,
      components: components,
      compOptions: {
        group: { name: "main", pull: "clone", put: false },
        sort: false
      },
      steps: steps,
      formOptions: {
        group: { name: "main", pull: true, put: true },
        sort: true
      },
      pageOptions: {
        group: { name: "page", pull: false, put: false },
        sort: false
      },
      currentPageId: "a1",
      clone: original => {
        return Object.assign({}, JSON.parse(JSON.stringify(original)), {
          coll: false,
          _id: Math.random()
            .toString(36)
            .substr(2)
        });
      }
    };
  },
  methods: {
    resizeHandle() {
      let sectionHeader = this.$refs.sectionHeader;
      let top = getTop(sectionHeader);
      let left = getLeft(sectionHeader);
      let width = sectionHeader.offsetWidth;
      let height = sectionHeader.offsetHeight;
      this.offsetTop =
        this.scroller["scrollTop"] > 175 ? this.scroller["scrollTop"] : 175;
      let offsetTop = this.scroller["scrollTop"];
      if (offsetTop > 175) {
        this.fixed = {
          top,
          left,
          width,
          height,
          isfixed: true
        };
      } else {
        this.fixed = {
          isfixed: false
        };
      }
    },
    handleOutScroll() {
      this.outOffsetTop = this.outScroller["scrollTop"];
    },
    handleScroll() {
      this.resizeHandle();
    },
    openCheck() {
      this.steps.components.forEach(element => {
        if (this.checkList.indexOf(element._id) !== -1) {
          element.coll = true;
        }
      });
    },
    delCheck() {
      if (this.checkList.length === 0) {
        return;
      }
      this.currentIndex = 0;

      this.delMsg("将要删除选中的items").then(() => {
        this.steps.components = this.steps.components.filter(
          item => this.checkList.indexOf(item._id) === -1
        );
        this.checkList = [];
        this.$message({
          type: "success",
          message: "删除成功!"
        });
      });
    },
    closeCheck() {
      this.steps.components.forEach(element => {
        if (this.checkList.indexOf(element._id) !== -1) {
          element.coll = false;
        }
      });
    },
    copyItem(index) {
      let obj = Object.assign(
        {},
        JSON.parse(
          JSON.stringify(this.steps.components.slice(index, index + 1)[0])
        ),
        {
          _id: Math.random()
            .toString(36)
            .substr(2)
        }
      );
      this.steps.components.splice(index + 1, 0, obj);
    },
    delItem(index) {
      this.currentIndex = 0;

      this.delMsg("是否要删除此item").then(() => {
        let item = this.steps.components.splice(index, 1)[0];
        this.checkList = this.checkList.filter(check => check !== item._id);
        this.$message({
          type: "success",
          message: "删除成功!"
        });
      });
    },
    editItem(index) {
      this.currentIndex = index;
      this.dialogVisible = true;
    },
    editSectionName(item) {
      this.currentPageId = item._id;
      this.sectionDialogVisible = true;
    },
    selSection(index) {
      this.currentPageId = index;
    },
    editSection() {
      this.pageOptions.sort = !this.pageOptions.sort;
    },
    copySection() {},
    addSection() {},
    delSection(item) {},
    sectionLoading() {
      const loading = this.$loading({
        target: this.$refs.section,
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(255, 255, 255, 1)"
      });
      setTimeout(() => {
        loading.close();
      }, 500);
    },
    delMsg(msg) {
      return new Promise((resolve, reject) => {
        this.$confirm(msg || "此操作将永久删除该文件, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            resolve();
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除"
            });
          });
      });
    }
  },
  watch: {
    currentPageId() {
      this.sectionLoading();
    }
  },
  components: {
    draggable,
    eduEditor,
    eduEditor,
    Sticky
    // BackToTop
    // eduFooter
  }
};
</script>

<style lang="scss">
.main {
  //   margin: 0 auto;
  //   max-width: 1200px;
  // background: gray;
}
.section {
  max-height: 400px;
  overflow-y: scroll;
}
.section::-webkit-scrollbar {
  width: 0;
}
.section-list {
  position: relative;
  text-align: center;
  cursor: pointer;
  .el-card__body {
    padding: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
.step-section-header {
  z-index: 2000;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transform: translateY(175px);
}
.steps.components {
  background: #409eff;
  color: #fff;
}
.item-list {
  border: 1px dashed #000;
  position: relative;
  margin: 225px 0 50px;
  padding: 20px 0;
  .el-card__body {
    padding: 5px 20px;
  }
}
.item-ul {
  padding: 8px;
  // height: 500px;
  overflow-y: scroll;
}
.item-ul::-webkit-scrollbar {
  width: 0;
}
.drag-list {
  border: 1px #e1e4e8 solid;
  padding: 10px;
  margin: 5px 0 10px;
  list-style: none;
  background-color: #fff;
  border-radius: 6px;
  cursor: move;
  // -webkit-transition: border 0.3s ease-in;
  // transition: border 0.3s ease-in;
}
.drag-list:hover {
  border: 1px solid #20a0ff;
}
.actived {
  background: #20a0ff;
}
.cardHeader {
  display: flex;
  justify-content: space-between;
  // padding: 0 20px;
  align-items: center;
}
.cardContain {
  margin-top: 10px;
  border-top: 1px solid #000;
}
.box-card {
  margin-bottom: 5px;
}
.dynamic {
  .el-input {
    width: 100%;
    max-width: 250px;
  }
  .el-textarea {
    width: 100%;
    max-width: 250px;
  }
}
.columnSelect {
  .el-input {
    width: 100%;
    max-width: 250px;
  }
}
.collapse {
  transform: rotate(90deg);
  transition: all;
}
.p-3 {
  padding: 3px;
}
</style>
