import React from 'react';

interface ReporteAnalisisData {
  tipoReportes: string;
  formatoReportes: string;
  frecuenciaReportes: string;
}

interface FormSectionProps<T> {
  data: T;
  onChange: (updatedData: T) => void;
}

const ReporteAnalisis: React.FC<FormSectionProps<ReporteAnalisisData>> = ({ data, onChange }) => {
  
  const handleChange = (key: keyof ReporteAnalisisData, value: string) => {
    onChange({ ...data, [key]: value });
  };

  return (
    <div>
      <h2>5. Reportes y Análisis</h2>
      <label>
        ¿Qué tipo de reportes necesitan consultar?
        <textarea
          value={data.tipoReportes}
          onChange={(e) => handleChange('tipoReportes', e.target.value)}
          placeholder="Ej:  Progreso semanal, costos acumulados"
        />
      </label>
      <label>
        ¿Prefieren reportes en formato de tablas, gráficos, o ambos?
        <textarea
          value={data.formatoReportes}
          onChange={(e) => handleChange('formatoReportes', e.target.value)}
        />
      </label>
      <label>
        ¿Con qué frecuencia necesitan consultar los reportes? 
        <textarea
          value={data.frecuenciaReportes}
          onChange={(e) => handleChange('frecuenciaReportes', e.target.value)}
          placeholder="Ej:  Diario, semanal, mensual"
        />
      </label>
    </div>
  );
};

export default ReporteAnalisis;
