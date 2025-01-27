import React from "react";
import { Formik, Form } from "formik";

import validationSchema from "../schemas/validationSchema";
import InfoGeneral from "./InfoGeneral";
import ProcesosActividades from "./ProcesosActividades";
import RecursosUtilizados from "./RecursosUtilizados";
import RequerimientosTecnicos from "./RequerimientosTecnicos";

interface InfoGeneralValues {
  objetivo: string;
  tamañoTerreno: string;
  divisionLotes: string;
  variedadHortaliza: string;
  etapaProceso: string;
}
interface ProcesosActividadesValues {
  actividadesAcondicionamiento: string;
  metodoRegistro: string;
  agrupacionActividades: string;
  frecuenciaActividades: string;
}
interface RecursosUtilizadosValues {
  insumos: string;
  registroInsumos: string;
  maquinaria: string;
  tipoMaquinaria: string;
  registroMaquinaria: string;
  manoDeObra: string;
  registroManoObra: string;
}
interface RequerimientosTecnicosValues {
  accesoInternet: string;
  preferenciaSolucion: string;
}

interface FormValues {
  infoGeneral: InfoGeneralValues;
  procesosActividades: ProcesosActividadesValues;
  recursosUtilizados: RecursosUtilizadosValues;
  requerimientosTecnicos: RequerimientosTecnicosValues;
}


const Formulario: React.FC = () => {
  const initialValues: FormValues = {
    infoGeneral: {
      objetivo: "",
      tamañoTerreno: "",
      divisionLotes: "",
      variedadHortaliza: "",
      etapaProceso: "",
    },
    procesosActividades: {
      actividadesAcondicionamiento: "",
      metodoRegistro: "",
      agrupacionActividades: "",
      frecuenciaActividades: "",
    },
    recursosUtilizados: {
      insumos: "",
      registroInsumos: "",
      maquinaria: "",
      tipoMaquinaria: "",
      registroMaquinaria: "",
      manoDeObra: "",
      registroManoObra: "",
    },
    requerimientosTecnicos: {
      accesoInternet: "",
      preferenciaSolucion: "",
    },
  };

  return (
    <Formik<FormValues>
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm, setErrors }) => {
        try {
          const response = await fetch("http://localhost:3000/submit-form", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          });
      
          const result = await response.json();
      
          if (response.status === 200 && result.success) {
            alert(result.message); // Éxito
            resetForm();
          } else if (response.status === 400 && result.errors) {
            // Mapea los errores del backend para pasarlos a Formik
            const backendErrors: { [key: string]: string } = {};
            result.errors.forEach((error: any) => {
              backendErrors[error.param] = error.msg;
            });
            setErrors(backendErrors); // Pasa los errores al formulario
          } else {
            alert(result.message || "Error desconocido.");
          }
        } catch (error) {
          console.error("Error al enviar los datos:", error);
          alert("No se pudo enviar el formulario. Inténtalo de nuevo.");
        }
      }}
    >
      {() => (
        <Form>
          <h1>Cuestionario para Sistema de Gestión Agrícola</h1>
          <InfoGeneral />
          <ProcesosActividades />
          <RecursosUtilizados />
          <RequerimientosTecnicos />
          <button type="submit" className="btn-submit">
            Enviar
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Formulario;
