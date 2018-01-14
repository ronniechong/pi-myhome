<template lang="pug">
 .container
  .temp
    .current
      | {{temp.current}} &#8451;
    .minmax
      .max
        span Max
        | {{temp.max}} &#8451;
      .min
        span Min
        | {{temp.min}} &#8451;
  .visual
    .icon
      i(:class="weather.icon")
    .description(v-text="weather.text")
  .util
    .text
      | Last update: {{last_update}}
    mu-icon-button(icon="refresh" v-on:click="refresh" v-bind:class="{ isLoading: loading }")
</template>

<script>
import axios from 'axios';
import moment from 'moment';
import icons from './icons';

export default {
  name: 'weather',
  data() {
    return {
      temp: {
        current: '-',
        min: '-',
        max: '-',
      },
      weather: {
        text: '-',
        icon: '-',
      },
      name: '',
      last_update: '',
      loading: false,
    };
  },
  mounted() {
    this.updateWeather();
  },
  methods: {
    updateWeather() {
      const cityId = 2158177;
      axios
        .get(`http://localhost:1337/api/v1/weather/current/${cityId}`)
        .then((response) => {
          const { data } = response;
          this.temp = {
            current: data.main.temp,
            min: data.main.temp_min,
            max: data.main.temp_max,
          };
          this.weather = {
            text: data.weather[0].description,
            icon: this.getIcon(data.weather[0].id),
          };
          this.name = data.name;
          this.last_update = moment.unix(data.dt).format('Do MMMM YYYY h:mm:ss a');
          this.loading = false;
        })
        .catch((error) => {
          this.loading = false;
          throw new Error('Error getting weather', error);
        });
    },
    getIcon(code) {
      const prefix = 'wi wi-';
      let icon = icons[code].icon;

      // If we are not in the ranges mentioned above, add a day/night prefix.
      if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
        icon = `day-${icon}`;
      }
      return prefix + icon;
    },
    refresh() {
      this.updateWeather();
      this.loading = true;
    },
  },
};
</script>

<style lang="scss" scoped>
  @keyframes anim-refresh {
    0%   { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .isLoading {
    animation: anim-refresh 0.75s infinite ease-out;
  }
</style>
