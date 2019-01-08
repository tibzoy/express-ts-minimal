// module.exports.login = function(req, res) {

//     passport.authenticate('local', function(err, user, info){
//       var token;
  
//       // If Passport throws/catches an error
//       if (err) {
//         res.status(404).json(err);
//         return;
//       }
  
//       // If a user is found
//       if(user){
//         token = user.generateJwt();
//         res.status(200);
//         res.json({
//           "token" : token
//         });
//       } else {
//         // If user is not found
//         res.status(401).json(info);
//       }
//     })(req, res);
  
//   };

import { Router, Request, Response } from 'express';
import responses from '../helpers/responses';
import passport from 'passport';
import jwt from 'jsonwebtoken';

const router = Router();

router.post('/', (req: Request, res: Response) => {
    passport.authenticate('local', {session: false}, (err, user, info) => {
        if (err || !user) {
            return responses._401(res, {info});
        }

        const token = user.generateToken();

        return responses._200(res, {token});
    })
    (req, res);
});

export default router;
