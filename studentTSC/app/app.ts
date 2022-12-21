// app/app.ts
import express from "express";
import bodyParser from "body-parser";
import { Routes } from "./routes";

import { StudentApiRoutes } from './routes/student-api';
import mongoose from "mongoose";
import path from 'path';
import cors from 'cors';


class App {
    public studentApiRoutes: StudentApiRoutes = new StudentApiRoutes();
    public app: express.Application;
    public routePrv: Routes = new Routes();

    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.studentApiRoutes.routes(this.app);
        this.mongoSetup();
        this.app.use(cors);
    }

    private config(): void {
        this.app.set('view engine', 'ejs');
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(express.static(path.join(__dirname, "public")));
        this.app.use((req, res, next) => {next();}, cors({}));
    }

    private mongoSetup(): void {
        const mongo_host = process.env.MONGO_HOST || 'localhost';
        const mongo_port = process.env.MONGO_PORT || '27777';
        const mongo_db_name = process.env.MONGO_DB_NAME || 'school';

        mongoose.connect(`mongodb://${mongo_host}:${mongo_port}/${mongo_db_name}`, {})
            .then(() => console.log('connection successful'))
            .catch((err) => console.error(err));
    }

}

export default new App().app
