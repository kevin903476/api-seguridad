//@ts-check
const AccessService = require("../services/accessService");

const getAllAccess = async (req, res) => {
  try {
    const result = await AccessService.getAllAccess();
    return res.status(200).json({
      success: true,
      message: "Accesos obtenidos correctamente",
      data: result,
    });
  } catch (error) {
    console.error("Error en getAllAccess:", error);
    return res.status(500).json({
      success: false,
      message: "Error al obtener accesos",
    });
  }
};

const getTodayAccess = async (req, res) => {
  try {
    const result = await AccessService.getTodayAccess();
    return res.status(200).json({
      success: true,
      message: "Accesos de hoy obtenidos correctamente",
      data: result,
    });
  } catch (error) {
    console.error("Error en getTodayAccess:", error);
    return res.status(500).json({
      success: false,
      message: "Error al obtener accesos de hoy",
    });
  }
};

async function getAccessByDni(req, res) {
  const { dni } = req.body;
  try {
    const result = await AccessService.getAccessByDni(dni);
    return res.status(200).json({
      success: true,
      message: "Accesos obtenidos correctamente",
      data: result,
    });
  } catch (error) {
    console.error("Error en getAccessByDni:", error);
    return res.status(500).json({
      success: false,
      message: "Error al obtener accesos por DNI",
    });
  }
}

async function registerAccess(req, res) {
  const { dni } = req.body;
  try {
    const result = await AccessService.registerAccess(dni);
    return res.status(200).json({
      success: true,
      message: "Acceso registrado correctamente",
      data: result,
    });
  } catch (error) {
    console.error("Error en registerAccess:", error);
    return res.status(500).json({
      success: false,
      message: "Error al registrar acceso",
    });
  }
}

module.exports = {
  getAllAccess, getTodayAccess, getAccessByDni, registerAccess
};