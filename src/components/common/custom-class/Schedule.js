import { HourMinutes } from './HourMinutes'
/**
 * 课表类
 * @param {object} param0
 */
export const Schedule = class Schedule {
  constructor({
    scheduleName, // 课程名
    fixedLength, // 固定每节课时长
    fixedRest, // 固定休息时间
    startTime, // 每天开始时间
    endTime, // 每天结束时间
    dayMinutes, // 一天的分钟数
    severalListOneDay, // 一天的课时
    dayList, // 记录每天课程表
  }) {
    this.scheduleName = scheduleName
    this.fixedLength = fixedLength
    this.fixedRest = fixedRest
    this.startTime = startTime
    this.endTime = endTime
    this.dayMinutes = dayMinutes
    this.severalListOneDay = severalListOneDay
    this.dayList = dayList
  }
  static getDefaultSchedule() {
    return new Schedule({}).initSchedule()
  }
  initSchedule() {
    this.scheduleName = ''
    this.fixedLength = 40
    this.fixedRest = 10
    this.startTime = new HourMinutes(8, 0)
    this.endTime = new HourMinutes(17, 0)
    this.dayMinutes = 540
    this.severalListOneDay = [
      {
        severalName: '课时1',
        severalStart: new HourMinutes(8, 0),
        severalEnd: new HourMinutes(8, 40),
      },
    ]
    this.dayList = [
      {
        dayName: '周一',
        dayValue: 1,
        classList: [
          {
            className: '休息',
          },
        ],
      },
      {
        dayName: '周二',
        dayValue: 2,
        classList: [
          {
            className: '休息',
          },
        ],
      },
      {
        dayName: '周三',
        dayValue: 3,
        classList: [
          {
            className: '休息',
          },
        ],
      },
      {
        dayName: '周四',
        classList: [
          {
            className: '休息',
          },
        ],
        dayValue: 4,
      },
      {
        dayName: '周五',
        dayValue: 5,
        classList: [
          {
            className: '休息',
          },
        ],
      },
    ]
    return this
  }
}
