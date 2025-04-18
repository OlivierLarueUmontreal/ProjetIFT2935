import Sequelize from 'sequelize';

const adresse = function (sequelize, DataTypes) {
  return sequelize.define('adresse', {
    idadresse: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    rue: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ville: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    code: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    pays: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'adresse',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "adresse_pkey",
        unique: true,
        fields: [
          { name: "idadresse" },
        ]
      },
    ]
  });
};

export default adresse;