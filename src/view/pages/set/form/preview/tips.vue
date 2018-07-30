<template>
  <div style="min-height:30px;">

    <div v-html="form.title[language]"></div>
    <div v-html="form.description[language]"></div>
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
  data() {
    return {
      content: ""
    };
  },
  methods: {},
  components: {}
};
</script>

<style>
</style>
