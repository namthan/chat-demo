import express, { request } from "express";
var flash = require("connect-flash");
import { nanoid } from "nanoid";

import { urlencoded, json } from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { pgFactory } from "./PGFactory";
import { dataDao } from "./dao/DataDao";
import { pushNotification } from "./dao/PushNotification";
import { smssend } from "./SMSSend";

const app = express();
dotenv.config();

app.use(flash());
app.use(urlencoded({ extended: true, limit: "500mb" }));
app.use(json({ extended: true, limit: "500mb" }));
app.use(cors());
let server = app.listen(process.env.PORT);

server.setTimeout(500000);

//Use body-parser
app.use(urlencoded({ extended: false }));

app.use((req, res, next) => {
  
});

