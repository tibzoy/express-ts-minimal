import express from 'express';
import createError from 'http-errors';
import logger from 'morgan';
import path from 'path';
import mongoose from 'mongoose';
import config from './config/config';
import responses from './helpers/responses';
import './services/passport';

import indexRouter from './routes/index';
import loginRouter from './routes/login';
import requestRouter from './routes/request';
import userRouter from './routes/user';

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(config.DB_HOST, {useNewUrlParser: true, useCreateIndex: true});

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/request', requestRouter);
app.use('/user', userRouter);

// catch 404 and forward to error handler
app.use((req: express.Request, res: express.Response, next: any) => {
  next(createError(404));
});

// error handler
app.use((err: any, req: express.Request, res: express.Response, next: any) => {
    responses[`_${err.status}`](res, {error: err.message});
});

export default app;
