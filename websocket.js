let wss = null;

function setWSS(server) {
  const WebSocket = require('ws');
  wss = new WebSocket.Server({ server, path: "/ws" });
  console.log("WebSocket server iniciado");
}

function getWSS() {
  return wss;
}

module.exports = {
  setWSS,
  getWSS,
};
