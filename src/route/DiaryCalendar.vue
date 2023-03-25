<template>
  <div class="DiaryCalendar">
    Calendar
    <VCalendar />
  </div>
</template>

<script>
import { ref } from 'vue';
import { VCalendar } from 'v-calendar';
import 'v-calendar/style.css';

const dates = ref(new Date());

export default {
  components: {
    VCalendar
  },
  setup() {
    return { dates };
  }
};
</script>

<style scoped>
.DiaryCalendar {
  width: 100%;
  height: 100%;
  }
</style>
