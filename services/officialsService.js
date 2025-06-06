//@ts-check
// @ts-ignore
const officialsModel = require("../models/officialsModel");

class officialService{
    async getAllOfficials(){
        try {
            const result = await officialsModel.getAll();
            return result;
        } catch (error) {
            console.log("Error al obtener getAllOfficials",error);
            throw error;
        }
    }

    async registerOfficials(official){
        try {
            const result = await officialsModel.registerOfficial(official);
            return result;
        } catch (error) {
            console.error("Error en registerOfficial:", error);
            throw error;
        }
    }
    async updateOficcial(official){
        try {
            const result = await officialsModel.updateOfficial(official);
            return result;
        } catch (error) {
            console.error("Error en registerOfficial:", error);
            throw error;
        }
    }
}

module.exports = new officialService();