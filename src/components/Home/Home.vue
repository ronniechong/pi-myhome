<template lang="pug">
  .grid-list

    .grid-item(v-for="tile, index in list" :key="index")
      router-link(:to="{ name: tile.route }", class="link")
        Icon(width="52" height="52" :glyph="tile.icon")
        //- mu-icon(:value="tile.icon" :size="48")
        .title {{tile.title}}
</template>

<script>
import Icon from '../common/Icon/Icon';
import menu from '../../config/menu';
import SVGTimeWeather from '../../assets/svg/time-weather.svg';
import SVGLocate from '../../assets/svg/locate-me.svg';

export default {
  name: 'Home',
  components: {
    Icon,
  },
  data() {
    const list = menu
    .filter(v => v.id !== 'home')
    .map((v) => {
      let icon;
      switch (v.id) {
        case 'time': icon = SVGTimeWeather; break;
        case 'location': icon = SVGLocate; break;
        default: icon = undefined; break;
      }
      return {
        title: v.name,
        route: v.name,
        icon,
      };
    });
    return {
      list,
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
