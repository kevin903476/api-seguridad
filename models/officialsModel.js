const DbService = require("../config/database");
const db = DbService.getDbServiceInstance();

class officialsModel {
  async getAll() {
    try {
      const result = await db.query("SELECT * FROM funcionarios");

      console.log("Resultado de getAll:", result);
      const users = result;
      return users;
    } catch (error) {
      console.error("Error en getAll:", error);
      throw error;
    }
  }

  async registerOfficial(funcionario) {
    const { dni, nombre_completo, estado, foto_url, puesto_id } = funcionario;
    try {
      const result = await db.query(
        "CALL registrar_funcionario(?, ?, ?, ?, ?)",

        [dni, nombre_completo, estado, foto_url, puesto_id]
      );
      return result;
    } catch (error) {
      console.error("Error in registerFuncionarios:", error);
      throw error;
    }
  }

  async updateOfficial(funcionario) {
    const { persona_id, estado, puesto_id } = funcionario;
    try {
      const result = await db.query("CALL actualizar_funcionario(?, ?, ?)", [
        persona_id,
        estado,
        puesto_id,
      ]);
      return result;
    } catch (error) {
      console.error("Error en actualizarFuncionario:", error);
      throw error;
    }
  }
}
module.exports = new officialsModel();
