import express from 'express';
import Hello from './hello.js';
import Lab5 from './Lab5.js';
import CourseRoutes from "./courses/routes.js";
import cors from "cors";
import UserRoutes from "./users/routes.js";
import session from "express-session";

import ModuleRoutes from "./modules/routes.js";
import "dotenv/config";
import mongoose from "mongoose";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/kanbas';

mongoose.connect(CONNECTION_STRING);

var corsOptions = {

    credentials: true,
    origin: process.env.FRONTEND_URL

    
  }
const app = express()
app.use(
    cors(corsOptions)
);  
const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
}
app.use(session(sessionOptions));

app.use(express.json());
UserRoutes(app);
///3.5.1

Hello(app);
ModuleRoutes(app);
CourseRoutes(app);
Lab5(app)
app.listen(process.env.PORT || 4000);

