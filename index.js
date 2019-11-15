var express = require('express');
var socket = require('socket.io');
var Chat = require("./chatSchema");
var connect = require("./dbconnection");

//app setup
var app = express();
var server = app.listen(4000, function(){

    console.log('listening to server on port 4000');

})


//static files
app.use(express.static('public'));

// Socket setup & pass server
var io = socket(server);
io.on('connection', (socket) => {

    console.log('made socket connection', socket.id);

    // Handle chat event
    socket.on('chat', function(data){
    
        io.sockets.emit('chat', data);

        connect.then(db => {
            console.log("connected to the database");

            let chatMessage = new Chat({message: data.message, sender: data.handle});
            chatMessage.save();
        });
    });

    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data)
    })

});