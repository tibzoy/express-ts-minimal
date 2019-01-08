import expressJwt from 'express-jwt';
import config from '../config/config';

const auth = expressJwt({
    secret: config.SECRET,
    userProperty: 'payload',
});

export default auth;
