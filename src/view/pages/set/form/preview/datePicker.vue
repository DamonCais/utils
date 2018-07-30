<template>
  <div>
    <el-form label-position="top" label-width="120px" class="dynamic">
      <el-form-item :label="form.title[language]||'缺少标题'" :required="form.required">
        <el-date-picker :default-value="form.limitTime?form.limitTime[0]:''" :format="form.inputType" v-model="date" type="date" :picker-options="form.limitType?options[form.limitType]:''" placeholder="选择日期">
        </el-date-picker>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    form: {
      type: Object
    },
    language: {
      type: String
    }
  },
  mounted() {},
  data() {
    return {
      date: "",
      options: {
        pickerBefore: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          }
        },
        pickerFuture: {
          disabledDate(time) {
            return time.getTime() < Date.now();
          }
        },
        pickerLimit: {
          disabledDate(time) {
            if (this.form.limitTime) {
              let val = this.form.limitTime;
              return time.getTime() > val[1] || time.getTime() < val[0];
            } else {
              return false;
            }
          }
        },
        pickerUnlimit: {
          disabledDate(time) {
            return false;
          }
        }
      }
    };
  },
  watch: {
    "form.limitTime": function(val) {
      if (!val) {
        this.options.pickerLimit.disabledDate = function(time) {
          return false;
        };
        return;
      }
      this.options.pickerLimit.disabledDate = function(time) {
        return time.getTime() > val[1] || time.getTime() < val[0];
      };
    }
  }
};
</script>

<style lang="scss">
</style>

