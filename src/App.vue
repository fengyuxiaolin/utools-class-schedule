<script setup>
import ClassSchedule from './components/ClassSchedule.vue'
const { proxy } = getCurrentInstance();

const classScheduleData = {
  dbSettings: ref({}) // 数据库基本设置
};

console.log('abc: ', 'abc');

</script>

<template>
  <ClassSchedule :classScheduleData='classScheduleData' />
</template>

<style>
</style>
