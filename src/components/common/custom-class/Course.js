export const Course = class Course {
  constructor({
    courseName,
    teacherName,
    courseRemark,
    classroom,
    color,
    isRest,
  }) {
    this.courseName = courseName
    this.teacherName = teacherName
    this.courseRemark = courseRemark
    this.classroom = classroom
    this.color = color
    this.isRest = isRest
  }
}
