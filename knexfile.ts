import path from 'path';

module.exports = {
  client: 'sqlite3',
  connection: {
    fs: false,
    filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite'),
  },
  migrations: {
    fs: false,
    directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
  },  
  seeds: {
    fs: false,
    directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
  },
  useNullAsDefault: true,
};
