<template>
  <div>

    <el-form label-width="120px" class="dynamic">

      <el-form-item label='标题'>
        <!-- <quill-editor ref="myTextEditor" v-model="form.title[language]" :options="titleOption"></quill-editor> -->
        <vue-html5-editor ref="remark" :content="form.title[language]" :height="120" @onclick="onClick" @change="(val)=>{this.form.title[language]=val}" :show-module-name="false" />

      </el-form-item>

      <el-form-item label='描述'>
        <div class="desc">
          <!-- <quill-editor ref="myTextEditor" v-model="form.description[language]" :options="descriptionOption"></quill-editor> -->
          <vue-html5-editor ref="remark" :content="form.description[language]" :height="120" @change="(val)=>{this.form.description[language]=val}" @onclick="onClick" :show-module-name="false" />

        </div>

      </el-form-item>

    </el-form>
  </div>
</template>

<script>
export default {
  name: "editor",
  props: {
    form: {
      type: Object
    },
    language: {
      type: String
    }
  },
  data() {
    return {
      content: "",
      titleOption: {
        theme: "snow",
        boundary: document.body,
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            // ["blockquote", "code-block"],
            // [{ header: 1 }, { header: 2 }],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }],
            // [{ indent: "-1" }, { indent: "+1" }],
            // [{ direction: "rtl" }],
            // [{ size: ["small", false, "large", "huge"] }],
            [{ header: [2, 3, 4, 5, 6, false] }],
            [{ color: [] }, { background: [] }]
            // [{ font: [] }],
            // [{ align: [] }]
            // ["clean"]
            // ["link", "image", "video"]
          ]
        },
        placeholder: "Insert title here ...",
        readOnly: false
      },
      descriptionOption: {
        theme: "snow",
        boundary: document.body,
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            // ["blockquote", "code-block"],
            // [{ header: 1 }, { header: 2 }],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }],
            // [{ indent: "-1" }, { indent: "+1" }],
            // [{ direction: "rtl" }],
            // [{ size: ["small", false, "large", "huge"] }],
            [{ header: [2, 3, 4, 5, 6, false] }],
            [{ color: [] }, { background: [] }]
            // [{ font: [] }],
            // [{ align: [] }]
            // ["clean"]
            // ["link", "image", "video"]
          ]
        },
        placeholder: "Insert description here ...",
        readOnly: false
      }
    };
  },
  components: {},
  methods: {
    onClick() {},
    onEditorChange({ editor, html, text }) {
      this.content = html;
    },
    submit() {
      console.log(this.content);
      this.$message.success("提交成功！");
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  padding: 0 20px;
  min-height: 400px;
}

.editor-btn {
  margin-top: 20px;
}
</style>
<style lang="scss">
.desc {
  // margin-top: 30px;
  .quill-editor {
    .ql-container {
      min-height: 250px;
    }
  }
}
</style>
