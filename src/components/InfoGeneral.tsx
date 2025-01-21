import React from 'react';

interface InfoGeneralData {
  objetivo: string;
  tamañoTerreno: string;
  divisionLotes: string;
  variedadHortaliza: string;
  etapaProceso: string;
}

interface FormSectionProps<T> {
  data: T;
  onChange: (updatedData: T) => void;
}

const InfoGeneral: React.FC<FormSectionProps<InfoGeneralData>> = ({ data, onChange }) => {
  const handleChange = (key: keyof InfoGeneralData, value: string) => {
    onChange({ ...data, [key]: value });
  };

  return (
    <div>
      <h2>1. Información General de la Operación Agrícola</h2>
      <label>
        Objetivo principal:
        <textarea
          value={data.objetivo}
          onChange={(e) => handleChange('objetivo', e.target.value)}
          placeholder="Escriba el objetivo principal aquí"
        />
      </label>
      <label>
        Tamaño del terreno (hectáreas):
        <input
          type="number"
          value={data.tamañoTerreno}
          onChange={(e) => handleChange('tamañoTerreno', e.target.value)}
        />
      </label>
      <label>
        ¿Planean dividir el terreno en lotes?
        <textarea
          value={data.divisionLotes}
          onChange={(e) => handleChange('divisionLotes', e.target.value)}
          placeholder="Ej: Sí, 5 lotes"
        />
      </label>
      <label>
        Variedad de cultivo:
        <textarea
          value={data.variedadHortaliza}
          onChange={(e) => handleChange('variedadHortaliza', e.target.value)}
          placeholder="Ej: Tomates"
        />
      </label>
      <label>
        Etapa del proceso agrícola:
        <textarea
          value={data.etapaProceso}
          onChange={(e) => handleChange('etapaProceso', e.target.value)}
          placeholder="Ej: Siembra"
        />
      </label>
    </div>
  );
};

export default InfoGeneral;
