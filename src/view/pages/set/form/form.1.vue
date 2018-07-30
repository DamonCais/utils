<template>
  <div>
    <div class="set-form flex grid-12 gaps">
      <div class="col-2">
        <div ref="leftSection">
          <!-- 章节内容列表 -->
          <div :style="{'padding-top':120+'px'}" class="section">
            <draggable v-model="forms" @start="onStart" @end="onEnd" :options="pageOptions">
              <transition-group tag="div" id="comps" class="item-ul">
                <div v-for="(item) in forms" :key="item._id" class="section-list" @click="selSection(item._id)">
                  <el-card :class="{'currentSection':item._id===currentPageId}">
                    <!-- 前图标 -->
                    <i v-show="pageOptions.sort" class="el-icon-rank p-3" style="cursor:move;"></i>

                    <el-input v-if="pageOptions.sort" size="mini" v-model="item.sectionName[currentLanguage]">
                    </el-input>
                    <span v-else style="line-height:28px;"> {{item.sectionName[currentLanguage]}}</span>
                    <!-- 后图标 -->
                    <i v-show="pageOptions.sort" @click="delSection(item)" class="el-icon-delete  p-3"></i>
                  </el-card>
                </div>
              </transition-group>
            </draggable>

          </div>
          <!-- 章节操作按钮 -->
          <div class="item-ul">
            <div style="margin-top:20px;">
              <el-button @click="addSection" type="success" style="width:100%;">{{$t('FORM_ADD_A_SECTION')}}</el-button>
            </div>
            <div style="margin-top:20px;">
              <el-button @click="editSection" type="primary" style="width:100%;">{{pageOptions.sort?$t('FORM_CONFIRM'):$t('FORM_EDIT_SECTION')}}</el-button>
            </div>
          </div>
        </div>
      </div>
      <div id="main-section" class="col-8 scrollable only-y" style="height:100%;">
        <!-- 中间items列表 -->
        <!-- <div id="mainSection" style="height:100%;overflow:auto;" class="form mt-50"> -->
        <div style="position:relative;" class="form mt-50 pt-100">
          <!-- 顶部操作按钮 -->
          <div style="z-index:2000" ref="sectionHeader" class="section-header">
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
          <!-- 中间items列表 -->
          <div ref="form-item-list" class="form-item-list scrollable only-y">
            <div v-show="currentsection.length===0" style="z-index:-1; text-align: center;position:absolute;width:100%;line-height:500px;">
              {{$t('FORM_DRAG_FROM_THE_RIGHT_SIDE')}}
            </div>
            <el-checkbox-group v-model="checkList">
              <draggable v-model="currentsection" :options="formOptions">
                <transition-group tag="div" id="comps" style="min-height:500px;">
                  <el-card v-for="(item,index) in currentsection" :key="'card'+index" shadow="always" class="box-card">
                    <div>
                      <div class="cardHeader">
                        <span>
                          <span style="font-size:14px;padding-right:3px;">{{index+1}}.</span>
                          <el-checkbox :label="item._id">
                            &nbsp;
                          </el-checkbox>
                          <i style="font-size:20px;padding-right:3px;top:3px; transition: transform .3s" class=' el-icon-caret-right' :class="{'collapse':item.coll}" @click.prevent="item.coll=!item.coll"></i>
                          <i style="font-size:18px;padding-right:3px;" :class="['mdi',item.icon,'mr-5']"></i>
                          <span style="font-size:16px;padding-right:3px;" v-html="item.title[currentLanguage]||$t('FORM_NO_TITLE')"></span>
                        </span>
                        <span>
                          <el-button size="small" type="success" @click.stop="copyItem(index)">{{$t('FORM_COPY')}}</el-button>
                          <el-button size="small" type="primary" @click.stop="editItem(index)">{{$t('FORM_EDIT')}}</el-button>
                          <el-button size="small" type="danger" @click.stop="delItem(index)">{{$t('FORM_DELETE')}}</el-button>
                        </span>
                      </div>
                      <div class=" cardContain" v-show="item.coll" style="font-size:14px;">
                        <edu-preview :language="currentLanguage" :items="item" />
                      </div>
                    </div>
                  </el-card>
                </transition-group>
              </draggable>
            </el-checkbox-group>

          </div>

        </div>
        <!-- <div>{{forms}}</div> -->
      </div>
      <div class="col-2">
        <!-- 右侧组件列表 -->
        <div ref="rightSection" :style="{'padding-top':120+'px'}" class="components">
          <draggable v-model="components" :clone="clone" ref="drag" :options="compOptions">
            <transition-group tag="div" id="comps" class="item-ul" mode="out-in">
              <div v-for="(item,index) in components" class="drag-list" :key="index">
                <i :class="['mdi',item.icon]"></i>
                {{$t('FORM_'+item.type.toUpperCase())}}
              </div>
            </transition-group>
          </draggable>
        </div>
      </div>

    </div>
    <!-- 弹框编辑器 -->
    <el-dialog v-if="currentsection.length" :title="_(currentsection[currentIndex],'type')" :close-on-click-modal="false" :visible.sync="dialogVisible" width="80%">
      <edu-editor :items="currentsection[currentIndex]" />
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">{{$t('FORM_CANCEL')}}</el-button>
        <el-button type="primary" @click="dialogVisible = false">{{$t('FORM_CONFIRM')}}</el-button>
      </div>
    </el-dialog>
    <!-- <edu-footer /> -->
  </div>
</template>

