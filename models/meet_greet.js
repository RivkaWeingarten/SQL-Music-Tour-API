'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class meet_greet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  // meet_greet.init({
  //   meet_greet_id: DataTypes.INTEGER,
  //   event_id: DataTypes.INTEGER,
  //   band_id: DataTypes.INTEGER,
  //   meet_start_time: DataTypes.DATE,
  //   meet_end_time: DataTypes.DATE
  // }, {
  //   sequelize,
  //   modelName: 'meet_greet',
  // });


  meet_greet.init({
    meet_greet_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
   
    event_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    band_id: {
      type: DataTypes.INTEGER,
      allowNull: false
  },
    meet_start_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    meet_end_time: {
        type: DataTypes.DATE,
        allowNull: false
    }
  }, {
    sequelize,
    modelName: 'meet_greet',
    tableName: 'meet_greets',
    timestamps: false
  })

  return meet_greet;
};