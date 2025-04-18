import Sequelize from 'sequelize';

const emprunte = function (sequelize, DataTypes) {
  return sequelize.define('emprunte', {
    idemprunt: {
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
    statutemprunt: {
      type: DataTypes.STRING(50),
      allowNull: true,
      references: {
        model: 'statutemprunt',
        key: 'statutemprunt'
      }
    },
    dateemprunt: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    datelimiteretour: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'emprunte',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "emprunte_pkey",
        unique: true,
        fields: [
          { name: "idemprunt" },
        ]
      },
    ]
  });
};

export default emprunte;