import * as Yup from "yup";
import infoGeneralSchema from "./infoGeneralSchema";
import procesosActividadesSchema from "./procesosActividadesSchema";
import recursosUtilizadosSchema from "./recursosUtilizadosSchema";

const validationSchema = Yup.object({
  infoGeneral: infoGeneralSchema,
  procesosActividades: procesosActividadesSchema,
  recursosUtilizados: recursosUtilizadosSchema,
});

export default validationSchema;
