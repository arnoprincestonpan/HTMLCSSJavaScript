// /app/routes/index.ts
import { Request, Response } from "express";
import { StudentController } from "../controllers/student-controller";

export class Routes {

    studentController = new StudentController();

    public routes(app: any): void {
        app.route('/')
            .get((req: Request, res: Response) => {
                res.render("index", {
                    title: "Hello World from EJS",
                    topic: "Today we are learning about TYPESCRIPT"
                });
            });
        app.route('/students')
            .get(async (req: Request, res: Response) => {

                const students = await this.studentController.getStudents_2(req, res);

                res.render("students", {
                    title: "Hello World from EJS",
                    topic: "Today we are learning about TYPESCRIPT",
                    students: students
                });
            });
    }
}
