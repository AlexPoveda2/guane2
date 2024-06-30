const express = require('express');
const { sequelize } = require('./models/index');

const router = require("./routes/router");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);



// Sync the database and start the server
sequelize.sync({ force: false }).then(() => {
    console.log('Database & tables created!');
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
})  
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });