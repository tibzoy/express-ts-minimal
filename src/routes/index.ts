import express = require('express');
import responses from '../helpers/responses';

const router = express.Router();

router.get('/', (req: express.Request, res: express.Response, next: any) => {
  responses._200(res, 'Welcome to Express');
});

export default router;
