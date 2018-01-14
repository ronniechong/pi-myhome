<template lang="pug">
  .grid-list
    .grid-item(v-for="tile, index in list" :key="index")
      router-link(:to="{ name: tile.route }", class="link")
        mu-icon(:value="tile.icon" :size="48")
        .title {{tile.title}}
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      list: [
        {
          title: 'Time',
          icon: 'access_time',
          route: 'Time',
        },
        {
          title: 'Time',
          icon: 'access_time',
          route: 'Time',
        },
        {
          title: 'Time',
          icon: 'access_time',
          route: 'Time',
        },
        {
          title: 'Time',
          icon: 'access_time',
          route: 'Time',
        },
        {
          title: 'Time',
          icon: 'access_time',
          route: 'Time',
        },
        {
          title: 'Time',
          icon: 'access_time',
          route: 'Time',
        },
        {
          title: 'Time',
          icon: 'access_time',
          route: 'Time',
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .grid-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
  }

  .grid-item {
    margin: 1em;
    border: 1px solid red;
    text-align:center;
    width: calc(20% - 2em);
  }

  .link {
    display: block;
  }

  .title {
    display: block;
  }

</style>
