<template>
  <div>
    <h1>{{items.title}}</h1>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">
        <i class="mdi mdi-home-outline"></i>
      </el-breadcrumb-item>
      <el-breadcrumb-item v-for="(b,i) in bs" :key="i">{{b}}</el-breadcrumb-item>

    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Object
    }
  },
  computed: {
    bs() {
      return this.items.bread.split("/");
    }
  }
};
</script>

<style>
</style>
