import React from 'react';

interface ProcesosActividadesData {
  actividadesAcondicionamiento: string;
  metodoRegistro: string;
  agrupacionActividades: string;
  frecuenciaActividades: string;
}

interface FormSectionProps<T> {
  data: T;
  onChange: (updatedData: T) => void;
}

const ProcesosActividades: React.FC<FormSectionProps<ProcesosActividadesData>> = ({ data, onChange }) => {
  const handleChange = (key: keyof ProcesosActividadesData, value: string) => {
    onChange({ ...data, [key]: value });
  };

  return (
    <div>
      <h2>2. Procesos y Actividades</h2>
      <label>
        Actividades principales para acondicionar el terreno:
        <textarea
          value={data.actividadesAcondicionamiento}
          onChange={(e) => handleChange('actividadesAcondicionamiento', e.target.value)}
          placeholder="Ej: Fertilizar, limpiar de gramilla"
        />
      </label>
      <label>
        Método de registro actual de las actividades:
        <textarea
          value={data.metodoRegistro}
          onChange={(e) => handleChange('metodoRegistro', e.target.value)}
          placeholder="Ej: Block de notas digital, lápiz y papel"
        />
      </label>
      <label>
        Agrupación de actividades:
        <textarea
          value={data.agrupacionActividades}
          onChange={(e) => handleChange('agrupacionActividades', e.target.value)}
          placeholder="Ej: Labranza, finanzas, exportaciones"
        />
      </label>
      <label>
        Frecuencia de actividades:
        <textarea
          value={data.frecuenciaActividades}
          onChange={(e) => handleChange('frecuenciaActividades', e.target.value)}
          placeholder="Ej: Semanal, mensual, anual"
        />
      </label>
    </div>
  );
};

export default ProcesosActividades;

