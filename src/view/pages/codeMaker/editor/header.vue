<template>
    <div>
        <span>输入title:</span>
        <el-input v-model="items.title"></el-input>
        <span>输入breadcrumb: 使用/分隔</span>
        <el-input v-model="items.bread"></el-input>
    </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Object
    }
  }
};
</script>

<style>
</style>
