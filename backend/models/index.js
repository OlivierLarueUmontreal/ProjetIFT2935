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

let sequelize;
sequelize = new Sequelize(config.database, config.username, config.password, config);

const db = InitModels(sequelize);

export { sequelize };
export default db;