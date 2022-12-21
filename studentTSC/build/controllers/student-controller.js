"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentController = void 0;
//   /app/controllers/student-controller.ts
const mongoose = __importStar(require("mongoose"));
const student_1 = require("../models/student");
const StudentMongooseModel = mongoose.model('Student', student_1.StudentSchema);
class StudentController {
    addNewStudent(req, res) {
        let newStudent = new StudentMongooseModel(req.body);
        newStudent.save((err, data) => {
            if (err) {
                res.send(err);
            }
            res.json(data);
        });
    }
    getStudents(req, res) {
        StudentMongooseModel.find({}, (err, data) => {
            if (err) {
                res.send(err);
            }
            res.json(data);
        });
    }
    getStudents_2(req, res) {
        return StudentMongooseModel.find({});
    }
    getStudentById(req, res) {
        StudentMongooseModel.findById(req.params.studentId, (err, data) => {
            if (err) {
                res.send(err);
            }
            res.json(data);
        });
    }
    updateStudent(req, res) {
        StudentMongooseModel.findOneAndUpdate({ _id: req.params.studentId }, req.body, { new: true }, (err, data) => {
            if (err) {
                res.send(err);
            }
            res.json(data);
        });
    }
    deleteStudent(req, res) {
        StudentMongooseModel.findOneAndRemove({ _id: req.params.studentId }, (err, data) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted student!' });
        });
    }
    generateDummyData(req, res) {
        var data = [
            {
                "FirstName": "Sally",
                "LastName": "Baker",
                "School": "Mining",
                "StartDate": new Date("2012-02-20T08:30:00")
            }, {
                "FirstName": "Jason",
                "LastName": "Plumber",
                "School": "Engineering",
                "StartDate": new Date("2018-03-17T17:32:00")
            }, {
                "FirstName": "Sue",
                "LastName": "Gardner",
                "School": "Political Science",
                "StartDate": new Date("2014-06-20T08:30:00")
            }, {
                "FirstName": "Linda",
                "LastName": "Farmer",
                "School": "Agriculture",
                "StartDate": new Date("2014-06-20T08:30:00")
            }, {
                "FirstName": "Fred",
                "LastName": "Fisher",
                "School": "Environmental Sciences",
                "StartDate": new Date("2017-10-16T17:32:00")
            }
        ];
        StudentMongooseModel.collection.insertMany(data, function (err, docs) {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully generated 5 sample documents!' });
        });
    }
}
exports.StudentController = StudentController;
//# sourceMappingURL=student-controller.js.map