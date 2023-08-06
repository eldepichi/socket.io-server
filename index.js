const express = require('express');
const path = require('path');
require('dotenv').config();
const app = express();

const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket')

const publicPaht = path.resolve(__dirname, 'public');

app.use(express.static(publicPaht));

server.listen(process.env.PORT, (err) => {
    if (err) throw new Error(err);

    console.log('Servidor corriendo en puerto', 3000);
});