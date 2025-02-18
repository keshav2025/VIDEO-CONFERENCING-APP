const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    
    socket.on('offer', (data) => {
        console.log('Offer received:', data);
        socket.broadcast.emit('offer', data);
    });

    
    socket.on('answer', (data) => {
        console.log('Answer received:', data);
        socket.broadcast.emit('answer', data);
    });

   
    socket.on('ice-candidate', (data) => {
        console.log('ICE Candidate:', data);
        socket.broadcast.emit('ice-candidate', data);
    });

   
    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

server.listen(5001, () => {
    console.log('Server is running on port 5001');
});
