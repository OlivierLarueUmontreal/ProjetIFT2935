const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('commande', {
    idcommande: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    isbn: {
      type: DataTypes.STRING(20),
      allowNull: true,
      references: {
        model: 'livre',
        key: 'isbn'
      }
    },
    idclient: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'client',
        key: 'idclient'
      }
    },
    statutcommande: {
      type: DataTypes.STRING(50),
      allowNull: true,
      references: {
        model: 'statutcommande',
        key: 'statutcommande'
      }
    },
    datecommande: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    datedispo: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    datelimiteretrait: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'commande',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "commande_pkey",
        unique: true,
        fields: [
          { name: "idcommande" },
        ]
      },
    ]
  });
};
