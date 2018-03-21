const express = require('express');
const WebSocket = require('ws');
const uuidV1 = require('uuid/v1');

const SocketServer = WebSocket.Server;

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server =
  express()
  .use(express
  .static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () =>
    console.log(`Listening on port ${PORT}`));

// Create the WebSockets server
const wss = new SocketServer({ server });

// Function to broadcast message
function broadcast(data) {
  for (const client of wss.clients) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  }
}

function broadcastNumConnected(num, type) {
  const msgNumUsers = {
    id: uuidV1(),
    username: 'System',
    type: 'numberUsersConnectedNotification',
    numberUsersConnected: num,
    content: `A user ${type} the channel.`
  };
  broadcast(JSON.stringify(msgNumUsers));
}


wss.on('connection', (ws) => {
  console.log('Client connected');

  broadcastNumConnected(wss.clients.size, 'joined');


  // Get message from client, set UUID and broadcast
  ws.on('message', (message) => {
    const msgObj = JSON.parse(message);
    let newMsg = '';
    switch (msgObj.type) {
      case 'postNotification':
        newMsg = {id: uuidV1(), type: 'incomingNotification', username: 'System', content:  `${msgObj.oldUserName} changed their name to ${msgObj.newUserName}`}
        broadcast(JSON.stringify(newMsg));
        break;
      default:
        newMsg = {id: uuidV1(), type: 'incomingMessage', username: msgObj.username, content:  msgObj.content}
        broadcast(JSON.stringify(newMsg));
      }
  });

  ws.on('error', () => {});
  ws.on('close', () => {
    console.log('Client disconnected');

    broadcastNumConnected(wss.clients.size, 'left');
  });
});

