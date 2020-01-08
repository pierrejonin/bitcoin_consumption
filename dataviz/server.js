const express = require('express')
const app = express()
const WebSocketClient = require('websocket').client;
const axios = require('axios');
const fs = require('fs');
var client = new WebSocketClient(); 
let coinbasesPath = "./public/data/coinbases.txt";

app.get('/', function (req, res) {
  res.send('Hello World!')
})

function updateData() {
    fs.readFile(coinbasesPath, 'utf-8', (err, data) => {
        if (err) {
            throw err;
        } else {
            
        }
    })
}

updateData();

function hexToString(str)
{
    const buf = new Buffer(str, 'hex');
    return buf.toString('utf8');
}

client.on('connectFailed', function(error) {
    console.log('Connect Error: ' + error.toString());
});

client.on('connect', function(connection) {
    console.log('WebSocket Client Connected');
    
    connection.on('error', function(error) {
        console.log("Connection Error: " + error.toString());
    });

    connection.on('close', function() {
        console.log('echo-protocol Connection Closed');
    });

    connection.on('message', function(message) {
        if (message.type === 'utf8') {
            getBlockInfo(JSON.parse(message.utf8Data))
        }
    });
    
    function subToBlocks() {
        if (connection.connected) {
            connection.sendUTF(`{"op":"blocks_sub"}`);
        }
    }
    subToBlocks();
});

// On se connect à l'api de blockchain.info pour avoir une notif à chaque block miné
client.connect('wss://ws.blockchain.info/inv');

function getBlockInfo(data) {
    let hash = data.x.hash;
    axios.get(`https://blockchain.info/rawblock/${hash}`)
    .then((res)=> {
        let txs = res.data.tx;
        let coinBase = hexToString(txs[0].inputs[0].script)
        console.log(coinBase)
        fs.appendFileSync(coinbasesPath, `${coinBase}\n`, function(err) {
            if(err) {
                return console.log(err);
            }
        });    
    })
    .catch(function (error) {
        console.log("Bloc pas encore dispo sur l'api.. on retente dans 5 min");
        setTimeout(()=>{getBlockInfo(data)},300000,data);
    });
}



app.listen(3000, function () {
})