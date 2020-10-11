import express, { Application } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser'
import cors from 'cors';
import router from "./routes";
import { errorHandler, notFound } from './middlewares/ErrorHandler';
dotenv.config();
const PORT: string = process.env.PORT || '6000';

const app: Application = express();
app.use(express.json());
app.use(cors());
app.use('/', router);
app.use(bodyParser.json());
app.use(errorHandler);
app.use(notFound)
app.listen(PORT, () => console.log(`listening on port ${PORT}`));