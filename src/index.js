const express = require('express')
const sequelize = require('./utils/conn')
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send('ini di server')
})

app.get('/test', async (req, res) => {
    try {
        await sequelize.authenticate();
        res.send('Connection has been established successfully.');
      } catch (error) {
        res.send('Unable to connect to the database:', error);
      }
})


app.listen(port, () => {
    console.log('Server listening in port', port);
})