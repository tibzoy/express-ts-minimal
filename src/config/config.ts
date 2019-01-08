import * as dotenv from 'dotenv';

dotenv.config();

let dotenvPath: string;

switch (process.env.NODE_ENV) {
    case 'prod':
        dotenvPath = `${__dirname}/../../.env.prod`;
        break;
    default: dotenvPath = `${__dirname}/../../.env.dev`;
}

dotenv.config({ path: dotenvPath });

export default {
    APP_NAME: process.env.APP_NAME,
    ENV: process.env.ENV,
    LOG_LEVEL: process.env.LOG_LEVEL,
    PORT: process.env.PORT,
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
    SECRET: process.env.SECRET,
}