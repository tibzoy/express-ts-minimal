import {Request, Response, Router} from 'express';
import responses from '../helpers/responses';
import auth from '../services/auth';

const router = Router();

router.get('/', auth, (req: Request, res: Response, next: any) => {
    responses._200(res, 'ok');
});

router.get('/:id', auth, (req: Request, res: Response, next: any) => {
    responses._200(res, { _id: req.params.id });
});

export default router;
