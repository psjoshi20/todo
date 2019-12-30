require('dotenv').config()

module.exports = {
  development: {
    database: 'todos',
    host: process.env.DB_SERVER ||  'localhost',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD,
  },
  test: {
    database: 'todos',
    host: process.env.DB_SERVER ||  'localhost',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD,
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    ssl: true,
    dialectOptions: {
      ssl: true
    }
  }
}
