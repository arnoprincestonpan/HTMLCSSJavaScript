"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// app/app.ts
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = require("./routes");
const student_api_1 = require("./routes/student-api");
const mongoose_1 = __importDefault(require("mongoose"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
class App {
    constructor() {
        this.studentApiRoutes = new student_api_1.StudentApiRoutes();
        this.routePrv = new routes_1.Routes();
        this.app = (0, express_1.default)();
        this.config();
        this.routePrv.routes(this.app);
        this.studentApiRoutes.routes(this.app);
        this.mongoSetup();
        this.app.use(cors_1.default);
    }
    config() {
        this.app.set('view engine', 'ejs');
        // support application/json type post data
        this.app.use(body_parser_1.default.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        this.app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
        this.app.use((req, res, next) => { next(); }, (0, cors_1.default)({}));
    }
    mongoSetup() {
        const mongo_host = process.env.MONGO_HOST || 'localhost';
        const mongo_port = process.env.MONGO_PORT || '27777';
        const mongo_db_name = process.env.MONGO_DB_NAME || 'school';
        mongoose_1.default.connect(`mongodb://${mongo_host}:${mongo_port}/${mongo_db_name}`, {})
            .then(() => console.log('connection successful'))
            .catch((err) => console.error(err));
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map