import Sequelize from 'sequelize';
const statutemprunt = function (sequelize, DataTypes) {
  return sequelize.define('statutemprunt', {
    statutemprunt: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'statutemprunt',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "statutemprunt_pkey",
        unique: true,
        fields: [
          { name: "statutemprunt" },
        ]
      },
    ]
  });
};
export default statutemprunt;