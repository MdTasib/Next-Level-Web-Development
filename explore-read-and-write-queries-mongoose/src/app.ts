import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import userRoutes from '../src/app/modules/user/user.route';

const app: Application = express();

// using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/v1/user", userRoutes);

export default app;