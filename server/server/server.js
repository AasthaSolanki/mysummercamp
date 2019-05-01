"use strict";
if (process.env.NODE_ENV === "production")
  require("newrelic");

const PORT = process.env.PORT || 3333;

import os from "os";
import express from "express";
import http from "http";

import RoutesConfig from "./config/routes.conf";
import Routes from "./routes/index";
const app = express();

RoutesConfig.init(app);
require("./models/index");
Routes.init(app, express.Router());



http.createServer(app)
  .listen(PORT, () => {
    console.log("up and running @: " + os.hostname() + " on port: " + PORT);
    console.log("enviroment: " + process.env.NODE_ENV);
  });

//getting post routes
// const posts= require('./server/routes/posts');

//using middleware
// app.use(express.static(path.join(__dirname,'dist')));
// app.use('/posts',posts);
//
//creating all other route request
app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'dist'))
})
