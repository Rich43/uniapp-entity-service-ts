import { Express } from 'express';

const get = (req: any, res: any) => {
    res.send('Hello World');
};

const home = (app: Express) => {
    app.get('/', get);
};

export default home;
