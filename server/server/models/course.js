'use strict';
module.exports = (sequelize, DataTypes) => {
  const course = sequelize.define('course', {
    course_name: DataTypes.STRING,
    desc: DataTypes.TEXT,
    duration: DataTypes.INTEGER,
    days: DataTypes.INTEGER,
    coach: DataTypes.STRING,
    fees: DataTypes.STRING,
    timeslot: DataTypes.INTEGER
  }, {
    tableName:"course",
    underscore:true
  });
  course.associate = function(models) {
    course.belongsTo(models.enroll,{
      as:'enroll',
      foreignKey:{
        name:"course_id",
        targetKey:"id"
      }
    });
  };
  return course;
};
