"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const student_controller_1 = require("../controllers/student-controller");
class Routes {
    constructor() {
        this.studentController = new student_controller_1.StudentController();
    }
    routes(app) {
        app.route('/')
            .get((req, res) => {
            res.render("index", {
                title: "Hello World from EJS",
                topic: "Today we are learning about TYPESCRIPT"
            });
        });
        app.route('/students')
            .get((req, res) => __awaiter(this, void 0, void 0, function* () {
            const students = yield this.studentController.getStudents_2(req, res);
            res.render("students", {
                title: "Hello World from EJS",
                topic: "Today we are learning about TYPESCRIPT",
                students: students
            });
        }));
    }
}
exports.Routes = Routes;
//# sourceMappingURL=index.js.map