import express from 'express';
import Hello from './hello.js';
import Lab5 from './Lab5.js';
import CourseRoutes from "./courses/routes.js";
import cors from "cors";
import ModuleRoutes from "./modules/routes.js";
import "dotenv/config";
const app = express()
app.use(
    cors({
      credentials: true,
      origin: process.env.FRONTEND_URL
    })
);  
app.use(express.json());

Hello(app);
ModuleRoutes(app);
CourseRoutes(app);
Lab5(app)
app.listen(process.env.PORT || 4000);

