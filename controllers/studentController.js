//ts-check

const studentService = require("../services/studentService");

const getAllStudents = async (req, res) => {
  try {
    const result = await studentService.getAllStudents();
    return res.status(200).json({
      success: true,
      message: "Cursos obtenidos correctamente",
      data: result,
    });
  } catch (error) {
    console.error("Error en getAllStudents:", error);
    return res.status(500).json({
      success: false,
      message: "Error al obtener estudiantes",
    });
  }
};

const registerStudent = async (req, res) => {
  const { dni, nombre_completo, carrera } = req.body;
  try {
    const result = await studentService.registerStudent({
      dni,
      nombre_completo,
      carrera,
    });
    return res.status(200).json({
      success: true,
      message: "Estudiante registrado correctamente",
      data: result,
    });
  } catch (error) {
    console.error("Error en registerStudent:", error);
    return res.status(500).json({
      success: false,
      message: "Error al registrar estudiante",
    });
  }
};

module.exports = {
  getAllStudents,
  registerStudent,
};
