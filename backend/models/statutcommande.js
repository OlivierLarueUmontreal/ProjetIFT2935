const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('statutcommande', {
    statutcommande: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'statutcommande',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "statutcommande_pkey",
        unique: true,
        fields: [
          { name: "statutcommande" },
        ]
      },
    ]
  });
};
