const envFile = require('../.env');
const dotEnv = require('dotenv').load(envFile);
const Normalize = require('../normalize-edu/norm/normalize').Normalize;
const models = require('./models');

const options = {
  port: process.env.PORT,
  cluster: true,
  seedDir: '../seed',
  routePrefix: `/api/v1`,
  environment: process.env.NODE_ENV || 'development',
  dbType: 'postgres',
  dbName: process.env.DB_NAME,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASS,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  corsWhitelist: [process.env.CLIENT_URL],
  // debug: true
};

const n = new Normalize(options, models);

n.ready(async (norm: any) => {

  const mKeys = Object.keys(models) || [];
  const promises = mKeys && mKeys.length > 0 ? mKeys.map((key: any, index: number) => {
    const m = new models[key](norm);
    const params = [...m.model];
    return norm.importModel(key, params[0], params[1] != null ? params[1] : 'N/A', params[2] != null && params[2].length > 0 ? params[2] : []);
  }) : [];
  await Promise.all(promises);
});
