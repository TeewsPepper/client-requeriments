import React from "react";
import { Field, ErrorMessage } from "formik";

const ProcesosActividades: React.FC = () => {
  return (
    <div>
      <h2>2. Procesos y Actividades</h2>
      <div>
        <label htmlFor="procesosActividades.actividadesAcondicionamiento">
          Actividades principales para acondicionar el terreno:
        </label>
        <Field
          as="textarea"
          id="procesosActividades.actividadesAcondicionamiento"
          name="procesosActividades.actividadesAcondicionamiento"
          placeholder="Ej: Fertilizar, limpiar de gramilla"
        />
        <ErrorMessage
          name="procesosActividades.actividadesAcondicionamiento"
          component="div"
          className="error"
        />
      </div>
      <div>
        <label htmlFor="procesosActividades.metodoRegistro">
          Método de registro actual de las actividades:
        </label>
        <Field
          as="textarea"
          id="procesosActividades.metodoRegistro"
          name="procesosActividades.metodoRegistro"
          placeholder="Ej: Block de notas digital, lápiz y papel"
        />
        <ErrorMessage
          name="procesosActividades.metodoRegistro"
          component="div"
          className="error"
        />
      </div>
      <div>
        <label htmlFor="procesosActividades.agrupacionActividades">
          Agrupación de actividades:
        </label>
        <Field
          as="textarea"
          id="procesosActividades.agrupacionActividades"
          name="procesosActividades.agrupacionActividades"
          placeholder="Ej: Labranza, finanzas, exportaciones"
        />
        <ErrorMessage
          name="procesosActividades.agrupacionActividades"
          component="div"
          className="error"
        />
      </div>
      <div>
        <label htmlFor="procesosActividades.frecuenciaActividades">
          Frecuencia de actividades:
        </label>
        <Field
          as="textarea"
          id="procesosActividades.frecuenciaActividades"
          name="procesosActividades.frecuenciaActividades"
          placeholder="Ej: Semanal, mensual, anual"
        />
        <ErrorMessage
          name="procesosActividades.frecuenciaActividades"
          component="div"
          className="error"
        />
      </div>
    </div>
  );
};

export default ProcesosActividades;
