<script setup>
const props = defineProps(["classScheduleData"]);

</script>

<template>
  <div class="scheduleBox">
    {{classScheduleData.nowSchedule.value?.data ?? classScheduleData.nowSchedule.data}}
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
