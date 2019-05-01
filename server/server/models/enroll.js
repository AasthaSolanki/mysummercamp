'use strict';

module.exports = (sequelize, DataTypes) => {
  const enroll = sequelize.define('enroll', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    course: DataTypes.STRING
  }, {
    tableName:"enrolls",
    underscore:true
  });
  enroll.associate = function(models) {
      enroll.belongsTo(models.course,{
        as:'courses',
        foreignKey:{
          name:"course_id",
          sourceKey:"id"
        }
      // associations can be defined here
    });
  };
  return enroll;
}
