const officialService = require("../services/officialsService");
const cloudinary = require("../config/cloudinary");
const streamifier = require("streamifier");

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
  const { dni, nombre_completo, estado, puesto_id } = req.body;
  let foto_url = null;

  try {
    // Si hay archivo, subir a Cloudinary
    if (req.file) {
      const streamUpload = () => {
        return new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            {
              folder: "funcionarios",
              resource_type: "image",
            },
            (error, result) => {
              if (result) {
                resolve(result.secure_url);
              } else {
                reject(error);
              }
            }
          );
          streamifier.createReadStream(req.file.buffer).pipe(stream);
        });
      };

      foto_url = await streamUpload();
    }

    // Registro del funcionario (con o sin imagen)
    const result = await officialService.registerOfficials({
      dni,
      nombre_completo,
      estado,
      foto_url,
      puesto_id,
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

const updateOfficial = async (req, res) => {
  const { persona_id, estado, puesto_id } = req.body;

  try {
    const result = await officialService.updateOfficial({
      persona_id,
      estado,
      puesto_id,
    });

    return res.status(200).json({
      success: true,
      message: "Funcionario actualizado correctamente",
      data: result,
    });
  } catch (error) {
    console.error("Error en updateOfficial:", error);
    return res.status(500).json({
      success: false,
      message: "Error al actualizar funcionario",
    });
  }
};

module.exports = {
  getAllOfficials,
  registerOfficial,
  updateOfficial,
};
