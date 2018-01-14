<template lang="pug">
  .container
    .item
      .time(v-text="time")
      .ampm(v-text="ampm")
      .date(v-text="date")
    .item
      Weather

</template>
<script>
import moment from 'moment';
import Weather from '../common/Weather/Weather';

export default {
  name: 'Time',
  components: {
    Weather,
  },
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
    },
  },
};
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
  }
  .item {
    width: 50%;
  }
</style>
