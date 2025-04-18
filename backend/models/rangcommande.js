import Sequelize from 'sequelize';
const rangcommande = function (sequelize, DataTypes) {
  return sequelize.define('rangcommande', {
    idcommande: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'commande',
        key: 'idcommande'
      }
    },
    isbn: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'livre',
        key: 'isbn'
      }
    },
    rang: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'rangcommande',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "rangcommande_pkey",
        unique: true,
        fields: [
          { name: "idcommande" },
          { name: "isbn" },
        ]
      },
    ]
  });
};
export default rangcommande;