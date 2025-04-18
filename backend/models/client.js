const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('client', {
    idclient: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    permemprunt: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    nom: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'client',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "client_pkey",
        unique: true,
        fields: [
          { name: "idclient" },
        ]
      },
    ]
  });
};
