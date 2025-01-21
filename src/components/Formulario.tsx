import React, { useState } from "react";
import InfoGeneral from "./InfoGeneral";
import ProcesosActividades from "./ProcesosActividades";
import RecursosUtilizados from "./RecursosUtilizados";
import GestionFinanciera from "./GestionFinanciera";
import ReporteAnalisis from "./ReporteAnalisis";
import UsoAcceso from "./UsoAcceso";
import RequerimientosTecnicos from "./RequerimientosTecnicos";
import PlanFuturo from "./PlanFuturo";
import ComentariosAdicionales from "./ComentariosAdicionales";

interface InfoGeneralData {
  objetivo: string;
  tamañoTerreno: string;
  divisionLotes: string;
  variedadHortaliza: string;
  etapaProceso: string;
}

interface ProcesosActividadesData {
  actividadesAcondicionamiento: string;
  metodoRegistro: string;
  agrupacionActividades: string;
  frecuenciaActividades: string;
}

interface RecursosUtilizadosData {
  insumos: string;
  registroInsumos: string;
  controlInventarioInsumos: string;
  maquinaria: string;
  tipoMaquinaria: string;
  registroMaquinaria: string;
  manoDeObra: number;
  registroManoObra: string;
}

interface GestionFinancieraData {
  registroCostos: string;
  nivelDetalleCostos: string;
  presupuestoDefinido: string;
}

interface ReporteAnalisisData {
  tipoReportes: string;
  formatoReportes: string;
  frecuenciaReportes: string;
}

interface UsoAccesoData {
  usuariosSistema: string;
  cantidadUsuarios: string;
  dispositivosAcceso: string;
  idiomaPreferido: string;
}
interface RequerimientosTecnicosData {
  accesoInternet: string;
  preferenciaSolucion: string;
}

interface PlanFuturoData {
  expansionOperaciones: string;
  integracionFuncionalidades: string;
  cumplimientoNormativas: string;
}

interface ComentariosAdicionalesData {
  comentarios:  string;
}

interface FormData {
  infoGeneral: InfoGeneralData;
  procesosActividades: ProcesosActividadesData;
  recursosUtilizados: RecursosUtilizadosData; 
  gestionFinanciera: GestionFinancieraData; 
  reporteAnalisis: ReporteAnalisisData;
  usoAcceso: UsoAccesoData;
  requerimientosTecnicos: RequerimientosTecnicosData;
  planFuturo: PlanFuturoData;
  comentariosAdicionales: ComentariosAdicionalesData;

}
const Formulario: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
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
      controlInventarioInsumos: "",
      maquinaria: "",
      tipoMaquinaria: "",
      registroMaquinaria: "",
      manoDeObra: 0,
      registroManoObra: "",
    },
    gestionFinanciera: {
      registroCostos: "",
      nivelDetalleCostos: "",
      presupuestoDefinido: "",
    },
    reporteAnalisis: {
      tipoReportes: "",
      formatoReportes: "",
      frecuenciaReportes: "",
    },
    usoAcceso: {
      usuariosSistema: "",
      cantidadUsuarios: "",
      dispositivosAcceso: "",
      idiomaPreferido: "",
    },
    requerimientosTecnicos: {
      accesoInternet: "",
      preferenciaSolucion: "",
    },
    planFuturo: {
      expansionOperaciones: "",
      integracionFuncionalidades: "",
      cumplimientoNormativas: "",
    },
    comentariosAdicionales: {
      comentarios: "", 
    }
  });

  const handleChange = (section: string, data: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: data,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch("URL_DE_TU_API_O_SERVICIO", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Formulario enviado correctamente");
      } else {
        alert("Hubo un error al enviar el formulario");
      }
    } catch (error) {
      console.error("Error al enviar formulario:", error);
      alert("Hubo un error al enviar el formulario");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Cuestionario para Sistema de Gestión Agrícola</h1>

      <InfoGeneral
        data={formData.infoGeneral}
        onChange={(data) => handleChange("infoGeneral", data)}
      />
      <ProcesosActividades
        data={formData.procesosActividades}
        onChange={(data) => handleChange("procesosActividades", data)}
      />
      <RecursosUtilizados
        data={formData.recursosUtilizados}
        onChange={(data) => handleChange("recursosUtilizados", data)}
      />
      <GestionFinanciera
        data={formData.gestionFinanciera}
        onChange={(data) => handleChange("gestionFinanciera", data)}
      />

      <ReporteAnalisis
        data={formData.reporteAnalisis}
        onChange={(data) => handleChange("reporteAnalisis", data)}
      />

      <UsoAcceso
        data={formData.usoAcceso}
        onChange={(data) => handleChange("usoAcceso", data)}
      />

      <RequerimientosTecnicos
        data={formData.requerimientosTecnicos}
        onChange={(data) => handleChange("requerimientosTecnicos", data)}
      />

      <PlanFuturo
        data={formData.planFuturo}
        onChange={(data) => handleChange("planFuturo", data)}
      />

      <ComentariosAdicionales
        data={formData.comentariosAdicionales}
        onChange={(data) => handleChange("comentariosAdicionales", data)}
      />

      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;
