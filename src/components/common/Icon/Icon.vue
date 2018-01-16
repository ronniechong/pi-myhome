<template lang="pug">
  svg(:class="className" :width="width" :height="height" :viewBox="glyph.viewBox")
    use(:xlink:href="'#'+glyph.id")
</template>
<script>
export default {
  name: 'Icon',
  props: ['className', 'glyph', 'width', 'height'],
};
</script>

<style lang="scss" scoped>
  .icon {
    display: inline-block;
  }
</style>
