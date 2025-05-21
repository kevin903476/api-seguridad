//@ts-check

const studentModel = require("../models/studentModel");

class StudentService {
    async getAllStudents() {
        try {
            const result = await studentModel.getAll();
            return result;
        } catch (error) {
            console.error("Error en getAllStudents:", error);
            throw error;
        }
    }
    async registerStudent(student) {
        try {
            const result = await studentModel.registerEstudiante(student);
            return result;
        } catch (error) {
            console.error("Error en registerStudent:", error);
            throw error;
        }
    }
}

module.exports = new StudentService();