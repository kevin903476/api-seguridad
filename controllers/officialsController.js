const officialService = require("../services/officialsService");


const getAllOfficials = async (req, res) => {
  try {
    const result = await officialService.getAllOfficials();
    return res.status(200).json({
      success: true,
      message: "Funcionarios obtenidos correctamente",
      data: result,
    });
  } catch (error) {
    console.error("Error en getAllOfficials:", error);
    return res.status(500).json({
      success: false,
      message: "Error al obtener funcionarios",
    });
  }
};

const registerOfficial = async (req, res) => {
    const { dni, nombre_completo, tipo_funcionario } = req.body;
    try {
        const result = await officialService.registerOfficials({
            dni,
            nombre_completo,
            tipo_funcionario,
        });
        return res.status(200).json({
            success: true,
            message: "Funcionario registrado correctamente",
            data: result,
        });
    } catch (error) {
    console.error("Error en registerOfficials:", error);
    return res.status(500).json({
      success: false,
      message: "Error al registrar funcionarios",
    });
    }
};

module.exports = {
  getAllOfficials,
  registerOfficial,
};
