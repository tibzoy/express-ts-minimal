import {Request, Response, Router} from 'express';
import responses from '../helpers/responses';
import User from '../models/user';
import auth from '../services/auth';

const router = Router();

router.post('/', (req: Request, res: Response, next: any) => {
    const user = new User();
    const { username, password } = req.body;
    user.username = username;
    user.setPassword(password);
    user.save((err, user) => {
        if (err) {
            return responses._422(res, err);
        }
        responses._200(res, {_id: user._id});
    });
});

router.get('/profile', auth, (req: Request, res: Response, next: any) => {
    if (!req.payload._id) {
        responses._401(res, 'Unauthorized to view profile');
    }

    const _id = req.payload._id;

    User.findById({_id}, (err, user) => {
        if (err) {
            return responses._500(res, {err});
        }
        if (!user) {
            return responses._401(res, '');
        }
        responses._200(res, {user});
    });
});

router.get('/:id', (req: Request, res: Response, next: any) => {
    responses._200(res, { _id: req.params.id });
});

export default router;
