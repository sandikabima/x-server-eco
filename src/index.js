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
        res.status(200).json({message :'berhasil'})
      } catch (error) {
        res.status(404).json({message :'gagal'})
      }
})


app.listen(port, () => {
    console.log('Server listening in port', port);
})