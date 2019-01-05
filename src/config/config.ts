import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import { Application, Request, Response } from 'express';

dotenv.config();

let dotenvPath: string;

switch (process.env.NODE_ENV) {
    case 'prod':
        dotenvPath = `${__dirname}/../../.env.prod`;
        break;
    default: dotenvPath = `${__dirname}/../../.env.dev`;
}

dotenv.config({ path: dotenvPath });

export const APP_NAME = process.env.APP_NAME;
export const ENV = process.env.ENV;
export const LOG_LEVEL = process.env.LOG_LEVEL;
export const PORT = process.env.PORT;
export const DB_HOST = process.env.DB_HOST;
export const DB_USER = process.env.DB_USER;
export const DB_PASS = process.env.DB_PASS;
export const SECRET = process.env.SECRET;

export const setBodyParsers = (app: Application) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
};

export const allowCORS = (app: Application) => {
    app.use( (req: Request, res: Response, next: any) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
        next();
    } );
};
