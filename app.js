const { sequelize } = require('./models/index');


sequelize.sync({ force: false }).then(() => {
    console.log('Database & tables created!');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });