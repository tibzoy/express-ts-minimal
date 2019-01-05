import { Request, Response } from 'express';

export class IndexController {
    public index(req: Request, res: Response): void {
        res.status(200).send(`ok`);
    }
}