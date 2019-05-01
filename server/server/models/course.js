'use strict';
module.exports = (sequelize, DataTypes) => {
  const course = sequelize.define('course', {
    // course_id:DataTypes.INTEGER,
    course_name: DataTypes.STRING,
    desc: DataTypes.TEXT,
    duration: DataTypes.INTEGER,
    days: DataTypes.INTEGER,
    coach: DataTypes.STRING,
    fees: DataTypes.STRING,
    timeslot: DataTypes.INTEGER,
    course: DataTypes.STRING
  }, {
    tableName:"course",
    underscore:true
  });
  course.associate = function(models) {
    course.hasMany(models.enroll,{
      as:'enrolls',
      foreignKey:{
        name:"course_id",
        targetKey:"id"
      }
    });
  };
  return course;
};
