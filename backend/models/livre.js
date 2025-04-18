const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('livre', {
    isbn: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    titre: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    genre: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    auteur: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nbexemplaire: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'livre',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "livre_pkey",
        unique: true,
        fields: [
          { name: "isbn" },
        ]
      },
    ]
  });
};
