import { DataTypes } from "sequelize";
import adresseModel from "./adresse.js";
import adresseclientModel from "./adresseclient.js";
import clientModel from "./client.js";
import commandeModel from "./commande.js";
import emprunteModel from "./emprunte.js";
import livreModel from "./livre.js";
import rangcommandeModel from "./rangcommande.js";
import statutcommandeModel from "./statutcommande.js";
import statutempruntModel from "./statutemprunt.js";

function initModels(sequelize) {
  const adresse = adresseModel(sequelize, DataTypes);
  const adresseclient = adresseclientModel(sequelize, DataTypes);
  const client = clientModel(sequelize, DataTypes);
  const commande = commandeModel(sequelize, DataTypes);
  const emprunte = emprunteModel(sequelize, DataTypes);
  const livre = livreModel(sequelize, DataTypes);
  const rangcommande = rangcommandeModel(sequelize, DataTypes);
  const statutcommande = statutcommandeModel(sequelize, DataTypes);
  const statutemprunt = statutempruntModel(sequelize, DataTypes);

  adresse.belongsToMany(client, { as: 'idclient_clients', through: adresseclient, foreignKey: "idadresse", otherKey: "idclient" });
  client.belongsToMany(adresse, { as: 'idadresse_adresses', through: adresseclient, foreignKey: "idclient", otherKey: "idadresse" });
  commande.belongsToMany(livre, { as: 'isbn_livres', through: rangcommande, foreignKey: "idcommande", otherKey: "isbn" });
  livre.belongsToMany(commande, { as: 'idcommande_commandes', through: rangcommande, foreignKey: "isbn", otherKey: "idcommande" });
  adresseclient.belongsTo(adresse, { as: "idadresse_adresse", foreignKey: "idadresse" });
  adresse.hasMany(adresseclient, { as: "adresseclients", foreignKey: "idadresse" });
  adresseclient.belongsTo(client, { as: "idclient_client", foreignKey: "idclient" });
  client.hasMany(adresseclient, { as: "adresseclients", foreignKey: "idclient" });
  commande.belongsTo(client, { as: "idclient_client", foreignKey: "idclient" });
  client.hasMany(commande, { as: "commandes", foreignKey: "idclient" });
  emprunte.belongsTo(client, { as: "idclient_client", foreignKey: "idclient" });
  client.hasMany(emprunte, { as: "empruntes", foreignKey: "idclient" });
  rangcommande.belongsTo(commande, { as: "idcommande_commande", foreignKey: "idcommande" });
  commande.hasMany(rangcommande, { as: "rangcommandes", foreignKey: "idcommande" });
  commande.belongsTo(livre, { as: "isbn_livre", foreignKey: "isbn" });
  livre.hasMany(commande, { as: "commandes", foreignKey: "isbn" });
  emprunte.belongsTo(livre, { as: "isbn_livre", foreignKey: "isbn" });
  livre.hasMany(emprunte, { as: "empruntes", foreignKey: "isbn" });
  rangcommande.belongsTo(livre, { as: "isbn_livre", foreignKey: "isbn" });
  livre.hasMany(rangcommande, { as: "rangcommandes", foreignKey: "isbn" });
  commande.belongsTo(statutcommande, { as: "statutcommande_statutcommande", foreignKey: "statutcommande" });
  statutcommande.hasMany(commande, { as: "commandes", foreignKey: "statutcommande" });
  emprunte.belongsTo(statutemprunt, { as: "statutemprunt_statutemprunt", foreignKey: "statutemprunt" });
  statutemprunt.hasMany(emprunte, { as: "empruntes", foreignKey: "statutemprunt" });

  return {
    adresse,
    adresseclient,
    client,
    commande,
    emprunte,
    livre,
    rangcommande,
    statutcommande,
    statutemprunt,
  };
}
export default initModels;
