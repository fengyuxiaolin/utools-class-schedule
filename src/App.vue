<script setup>
import ClassSchedule from './components/ClassSchedule.vue'
const { proxy } = getCurrentInstance();

const classScheduleData = {}
</script>

<template>
  <ClassSchedule :classScheduleData='classScheduleData' />
</template>

<style>
</style>
