# Chatty App

Chatty App is a chat web SPA (Single Page Application), like Slack or WhatsApp, built with ReactJS, Babel and WebPack that communicates with a server via WebSockets (using Node package ws on the server-side, and native WebSocket on the client side) for multi-user real-time updates.

## Final Product

<p align="center">
  <img src="https://github.com/louiephilip22/Chatty-App/blob/master/images/Screen%20Shot%202018-03-23%20at%2011.30.07%20AM.png"/>
</p>

## Dependencies

- babel-core
- babel-loader
- babel-preset-es2015
- babel-preset-react
- css-loader
- node-sass
- sass-loader
- sockjs-client
- style-loader
- webpack
- webpack-dev-server
- react
- react-dom

- WebSockets server
  - express
  - ws
  - uuid

## Getting Started

Install the dependencies and start the server.

``` cli
npm install
npm start
open http://localhost:3000
```

## Instructions

Run Websocket Server in the folder chatty_server

``` cli
npm install
npm start
```
