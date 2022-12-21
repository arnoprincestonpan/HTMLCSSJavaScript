"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentApiRoutes = void 0;
// /app/routes/student-api.ts
const student_controller_1 = require("../controllers/student-controller");
class StudentApiRoutes {
    constructor() {
        this.studentController = new student_controller_1.StudentController();
    }
    routes(app) {
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
exports.StudentApiRoutes = StudentApiRoutes;
//# sourceMappingURL=student-api.js.map