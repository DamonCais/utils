<template>
  <div>
    <my-form :form="items.forms" />
  </div>
</template>

<script>
import myForm from "../myForm";
export default {
  components: {
    myForm
  },
  props: {
    items: {
      type: Object
    }
  }
};
</script>

<style>
</style>
