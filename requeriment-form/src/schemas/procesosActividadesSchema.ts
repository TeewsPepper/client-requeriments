import * as Yup from "yup";

const procesosActividadesSchema = Yup.object({
  actividadesAcondicionamiento: Yup.string()
    .trim()
    .max(200, "No puede exceder los 200 caracteres.")
    .required("Este campo es obligatorio."),
  metodoRegistro: Yup.string()
    .trim()
    .max(100, "No puede exceder los 100 caracteres.")
    .required("Este campo es obligatorio."),
  agrupacionActividades: Yup.string()
    .trim()
    .max(100, "No puede exceder los 100 caracteres.")
    .required("Este campo es obligatorio."),
  frecuenciaActividades: Yup.string()
    .trim()
    .required("Este campo es obligatorio."),
});

export default procesosActividadesSchema;
