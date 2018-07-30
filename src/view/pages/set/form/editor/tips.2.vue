<template>
  <div>

    <div class="container">
      <div>
        <quill-editor ref="myTextEditor" v-model="form.title[language]" :options="titleOption"></quill-editor>

      </div>
      <div class="desc">
        <quill-editor ref="myTextEditor" v-model="form.description[language]" :options="descriptionOption"></quill-editor>

      </div>
    </div>
  </div>
</template>

<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { quillEditor } from "vue-quill-editor";
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
            [{ indent: "-1" }, { indent: "+1" }],
            // [{ direction: "rtl" }],
            [{ size: ["small", false, "large", "huge"] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ color: [] }, { background: [] }],
            [{ font: [] }],
            [{ align: [] }]
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
            [{ indent: "-1" }, { indent: "+1" }],
            // [{ direction: "rtl" }],
            [{ size: ["small", false, "large", "huge"] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ color: [] }, { background: [] }],
            [{ font: [] }],
            [{ align: [] }]
            // ["clean"]
            // ["link", "image", "video"]
          ]
        },
        placeholder: "Insert description here ...",
        readOnly: false
      }
    };
  },
  components: {
    quillEditor
  },
  methods: {
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
  margin-top: 30px;
  .quill-editor {
    .ql-container {
      min-height: 250px;
    }
  }
}
</style>
