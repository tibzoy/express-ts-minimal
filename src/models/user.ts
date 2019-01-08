import crypto from 'crypto';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import config from '../config/config';

const UserSchema = new mongoose.Schema({
    username: {
        required: true,
        type: String,
        unique: true,
    },
    hash: {
        type: String,
    },
    salt: {
        type: String,
    },
});

UserSchema.methods.setPassword = function(password: string) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

UserSchema.methods.isValidPassword = function(password: string) {
    const hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.hash === hash;
};

UserSchema.methods.generateToken = function() {
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 7); // 7 days

    return jwt.sign(
        {
            _id: this._id,
            exp: parseInt(expiry.getTime() / 1000)
        },
        config.SECRET,
    );
};

export default mongoose.model('User', UserSchema);