<script>
import draggable from "vuedraggable";
import eduEditor from "./editor";
import eduPreview from "./preview";
import { forms, components } from "./config.js";
import BackToTop from "@/components/BackToTop";
import eduFooter from "./footer";

export default {
  mounted() {
    this.currentPageId = this.forms[0]._id;
    this.scroller = window.document.getElementById("main-section");
    console.log(this.scroller);
    this.scroller.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    console.log("di");
    // this.$store.dispatch("setForms", { forms: this.forms });
    this.scroller.removeEventListener("scroll", this.handleScroll);
  },
  // directives: { dialogDrag },

  computed: {
    currentSectionName: {
      get() {
        if (this.forms.filter(form => form._id === this.currentPageId).length) {
          return this.forms.filter(form => form._id === this.currentPageId)[0]
            .sectionName;
        } else {
          return {};
        }
      },
      set(value) {
        let index = this.forms.findIndex(
          form => form._id === this.currentPageId
        );
        this.forms[index].sectionName = value;
      }
    },
    currentsection: {
      get() {
        if (this.forms.filter(form => form._id === this.currentPageId).length) {
          return this.forms.filter(form => form._id === this.currentPageId)[0]
            .components;
        } else {
          return [];
        }
      },
      set(value) {
        let index = this.forms.findIndex(
          form => form._id === this.currentPageId
        );
        this.forms[index].components = value;
      }
    },
    checkAll: {
      get() {
        return (
          this.checkList.length &&
          this.checkList.length === this.currentsection.length
        );
      },
      set(value) {
        this.checkList = [];
        if (value) {
          this.currentsection.forEach(element => {
            this.checkList.push(element._id);
          });
        }
      }
    },
    isIndeterminate() {
      let len = this.checkList.length;
      return len > 0 && len < this.currentsection.length;
    },
    checkList: {
      get() {
        if (this.forms.filter(form => form._id === this.currentPageId).length) {
          return this.forms.filter(form => form._id === this.currentPageId)[0]
            .checkList;
        } else {
          return [];
        }
      },
      set(value) {
        let index = this.forms.findIndex(
          form => form._id === this.currentPageId
        );
        this.forms[index].checkList = value;
      }
    }
  },
  data() {
    return {
      scroller: window,
      offsetTop: 0,
      showTitle: true,
      currentLanguage: "zh",
      // checkList: [],
      currentIndex: 0,
      sectionDialogVisible: false,
      dialogVisible: false,
      components: components,
      compOptions: {
        group: { name: "main", pull: "clone", put: false },
        sort: false
      },
      forms: forms,
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
    handleScroll() {
      let offsetTop = this.scroller["scrollTop"];
      console.log(offsetTop);
      if (offsetTop > 50) {
        this.$refs.sectionHeader.style.top = `${offsetTop - 50}px`;
      } else {
        this.$refs.sectionHeader.style.top = "0px";
      }
    },
    openCheck() {
      this.currentsection.forEach(element => {
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
        this.currentsection = this.currentsection.filter(
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
      this.currentsection.forEach(element => {
        if (this.checkList.indexOf(element._id) !== -1) {
          element.coll = false;
        }
      });
    },
    copyItem(index) {
      let obj = Object.assign(
        {},
        JSON.parse(
          JSON.stringify(this.currentsection.slice(index, index + 1)[0])
        ),
        {
          _id: Math.random()
            .toString(36)
            .substr(2)
        }
      );
      this.currentsection.splice(index + 1, 0, obj);
    },
    delItem(index) {
      this.currentIndex = 0;

      this.delMsg("是否要删除此item").then(() => {
        let item = this.currentsection.splice(index, 1)[0];
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
    onStart(e) {
      this.currentPageId = this.forms[e.oldIndex]._id;
    },
    onEnd(e) {
      this.currentPageId = this.forms[e.newIndex]._id;
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
    copySection() {
      if (this.forms.filter(form => form._id === this.currentPageId).length) {
        let obj = Object.assign(
          {},
          JSON.parse(
            JSON.stringify(
              this.forms.filter(form => form._id === this.currentPageId)[0]
            )
          ),
          {
            _id: Math.random()
              .toString(36)
              .substr(2)
          }
        );
        this.forms.splice(
          this.forms.findIndex(form => form._id === this.currentPageId) + 1,
          0,
          obj
        );
      }
    },
    addSection() {
      this.forms.push({
        sectionName: {
          zh: "新的一章",
          en: "new Section"
        },
        components: [],
        checkList: [],
        _id: Math.random()
          .toString(36)
          .substr(2)
      });
    },
    delSection(item) {
      this.delMsg()
        .then(() => {
          this.forms = this.forms.filter(form => form._id !== item._id);
          if (this.currentPageId === item._id) {
            this.currentPageId = this.forms[0]._id;
          }
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          console.log("cancel");
        });
    },
    sectionLoading() {
      const loading = this.$loading({
        target: this.$refs["form-item-list"],
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
    eduPreview,
    BackToTop,
    eduFooter
  }
};
</script>

<style lang="scss">
.set-form {
  height: 100%;
}
.section {
  max-height: 400px;
  //   overflow-y: scroll;
}
.section::-webkit-scrollbar {
  //   width: 0;
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
.section-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  .el-card__body {
    // padding-top: 0;
  }
}
.currentSection {
  background: #409eff;
  color: #fff;
}
.form-item-list {
  border: 1px dashed #000;
  position: relative;
  margin: 50px 0;
  padding: 20px 0;
  .el-card__body {
    padding: 5px 20px;
  }
}
.item-ul {
  padding: 8px;
  // height: 500px;
  //   overflow-y: scroll;
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
