import express, { request } from "express";
import { nanoid } from "nanoid";

import { urlencoded, json } from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import http from 'http';

var mongoose = require('mongoose');

const app = express();
app.use(urlencoded({ extended: true, limit: "500mb" }));
app.use(json({ extended: true, limit: "500mb" }));
app.use(cors());

dotenv.config();
var io = require('socket.io')(server);

var Message = mongoose.model('Message',{
  name : String,
  message : String
})

const dbUrl = 'mongodb://localhost:27017/chat'

app.get('/messages', (req, res) => {
  Message.find({},(err, messages)=> {
    res.send(messages);
  })
})

app.get('/messages', (req, res) => {
  Message.find({},(err, messages)=> {
    res.send(messages);
  })
})

app.post('/messages', (req, res) => {
  var message = new Message(req.body);
  message.save((err) =>{
    if(err)
      sendStatus(500);
    io.emit('message', req.body);
    res.sendStatus(200);
  })
})

mongoose.connect(dbUrl, { useUnifiedTopology: true, useNewUrlParser: true })

var server = app.listen(process.env.PORT);

server.setTimeout(500000);

//Use body-parser
app.use(urlencoded({ extended: false }));

