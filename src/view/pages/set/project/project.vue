<template>
    <div class="scrollable only-y">

        <div class="project-create card-base card-shadow--medium bg-white mt-50 p-50">
            <el-tabs class=" mb-20" style="width:50%" type="border-card">
                <el-tab-pane class="my-form" label="中文">
                    <el-form label-position="right" label-width="120px">
                        <el-form-item label="项目名称">
                            <el-input></el-input>
                        </el-form-item>
                        <el-form-item label="描述">
                            <el-input type="textarea"></el-input>
                        </el-form-item>
                        <el-form-item label="招生年级">
                            <el-input></el-input>
                        </el-form-item>
                        <el-form-item label="类型">
                            <el-select class="select-wide" value="" clearable placeholder="请选择">
                                <el-option label="入学" value="admission" />
                                <el-option label="课程" value="course" />
                            </el-select>
                        </el-form-item>
                        <el-form-item label="项目编号前缀">
                            <el-input></el-input>
                        </el-form-item>
                        <el-form-item label="使用流程">
                            <el-select class="select-wide" value="" clearable placeholder="请选择">
                                <el-option label="入学" value="admission" />
                                <el-option label="课程" value="course" />
                            </el-select>
                        </el-form-item>
                        <el-form-item label="限制年龄">
                            <el-col :span="11">
                                <el-date-picker type="date" placeholder="年/月/日" style="width: 100%;"></el-date-picker>
                            </el-col>
                            <el-col class="text-center" :span="2">至</el-col>
                            <el-col :span="11">
                                <el-date-picker type="date" placeholder="年/月/日" style="width: 100%;"></el-date-picker>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="招生年份">
                            <el-input></el-input>

                        </el-form-item>

                        <el-form-item label="项目开放时间">
                            <el-col :span="11">
                                <el-date-picker type="date" placeholder="年/月/日" style="width: 100%;"></el-date-picker>
                            </el-col>
                            <el-col class="text-center" :span="2">至</el-col>
                            <el-col :span="11">
                                <el-date-picker type="date" placeholder="年/月/日" style="width: 100%;"></el-date-picker>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="状态">
                            <el-radio v-model="radio" label="1">开启</el-radio>
                            <el-radio v-model="radio" label="2">关闭</el-radio>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="English">
                    <el-form label-position="right" label-width="120px">
                        <el-form-item label="项目名称">
                            <el-input></el-input>
                        </el-form-item>
                        <el-form-item label="描述">
                            <el-input type="textarea"></el-input>
                        </el-form-item>
                        <el-form-item label="招生年级">
                            <el-input></el-input>
                        </el-form-item>
                        <el-form-item label="类型">
                            <el-select class="select-wide" value="" clearable placeholder="请选择">
                                <el-option label="入学" value="admission" />
                                <el-option label="课程" value="course" />
                            </el-select>
                        </el-form-item>
                        <el-form-item label="项目编号前缀">
                            <el-input></el-input>
                        </el-form-item>
                        <el-form-item label="使用流程">
                            <el-select class="select-wide" value="" clearable placeholder="请选择">
                                <el-option label="入学" value="admission" />
                                <el-option label="课程" value="course" />
                            </el-select>
                        </el-form-item>
                        <el-form-item label="限制年龄">
                            <el-col :span="11">
                                <el-date-picker type="date" placeholder="年/月/日" style="width: 100%;"></el-date-picker>
                            </el-col>
                            <el-col class="text-center" :span="2">至</el-col>
                            <el-col :span="11">
                                <el-date-picker type="date" placeholder="年/月/日" style="width: 100%;"></el-date-picker>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="招生年份">
                            <el-input></el-input>

                        </el-form-item>

                        <el-form-item label="项目开放时间">
                            <el-col :span="11">
                                <el-date-picker type="date" placeholder="年/月/日" style="width: 100%;"></el-date-picker>
                            </el-col>
                            <el-col class="text-center" :span="2">至</el-col>
                            <el-col :span="11">
                                <el-date-picker type="date" placeholder="年/月/日" style="width: 100%;"></el-date-picker>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="状态">
                            <el-radio v-model="radio" label="1">开启</el-radio>
                            <el-radio v-model="radio" label="2">关闭</el-radio>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "1"
    };
  }
};
</script>

<style lang="scss" scoped>
.project-create {
  //   max-width: 700px;
}
</style>
