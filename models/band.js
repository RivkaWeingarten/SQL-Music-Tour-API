"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Band extends Model {
    static associate({ MeetGreet, SetTime}) {
      // meet and greets
      Band.hasMany(MeetGreet, {
        foreignKey: "band_id",
        as: "meet_greets",
      });

      // set times
      Band.hasMany(SetTime, {
        foreignKey: "band_id",
        as: "set_times",
      });
    }
  }
  //This is what sequelize generated
  //   Band.init({
  //     band_id: DataTypes.INTEGER,
  //     name: DataTypes.STRING,
  //     genre: DataTypes.TEXT,
  //     available_start_time: DataTypes.DATE,
  //     end_time: DataTypes.DATE
  //   }, {
  //     sequelize,
  //     modelName: 'Band',
  //   });
  //This is what was taken from the exercize
  Band.init(
    {
      band_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      genre: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      available_start_time: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      end_time: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Band",
      tableName: "bands",
      timestamps: false,
    }
  );

  return Band;
};
