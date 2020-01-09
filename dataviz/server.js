const express = require('express')
const app = express()
const WebSocketClient = require('websocket').client;
const axios = require('axios');
const fs = require('fs');
const readline = require('readline');
const { google } = require('googleapis')
let actualCsvId = '1V-2hul0_KF5agQPGA7FJlWRFWLc5UWneJ4_ZZnmj5yM';
let currentRange = 2;

var client = new WebSocketClient();
const daysLimit = 7;

app.get('/', function (req, res) {
  res.send('Hello World!')
})

function hexToString(str) {
  const buf = new Buffer(str, 'hex');
  return buf.toString('utf8');
}

client.on('connectFailed', function (error) {
  console.log('Connect Error: ' + error.toString());
});

client.on('connect', function (connection) {
  console.log('WebSocket Client Connected');

  connection.on('error', function (error) {
    console.log("Connection Error: " + error.toString());
  });

  connection.on('close', function () {
    console.log('echo-protocol Connection Closed');
  });

  connection.on('message', function (message) {
    if (message.type === 'utf8') {
      getBlockInfo(JSON.parse(message.utf8Data), tWait = true)
    }
  });

  function subToBlocks() {
    if (connection.connected) {
      connection.sendUTF(`{"op":"blocks_sub"}`);
    }
  }
  subToBlocks();
});

function getTwoWeeks() {
  return new Promise((resolve, reject) => {
    const reqString = 'https://blockchain.info/blocks/';
    let aTimeStamp = Date.now();
    let total = 0, done = 0;
    for (let i = 0; i < daysLimit; i += 1) {
      aTimeStamp = aTimeStamp - (i * 3600 * 24 * 1000)
      const d = new Date(aTimeStamp);
      const req = `${reqString}${aTimeStamp}?format=json`;
      axios.get(req)
        .then(async (res) => {
          let blocks = res.data.blocks;
          total += blocks.length - 5;
          for (let block in blocks) {
            let r = await getBlockInfo(blocks[block].hash, true, d, false);
            console.log(done);
            done += r;
            if (done == total) {
              console.log(done);
              resolve(true);
              return null;
            }
          }
        })
        .catch(function (error) {
          console.log("Bloc pas encore dispo sur l'api.. on retente dans 5 min");
          setTimeout(() => { getBlockInfo(data) }, 300000, data);
        });
    }
  })
}

async function getBlockInfo(data, fromTwo = false, date = null, tWait = false) {
  return new Promise((resolve, reject) => {
    let hash = "";
    fromTwo ? hash = data : hash = data.x.hash;
    if (data.op != null) {
      hash = data.x.hash;
    }
    if (date == null) {
      date = new Date(Date.now());
    }
    if (tWait) {
      setTimeout(()=>{}, 2000)
    }
    axios.get(`https://blockchain.info/rawblock/${hash}`)
      .then((res) => {
        let txs = res.data.tx;
        let coinBase = hexToString(txs[0].inputs[0].script)
        storeCSV([coinBase,date])
        resolve(1);
      })
      .catch(function (error) {
        console.log(error.response);
        console.log(hash);
        // Pas sur de ça mais bon go toast
        let date = new Date(Date.now());
        setTimeout(() => { getBlockInfo(data) }, 200000, data, date);
      });
  })
}

app.listen(3000, async function () {
  await getTwoWeeks();
  // On se connect à l'api de blockchain.info pour avoir une notif à chaque block miné
  client.connect('wss://ws.blockchain.info/inv');
})

const SCOPES = ['https://www.googleapis.com/auth/drive'];
const TOKEN_PATH = 'token.json';


function storeCSV(data) {
  fs.readFile('credentials.json', (err, content) => {
    if (err) return console.log('Error loading client secret file:', err);
    authorize(JSON.parse(content), storeFiles, data);
  });
}

function authorize(credentials, callback, data) {
  const { client_secret, client_id, redirect_uris } = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
    client_id, client_secret, redirect_uris[0]);

  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) {
      return getAccessToken(oAuth2Client, callback);
    }
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client, data);
  });
}

function getAccessToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error retrieving access token', err);
      oAuth2Client.setCredentials(token);

      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
      });
      callback(oAuth2Client);
    });
  });
}

function storeFiles(auth, dataBTC) {
  console.log("auth", JSON.stringify(auth));
  const sheets = google.sheets({ version: 'v4', auth });
  let request = {
    spreadsheetId: actualCsvId,
    includeGridData: false,  // TODO: Update placeholder value.
    auth: auth,
  };

  sheets.spreadsheets.get(request, (err, response) => {
    if (err) {
      console.log("ERRREUR NON TROUVEE !!!");
      sheets.spreadsheets.create({
        resource: {
          properties: {
            title: 'coinbase',
          },
        },
        fields: 'spreadsheetId',
      }, function (err, spreadsheet) {
        if (err) {
          // Handle error
          console.error(err);
        } else {
          console.log(`Spreadsheet ID: ${spreadsheet.data.spreadsheetId}`);
          actualCsvId = spreadsheet.data.spreadsheetId;
        }
      });
    } else {
      let request = {
        // The ID of the spreadsheet to update.
        spreadsheetId: actualCsvId,  // TODO: Update placeholder value.

        resource: {
          // How the input data should be interpreted.
          valueInputOption: 'RAW',  // TODO: Update placeholder value.

          // The new values to apply to the spreadsheet.
          data: [{
            "range": `A${currentRange}:B${currentRange}`,
            "majorDimension": "ROWS",
            values: [
              dataBTC
            ]
          }],  // TODO: Update placeholder value.

          // TODO: Add desired properties to the request body.
        },

        auth: auth,
      };

      sheets.spreadsheets.values.batchUpdate(request, (err, response) => {
        if (err) {
          // Handle error
          console.error(err);
        } else {
          // console.log(response);
          console.log("done");
          currentRange += 1;
        }
      });
    }
  });
}