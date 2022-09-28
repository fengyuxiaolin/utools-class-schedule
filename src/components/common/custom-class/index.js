import * as HourMinutes from './HourMinutes'
import * as Schedule from './Schedule'
import * as Course from './Course'
import * as DbDoc from './DbDoc'
import * as BaseSettings from './BaseSettings'

export default {
  ...HourMinutes,
  ...Schedule,
  ...Course,
  ...DbDoc,
  ...BaseSettings,
}
