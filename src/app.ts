import express from 'express';
import { Routes } from './routes/routes';

class App {
    public static appInstance: express.Application;

    public static getInstance(): express.Application {
        return App.appInstance ? App.appInstance : express();
    }

    private routes: Routes;

    constructor() {
        App.appInstance = App.getInstance();
        this.setRoutes(App.appInstance);
    }

    public getInstance(): express.Application {
        return App.getInstance();
    }

    public setRoutes(app: express.Application) {
        this.routes = new Routes(app);
    }
}

export default new App().getInstance();
