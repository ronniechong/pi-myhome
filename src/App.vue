<template lang="pug">
  #app
    AppHeader
    .layout
      router-view
  </div>
</template>

<script>
import AppHeader from './components/common/AppHeader/AppHeader';

export default {
  name: 'app',
  components: {
    AppHeader,
  },
};
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic');
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
  @import url('./assets/css/weather-icons.css');
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .layout {
    padding: 1em;
  }
</style>
