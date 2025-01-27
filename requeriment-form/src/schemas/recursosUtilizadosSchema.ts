import * as Yup from "yup";

const recursosUtilizadosSchema = Yup.object({
  insumos: Yup.string()
    .trim()
    .max(200, "No puede exceder los 200 caracteres.")
    .required("Este campo es obligatorio."),
    registroInsumos: Yup.string()
    .trim()
    .max(100, "No puede exceder los 100 caracteres.")
    .required("Este campo es obligatorio."),
    controlInventarioInsumos: Yup.string()
    .trim()
    .max(100, "No puede exceder los 100 caracteres.")
    .required("Este campo es obligatorio."),
    maquinaria: Yup.string()
    .trim()
    .max(200, "No puede exceder los 200 caracteres.")
    .required("Este campo es obligatorio."),
    tipoMaquinaria: Yup.string()
    .trim()
    .max(200, "No puede exceder los 200 caracteres.")
    .required("Este campo es obligatorio."),
    registroMaquinaria: Yup.string()
    .trim()
    .max(200, "No puede exceder los 200 caracteres.")
    .required("Este campo es obligatorio."),
    manoDeObra: Yup.string()
    .trim()
    .max(200, "No puede exceder los 200 caracteres.")
    .required("Este campo es obligatorio."),
    registroManoObra: Yup.string()
    .trim()
    .max(200, "No puede exceder los 200 caracteres.")
    .required("Este campo es obligatorio."),
});

export default recursosUtilizadosSchema;