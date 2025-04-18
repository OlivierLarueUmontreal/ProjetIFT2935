'use strict';

import configFile from '../config/config.js';
import fs from 'fs';
import Sequelize from 'sequelize';
import process from 'process';
import path from 'path';
import { fileURLToPath } from 'url';
import InitModels from './init-models.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = configFile[env];
// const db = {};

let sequelize;
sequelize = new Sequelize(config.database, config.username, config.password, config);

// const files = fs.readdirSync(__dirname)
//   .filter(file => (
//     file.indexOf('.') !== 0 &&
//     file !== basename &&
//     file.slice(-3) === '.js' &&
//     file.indexOf('.test.js') === -1
//   ));

// for (const file of files) {
//   const { default: modelFn } = await import(path.join(__dirname, file));
//   const model = modelFn(sequelize, Sequelize.DataTypes);
//   db[model.name] = model;
// }

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.Sequelize = Sequelize;

const db = InitModels(sequelize);

export { sequelize };
export default db;