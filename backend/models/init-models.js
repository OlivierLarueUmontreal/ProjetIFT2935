var DataTypes = require("sequelize").DataTypes;
var _adresse = require("./adresse");
var _adresseclient = require("./adresseclient");
var _client = require("./client");
var _commande = require("./commande");
var _emprunte = require("./emprunte");
var _livre = require("./livre");
var _rangcommande = require("./rangcommande");
var _statutcommande = require("./statutcommande");
var _statutemprunt = require("./statutemprunt");

function initModels(sequelize) {
  var adresse = _adresse(sequelize, DataTypes);
  var adresseclient = _adresseclient(sequelize, DataTypes);
  var client = _client(sequelize, DataTypes);
  var commande = _commande(sequelize, DataTypes);
  var emprunte = _emprunte(sequelize, DataTypes);
  var livre = _livre(sequelize, DataTypes);
  var rangcommande = _rangcommande(sequelize, DataTypes);
  var statutcommande = _statutcommande(sequelize, DataTypes);
  var statutemprunt = _statutemprunt(sequelize, DataTypes);

  adresse.belongsToMany(client, { as: 'idclient_clients', through: adresseclient, foreignKey: "idadresse", otherKey: "idclient" });
  client.belongsToMany(adresse, { as: 'idadresse_adresses', through: adresseclient, foreignKey: "idclient", otherKey: "idadresse" });
  commande.belongsToMany(livre, { as: 'isbn_livres', through: rangcommande, foreignKey: "idcommande", otherKey: "isbn" });
  livre.belongsToMany(commande, { as: 'idcommande_commandes', through: rangcommande, foreignKey: "isbn", otherKey: "idcommande" });
  adresseclient.belongsTo(adresse, { as: "idadresse_adresse", foreignKey: "idadresse"});
  adresse.hasMany(adresseclient, { as: "adresseclients", foreignKey: "idadresse"});
  adresseclient.belongsTo(client, { as: "idclient_client", foreignKey: "idclient"});
  client.hasMany(adresseclient, { as: "adresseclients", foreignKey: "idclient"});
  commande.belongsTo(client, { as: "idclient_client", foreignKey: "idclient"});
  client.hasMany(commande, { as: "commandes", foreignKey: "idclient"});
  emprunte.belongsTo(client, { as: "idclient_client", foreignKey: "idclient"});
  client.hasMany(emprunte, { as: "empruntes", foreignKey: "idclient"});
  rangcommande.belongsTo(commande, { as: "idcommande_commande", foreignKey: "idcommande"});
  commande.hasMany(rangcommande, { as: "rangcommandes", foreignKey: "idcommande"});
  commande.belongsTo(livre, { as: "isbn_livre", foreignKey: "isbn"});
  livre.hasMany(commande, { as: "commandes", foreignKey: "isbn"});
  emprunte.belongsTo(livre, { as: "isbn_livre", foreignKey: "isbn"});
  livre.hasMany(emprunte, { as: "empruntes", foreignKey: "isbn"});
  rangcommande.belongsTo(livre, { as: "isbn_livre", foreignKey: "isbn"});
  livre.hasMany(rangcommande, { as: "rangcommandes", foreignKey: "isbn"});
  commande.belongsTo(statutcommande, { as: "statutcommande_statutcommande", foreignKey: "statutcommande"});
  statutcommande.hasMany(commande, { as: "commandes", foreignKey: "statutcommande"});
  emprunte.belongsTo(statutemprunt, { as: "statutemprunt_statutemprunt", foreignKey: "statutemprunt"});
  statutemprunt.hasMany(emprunte, { as: "empruntes", foreignKey: "statutemprunt"});

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
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
