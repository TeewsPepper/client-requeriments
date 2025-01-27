import React from "react";
import { Field, ErrorMessage } from "formik";

const RequerimientosTecnicos: React.FC = () => {
  return (
    <div>
      <h2>7. Requerimientos Técnicos</h2>
      <label>
        ¿Tienen acceso estable a internet en la zona de trabajo?
        <Field
          as="textarea"
          id="requerimientosTecnicos.accesoInternet"
          name="requerimientosTecnicos.accesoInternet"
          placeholder="Ej: Abono, semillas, herramientas"
        />
        <ErrorMessage
          name="requerimientosTecnicos.accesoInternet"
          component="div"
          className="error"
        />
      </label>
      <label>
        ¿Prefieren una solución local (en sus computadoras) o en la nube?
        <Field
          as="textarea"
          id="requerimientosTecnicos.preferenciaSolucion"
          name="requerimientosTecnicos.preferenciaSolucion"
          placeholder="Ej: Abono, semillas, herramientas"
        />
        <ErrorMessage
          name="requerimientosTecnicos.preferenciaSolucion"
          component="div"
          className="error"
        />
      </label>
    </div>
  );
};

export default RequerimientosTecnicos;
