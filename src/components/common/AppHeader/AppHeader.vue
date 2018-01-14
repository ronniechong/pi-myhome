<template lang="pug">
  mu-appbar(:title="header.title")
    mu-icon-button(icon="home" slot="right" to="/" v-if="header.id !== 'home'")
</template>

<script>
export default {
  name: 'appheader',
  computed: {
    header() {
      const { id, title } = this.$route.meta;
      return {
        id,
        title,
      };
    },
  },
};
</script>

<style lang="scss">
</style>
