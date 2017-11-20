var socket = io();

socket.on('connect', function () {
    console.log('Connect to server');

    socket.emit('createMessage', {
        from: 'Paola',
        text: 'Hey'
    });
});

socket.on('disconnect', function () {
    console.log('Disconnect from server');
});

socket.on('newMessage', function (message) {
    console.log('New Message', message);
});