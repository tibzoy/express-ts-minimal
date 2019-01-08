import passport from 'passport';
import * as passportLocal from 'passport-local';
import User from '../models/user';

passport.use(new passportLocal.Strategy({
        passwordField: 'password',
        usernameField: 'username',
    },
    (username: string, password: string, cb: any) => {
        User.findOne({username}, (err, user) => {
            if (err) {
                return cb(err);
            }

            if (!user) {
                return cb(null, false, {message: 'User not found'});
            }

            if (!user.isValidPassword(password)) {
                return cb(null, false, {message: 'Invalid password'});
            }

            return cb(null, user);
        });
    }
));
