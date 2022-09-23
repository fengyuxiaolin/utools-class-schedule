/**
 * 小时分钟时间类
 *
 * @param {number | string} hours 小时
 * @param {number | string} minutes 分钟
 */
export const HourMinutes = class HourMinutes {
  constructor(hours, minutes) {
    this.hours = hours.toString().padStart(2, '0')
    this.minutes = minutes.toString().padStart(2, '0')
  }

  /**
   * 转为'HH-mm' 格式
   * @returns 字符串
   */
  toString() {
    return `${this.hours}:${this.minutes}`
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
}
