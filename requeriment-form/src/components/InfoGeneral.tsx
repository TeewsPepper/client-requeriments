import React from "react";
import { Field, ErrorMessage } from "formik";

const InfoGeneral: React.FC = () => {
  return (
    <div>
      <h2>Información General</h2>
      <div>
        <label htmlFor="infoGeneral.objetivo">Objetivo:</label>
        <Field
          as="textarea"
          type="text"
          id="infoGeneral.objetivo"
          name="infoGeneral.objetivo"
        />
        <ErrorMessage
          name="infoGeneral.objetivo"
          component="div"
          className="error"
        />
      </div>
      <div>
        <label htmlFor="infoGeneral.tamañoTerreno">Tamaño del Terreno:</label>
        <Field
          as="textarea"
          type="text"
          id="infoGeneral.tamañoTerreno"
          name="infoGeneral.tamañoTerreno"
        />
        <ErrorMessage
          name="infoGeneral.tamañoTerreno"
          component="div"
          className="error"
        />
      </div>
      <div>
        <label htmlFor="infoGeneral.divisionLotes">División de Lotes:</label>
        <Field
          as="textarea"
          type="text"
          id="infoGeneral.divisionLotes"
          name="infoGeneral.divisionLotes"
        />
        <ErrorMessage
          name="infoGeneral.divisionLotes"
          component="div"
          className="error"
        />
      </div>
      <div>
        <label htmlFor="infoGeneral.variedadHortaliza">
          Variedad de Hortaliza:
        </label>
        <Field
          as="textarea"
          type="text"
          id="infoGeneral.variedadHortaliza"
          name="infoGeneral.variedadHortaliza"
        />
        <ErrorMessage
          name="infoGeneral.variedadHortaliza"
          component="div"
          className="error"
        />
      </div>
      <div>
        <label htmlFor="infoGeneral.etapaProceso">Etapa del Proceso:</label>
        <Field
          as="textarea"
          type="text"
          id="infoGeneral.etapaProceso"
          name="infoGeneral.etapaProceso"
        />
        <ErrorMessage
          name="infoGeneral.etapaProceso"
          component="div"
          className="error"
        />
      </div>
    </div>
  );
};

export default InfoGeneral;
