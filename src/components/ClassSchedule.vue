<script setup>
const props = defineProps(["classScheduleData"]);
const scheduleRef = ref(null);
const scheduleBoxStyle = reactive({ height: '400px' })

// 获取课表固定课时
const severalListOneDay = reactive(props.classScheduleData.nowSchedule.value.data.severalListOneDay)
// 获取课表
const dayList = props.classScheduleData.nowSchedule.value.data.dayList
// 每天的宽度
const widthOneDay = ref(null);
// 两天之间的margin
const marginBetweenDay = ref(null);
// 课时列后面的margin
const marginAfterSeveral = ref(null);

onMounted(() => {
  componentReSize();
  window.addEventListener('resize', componentReSize);
});
onUnmounted(() => {
  window.removeEventListener('resize', componentReSize);
});
/**
 * 组件大小变化事件
 */
function componentReSize () {
  reHeight();
  reWidthOneDay();
}
/**
 * 设置组件高度
 */
function reHeight () {
  let height = scheduleRef.value.offsetHeight
  height = (height < 400 ? 400 : height) + 'px'
  scheduleBoxStyle.height = height;
}
/**
 * 获取每天宽度
 */
function reWidthOneDay () {
  let widthOneDayValue = parseInt(scheduleRef.value.offsetWidth / (dayList.length + 1))
  let extraWidth = scheduleRef.value.offsetWidth % (dayList.length + 1)
  let marginBetweenDayValue = parseInt(extraWidth / dayList.length);
  let finalExtraMarginValue = extraWidth % dayList.length
  widthOneDay.value = widthOneDayValue;
  marginBetweenDay.value = marginBetweenDayValue;
  marginAfterSeveral.value = marginBetweenDayValue + finalExtraMarginValue;
}
</script>

<template>
  <div class="scheduleBox" ref="scheduleRef">
    <div :style='scheduleBoxStyle' class="dynamicScheduleBox">
      <div :style='{width: widthOneDay + "px", marginRight: marginAfterSeveral + "px"}' class="bg-several several-box">
        <div v-for="(several, i) in severalListOneDay" :key="i">
          <p class="large center">{{several.severalName}}</p>
          <p class="gray small center">
            {{`${several.severalStart.hours}:${several.severalStart.minutes}-${several.severalEnd.hours}:${several.severalEnd.minutes}`}}
          </p>
        </div>
      </div>
      <div v-for="(day, i) in dayList" :key="i"
        :style='{width: widthOneDay + "px", marginRight: (i == dayList.length - 1 ? 0 : marginBetweenDay) + "px"}'>
        <div>{{day.dayName}}</div>
        <div v-for="(oneClass, ci) in classList" :key="ci">
          {{className}}
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.scheduleBox {
  height: 100%;
  width: 100%;
}
.dynamicScheduleBox {
  border-radius: 25px;
  background: rgb(246, 248, 250);
}
.several-box {
  border-radius: 25px 0 0 25px;
  height: 100%;
}
</style>
