// /app/routes/student-api.ts
import { StudentController } from "../controllers/student-controller";

export class StudentApiRoutes {
    studentController: StudentController = new StudentController();

    constructor() { }

    public routes(app: any): void {
        // Get all students
        app.route('/api/students')
            .get(this.studentController.getStudents);

        // Create a new student
        app.route('/api/students')
            .post(this.studentController.addNewStudent);

        // get a specific student
        app.route('/api/students/:studentId')
            .get(this.studentController.getStudentById);

        // update a specific student
        app.route('/api/students/:studentId')
            .put(this.studentController.updateStudent);

        // delete a specific student
        app.route('/api/students/:studentId')
            .delete(this.studentController.deleteStudent);

        // generate dummy data
        app.route('/api/dummy')
            .get(this.studentController.generateDummyData);

    }
}
