'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
console.log(config.use_env_variable);

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    if (config.use_env_variable) {
      console.log("process.env[config.use_env_variable] :"+ process.env[config.use_env_variable]);
      sequelize = new Sequelize(process.env[config.use_env_variable]);
    } else {
      console.log("config: "+JSON.stringify(config));
      try {
        sequelize = new Sequelize(config.database, config.username, config.password, config);
      } catch(error) {console.log(error)}
      console.log('Sequelize obj: '+sequelize);
    }
    // console.log('sequelize[\'import\']:: '+ sequelize['import'])
    // console.log(path.join(__dirname+'\', file))
    let model = sequelize['import'](path.join(__dirname, file));

    console.log('__dirname: '+__dirname);
    console.log('file: '+file);
    console.log('db obj: '+db);
    console.log('model obj: '+model);
    db[model.name] = model;


    db.sequelize = sequelize;
    db.Sequelize = Sequelize;

  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;
