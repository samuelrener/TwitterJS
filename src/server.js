const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());

const server = require('http').Server(app);
const io = require('socket.io')(server);
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    } 
    else {
      next();
    }
};

app.use(allowCrossDomain);
io.on('connection', socket =>{
    socket.on('connectRoom', box =>{
        socket.join(box);
    })
});

mongoose.connect('mongodb+srv://admin:21601496@cluster0-kdrqy.mongodb.net/omnistack6?retryWrites=true', {
    useNewUrlParser: true
});

app.use((req, res, next) =>{
    req.io = io;

    return next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/files', express.static(path.resolve(__dirname, '..', 'temp')));

app.use(require('./routes'));
server.listen(process.env.PORT || 4945);