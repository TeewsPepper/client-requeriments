import * as Yup from "yup";

const infoGeneralSchema = Yup.object({
  objetivo: Yup.string()
    .trim()
    .min(30, "El objetivo debe tener al menos 30 caracteres.")
    .max(200, "El objetivo no puede exceder los 200 caracteres.")
    .required("El objetivo es obligatorio."),
  tamañoTerreno: Yup.string()
    .trim()
    .matches(/^\d+(\.\d+)?$/, "El tamaño del terreno debe ser un número válido.")
    .required("El tamaño del terreno es obligatorio."),
  divisionLotes: Yup.string()
    .trim()
    .matches(/^\d+$/, "La división de lotes debe ser un número entero.")
    .required("La división de lotes es obligatoria."),
  variedadHortaliza: Yup.string()
    .trim()
    .max(100, "La variedad de hortaliza no puede exceder los 100 caracteres.")
    .required("La variedad de hortaliza es obligatoria."),
  etapaProceso: Yup.string()
    .trim()
    .required("La etapa del proceso es obligatoria."),
});

export default infoGeneralSchema;
