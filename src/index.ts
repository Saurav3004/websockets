import {WebSocket, WebSocketServer} from "ws";

const wss = new WebSocketServer({port:8080});

let userCount = 0;
let allSockets: WebSocket[] = [];
wss.on("connection",function(socket){
    console.log("user connected");
    
    userCount++;
    allSockets.push(socket)
    
    socket.on("message",(message) => {
        allSockets.forEach(s => {
        s.send(message.toString() + " sent from the server")
    })
    })
})