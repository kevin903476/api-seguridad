//ts-check
const DbService = require("../config/database");
const db = DbService.getDbServiceInstance();

class accessModel {
  async getAllAccess() {
    try {
      const result = await db.query(
        "SELECT * FROM vista_registros_acceso_completo"
      );
      console.log("Resultado de getAllAccess:", result);
      return result;
    } catch (error) {
      console.error("Error en getAllAccess:", error);
      throw error;
    }
  }
  async getTodayAccess() {
    try {
      const result = await db.query("SELECT * FROM vista_registros_acceso_hoy");
      console.log("Resultado de getTodayAccess:", result);
      return result;
    } catch (error) {
      console.error("Error en getTodayAccess:", error);
      throw error;
    }
  }
    async getWeekAccess() {
    try {
      const result = await db.query("SELECT * FROM vista_registros_acceso_semana_actual");
      console.log("Resultado de getWeekAccess:", result);
      return result;
    } catch (error) {
      console.error("Error en getWeekAccess:", error);
      throw error;
    }
  }
  async getAccessByDni(dni) {
    try {
      const result = await db.query("CALL obtener_accesos_por_dni(?);", [dni]);
      console.log("Resultado de getAccessByDni:", result);
      return result;
    } catch (error) {
      console.error("Error en getAccessByDni:", error);
      throw error;
    }
  }

  async registerAccess(dni) {
    try {
      const result = await db.query("CALL registrar_acceso(?);", [dni]);
      return result;
    } catch (error) {
      console.error("Error in registerAccess:", error);
      throw error;
    }
  }
}
module.exports = new accessModel();
