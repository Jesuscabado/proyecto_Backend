import { Sequelize } from "sequelize";

const sequelize = new Sequelize('mitienda', 'root', 'mi-contraseña', {
    host: 'mysql-juegos_mesa',
    port: 3306,
    dialect: 'mysql'
  });
  sequelize.authenticate()
  .then(function(err) {
      console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
      console.log('Unable to connect to the database:', err);
});

export default sequelize;