import { Application } from 'express';
import { IndexController } from '../controllers/index-controller';

export class Routes {
    // For each new controller, add them here
    constructor(app: Application) {
        this.setupIndex(app);
    }

    // Route /index
    private setupIndex(app: Application): void {
        const indexController = new IndexController();
        app.route('/')
            .get( indexController.index );
    }
}