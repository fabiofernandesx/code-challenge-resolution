const sqliteDb = {
  name: 'sqliteDb',
  type: 'sqlite',
  database: './data/codeChallenge.db3',
  synchronize: true,
  logging: false,
  entities: ['src/Infrastructure/dbSchemas/*.ts'],
};
const inMemoryDb = {
  name: 'inMemoryDb',
  type: 'sqlite',
  database: ':memory:',
  dropSchema: true,
  synchronize: true,
  logging: false,
  entities: ['src/Infrastructure/dbSchemas/*.ts'],
};
module.exports = [sqliteDb, inMemoryDb];
