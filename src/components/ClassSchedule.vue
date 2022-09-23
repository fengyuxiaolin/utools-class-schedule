<script setup>
import Schedule from './common/class/Schedule'
const schedule = new Schedule({}).initSchedule()
</script>

<template>
  <div class="scheduleBox">
    {{schedule}}
  </div>
</template>

<style scoped>
.scheduleBox {
  height: 100%;
  width: 100%;
  border-radius: 25px;
  background: rgb(246, 248, 250);
}
</style>
