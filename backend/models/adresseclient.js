const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('adresseclient', {
    idclient: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'client',
        key: 'idclient'
      }
    },
    idadresse: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'adresse',
        key: 'idadresse'
      }
    }
  }, {
    sequelize,
    tableName: 'adresseclient',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "adresseclient_pkey",
        unique: true,
        fields: [
          { name: "idclient" },
          { name: "idadresse" },
        ]
      },
    ]
  });
};
