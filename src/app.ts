import express, { type Application } from 'express';
import { connect } from './infra/database';
import { errorMiddleware } from './middlewares/error.middleware';

class App {
  public app: Application;
  constructor() {
    this.app = express();
    this.middlewaresInitialize();
    this.initializeRoutes();
    this.interceptionError();
    connect();
  }

  interceptionError() {
    this.app.use(errorMiddleware);
  }

  initializeRoutes() {
    // this.app.use('/', );
  }

  middlewaresInitialize() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  listen() {
    this.app.listen(3333, () => {
      console.log('server is running');
    })
  }
}
export { App };