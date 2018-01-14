<template lang="pug">
  .container
    .clock
      .time(v-text="time")
      .ampm(v-text="ampm")
      .date(v-text="date")
    .weather
      i(class="wi wi-day-sunny")

</template>
<script>
import moment from 'moment';

/* eslint-disable */
console.log(process.env.OPENWEATHERAPI);
export default {
  name: 'Time',
  data() {
    return {
      time: '',
      ampm: '',
      date: '',
    };
  },
  mounted() {
    setInterval(this.updateDateTime, 1000);
  },
  methods: {
    updateDateTime() {
      this.time = moment().format('h:mm:ss');
      this.ampm = moment().format('a');
      this.date = moment().format('Do MMMM YYYY');
    }
  }
};
</script>
