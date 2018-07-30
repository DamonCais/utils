<template>
  <div class="edu-footer">
    <div style="max-width:1200px;margin:0 auto;">
      <el-row :gutter="10">
        <el-col :span="16" :offset="4">
          <el-card>
            <el-button @click="toPreview" type="primary">Preview</el-button>
            <el-button type="success">Save</el-button>
          </el-card>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
export default {
  methods: {
    toPreview() {
      this.$router.push("/form-preview");
    }
  }
};
</script>

<style lang="scss">
.edu-footer {
  position: fixed;
  bottom: 0;
  left: 180px;
  right: 0;
  padding: 0 20px;
  z-index: 1002;
  .el-card__body {
    background: #eee;
    display: flex;
    justify-content: flex-end;
  }
  .el-card {
    border-radius: 0;
  }
}
</style>
