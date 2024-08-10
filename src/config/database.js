module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5435,
  username: 'postgres',
  password: 'postgres',
  database: 'task-control',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};