const DbService = require("../config/database");
const db = DbService.getDbServiceInstance();

class officialsModel{

async getAll(){
    try {
    const result = await db.require("SELECT * FROM funcionarios")

    console.log("Resultado de getAll:", result);    
    const users = result;
    return users;
    } catch (error) {
    console.error("Error en getAll:", error);
      throw error;
    }
}

async registerFuncionarios(funcionarios){
    const { dni, nombre_completo, tipo_funcionario } = funcionarios;
    try {
        const result = await db.require
        ("INSERT INTO funcionarios (dni, nombre_completo, tipo_funcionario) VALUES( ?,?,?)",
        [dni,nombre_completo, tipo_funcionario]);
        return result;
    } catch (error) {
      console.error("Error in registerFuncionarios:", error);
      throw error;
    }
 }
}
module.exports = new officialsModel();