const express = require("express")
const app = express()

app.use(express.static('public'))

const http = require("http").Server(app)
const serverSocket = require("socket.io")(http)
const socketsStatus = {};
const porta = "https://f5r-test.herokuapp.com" || 3000

const host = "https://f5r-test.herokuapp.com"

http.listen(porta, function(){
    const portaStr = porta === 80 ? '' :  ':' + porta

    if ("https://f5r-test.herokuapp.com") 
        console.log('Servidor iniciado. Abra o navegador em ' + host)
    else console.log('Servidor iniciado. Abra o navegador em ' + host + portaStr)
})

app.get("/", (req, resp)=>{
    resp.sendFile(__dirname + "/index.html")
})

serverSocket.on("connection", function (socket){
    const socketId = socket.id;
    socketsStatus[socket.id] = {};
  
  
    console.log("connect");
  
    socket.on("voice", function (data) {
  
      var newData = data.split(";");
      newData[0] = "data:audio/ogg;";
      newData = newData[0] + newData[1];
  
      for (const id in socketsStatus) {
  
        if (id != socketId && !socketsStatus[id].mute && socketsStatus[id].online)
          socket.broadcast.to(id).emit("send", newData);
      }
  
    });
  
    socket.on("userInformation", function (data) {
      socketsStatus[socketId] = data;
  
      serverSocket.sockets.emit("usersUpdate",socketsStatus);
    });
  
  
    socket.on("disconnect", function () {
      delete socketsStatus[socketId];
    });
})