//@ts-check
const DbService = require("../config/database");
const db = DbService.getDbServiceInstance();

class studentModel {
  async getAll() {
    try {
      const result = await db.query("SELECT * FROM estudiantes");

      console.log("Resultado de getAll:", result);
      const users = result;
      return users;
    } catch (error) {
      console.error("Error en getAll:", error);
      throw error;
    }
  }

  async registerEstudiante(estudiante) {
    const { dni, nombre_completo, carrera } = estudiante;
    try {
      const result = await db.query(
        "INSERT INTO estudiante (dni, nombre_completo, carrera) VALUES (?, ?, ?)",
        [dni, nombre_completo, carrera]
      );
      return result;
    } catch (error) {
      console.error("Error in registerEstudiante:", error);
      throw error;
    }
  }
}
module.exports = new studentModel();
