const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { body, validationResult } = require("express-validator"); // Middleware para validaciones

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Middleware de validación para /submit-form
const validateForm = [
  body("infoGeneral.objetivo")
    .trim()
    .isLength({ min: 30, max: 200 })
    .withMessage("El objetivo debe tener entre 5 y 200 caracteres."),
  body("infoGeneral.tamañoTerreno")
    .trim()
    .matches(/^\d+(\.\d+)?$/)
    .withMessage("El tamaño del terreno debe ser un número válido."),
  body("infoGeneral.divisionLotes")
    .trim()
    .isInt()
    .withMessage("La división de lotes debe ser un número entero."),
  body("infoGeneral.variedadHortaliza")
    .trim()
    .isLength({ max: 100 })
    .withMessage("La variedad de hortaliza no puede exceder los 100 caracteres."),
  body("infoGeneral.etapaProceso")
    .trim()
    .isIn([
      "Preparación del terreno",
      "Siembra",
      "Riego",
      "Cosecha",
      "Postcosecha",
    ])
    .withMessage("La etapa del proceso no es válida."),
];

// Ruta para recibir datos del formulario
app.post('/submit-form', (req, res) => {
  const formData = req.body;
  const errors = [];

  // Validaciones
  if (!formData.infoGeneral.objetivo || formData.infoGeneral.objetivo.trim() === "") {
    errors.push({ param: "infoGeneral.objetivo", msg: "El objetivo es obligatorio" });
  }
  if (!formData.infoGeneral.tamañoTerreno || formData.infoGeneral.tamañoTerreno.trim() === "") {
    errors.push({ param: "infoGeneral.tamañoTerreno", msg: "El tamaño del terreno es obligatorio" });
  }
  // Continúa con más validaciones

  // Si hay errores, enviarlos al frontend
  if (errors.length > 0) {
    return res.status(400).send({
      success: false,
      message: "Errores de validación",
      errors,
    });
  }

  // Sanitización (ejemplo: asegurar datos limpios)
  const sanitizedData = {
    ...formData,
    infoGeneral: {
      ...formData.infoGeneral,
      objetivo: formData.infoGeneral.objetivo.trim(),
    },
  };

  console.log('Datos validados y sanitizados:', sanitizedData);

  res.status(200).send({
    success: true,
    message: "Datos procesados correctamente",
  });
});

// Inicia el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
