const functions = require("firebase-functions");
const express = require('express')

const app = express()

app.get('/baseballteams', (req, res) => {
  res.send('Ummm...the mets?')
})
app.get('/basketball', (req, res) => {
  res.send('Ummm...the Heat?')
})

exports.app = functions.https.onRequest(app)


