<script setup>
const { proxy } = getCurrentInstance();

// app 数据
const appData = {
  dbSettings: ref({}), // 数据库基本设置
  nowSchedule: ref({}) // 当前展示课表
}

// 当前展示课表数据
const classScheduleData = {
  dbSettings: appData.dbSettings,
  nowSchedule: appData.nowSchedule
};

// 获取当前数据库配置
const dbSettings = proxy.$api.getApi(proxy.$prefix.SETTINGS)
// 如果没有配置则初始化
if (dbSettings == null) {
  initDbSettings();
} else {
  appData.dbSettings.value = dbSettings;
  // 如果已有配置则获取对应的课表
  appData.nowSchedule.value = proxy.$api.getApi(dbSettings.data.nowScheduleId);
}

/**
 * 初始化数据库配置
 */
function initDbSettings () {
  // 尝试获取所有课表
  const allSchedule = proxy.$api.allDocsApi(proxy.$prefix.SCHEDULE)
  if (allSchedule?.length > 0) {
    // 如果已有课表，则将课表设为当前课表
    appData.nowSchedule.value = allSchedule[0];
  } else {
    // 当前没有课表时，创建一张基础课表
    createBasicSchedule();
  }

  // 创建初始配置
  const initialSettings = new proxy.$customClass.BaseSettings({ nowScheduleId: appData.nowSchedule.value._id });
  const dbSettings = new proxy.$customClass.DbDoc({ _id: proxy.$prefix.SETTINGS, data: initialSettings });
  // 保存至数据库
  const postRes = proxy.$api.saveApi(dbSettings);
  // 设置为当前配置
  dbSettings._id = postRes.id;
  dbSettings._rev = postRes.rev;
  appData.dbSettings.value = dbSettings;
}

// 当前没有课表时，创建一张基础课表
function createBasicSchedule () {
  // 创建一张默认课表
  const defaultSchedule = proxy.$customClass.Schedule.getDefaultSchedule();
  // 将默认课表保存到数据库
  const dbSchedule = new proxy.$customClass.DbDoc({ data: defaultSchedule });
  const postRes = proxy.$api.postApi({ prefix: proxy.$prefix.SCHEDULE, ...dbSchedule })
  // 设置为当前课表
  dbSchedule._id = postRes.id;
  dbSchedule._rev = postRes.rev;
  appData.nowSchedule.value = dbSchedule;
}
</script>

<template>
  <ClassSchedule :classScheduleData='classScheduleData' />
</template>

<style>
</style>
