/**
 * 小时分钟时间类
 *
 * @param {number | string} hours 小时
 * @param {number | string} minutes 分钟
 */
export const HourMinutes = class HourMinutes {
  constructor(hours, minutes) {
    minutes %= 60
    minutes = minutes < 0 ? 60 + minutes : minutes
    this.minutes = minutes.toString().padStart(2, '0')

    hours %= 24
    hours = minutes < 0 ? hours - 1 : hours
    hours = hours < 0 ? 24 + hours : hours
    this.hours = hours.toString().padStart(2, '0')
  }

  /**
   * 提取对象中的小时分钟字段
   *
   * @param {object} param0 具有hours和minutes属性的对象
   * @returns 小时分钟对象
   */
  static convertHourMinutes({ hours, minutes }) {
    return new HourMinutes(hours, minutes)
  }

  /**
   * 转为 'HH-mm' 格式
   * @returns 字符串
   */
  toString() {
    return `${this.hours}:${this.minutes}`
  }
  
  /**
   * 'HH-mm' 格式转为时分对象
   * @returns 时分对象
   */
  static parseHourMinutes(str) {
    const arr = str.split(':')
    return new HourMinutes(arr[0], arr[1])
  }

  /**
   * 比较this与指定时间先后
   * @param {HourMinutes} hourMinutes 比较的时分
   * @returns
   */
  compareToInOneDay(hourMinutes) {
    if (this.hours === hourMinutes.hours) {
      return this.minutes - hourMinutes.minutes
    } else {
      return this.hours - hourMinutes.hours
    }
  }

  /**
   * 计算 this 到指定时分所需分钟数
   * @param {HourMinutes} hourMinutes 比较的时分
   * @returns
   */
  reachToInOneDay(hourMinutes) {
    return (
      (hourMinutes.hours - this.hours) * 60 + hourMinutes.minutes - this.minutes
    )
  }

  /**
   * 获取增加指定分钟后的时间
   * @param {number | string} minutes 增量
   * @returns 增加后的时间
   */
  addMinutes(minutes) {
    let hoursChange = parseInt(minutes / 60)
    let minutesChange = minutes % 60
    return new HourMinutes(
      parseInt(this.hours) + hoursChange,
      parseInt(this.minutes) + minutesChange
    )
  }
}
