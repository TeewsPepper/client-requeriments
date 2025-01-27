import React from 'react';

interface GestionFinancieraData {
  registroCostos: string;
  nivelDetalleCostos: string;
  presupuestoDefinido: string;
}

interface FormSectionProps<T> {
  data: T;
  onChange: (updatedData: T) => void;
}

const GestionFinanciera: React.FC<FormSectionProps<GestionFinancieraData>> = ({ data, onChange }) => {
;

const handleChange = (key: keyof GestionFinancieraData, value: string) => {
  onChange({ ...data, [key]: value });
};

  return (
    <div>
      <h2>4. Gestión Financiera</h2>
      <label>
        ¿Quieren incluir un registro de costos?
        <textarea
          value={data.registroCostos}
          onChange={(e) => handleChange('registroCostos', e.target.value)}
        />
      </label>
      <label>
        ¿Qué nivel de detalle necesitan para los costos? 
        <textarea
          value={data.nivelDetalleCostos}
          onChange={(e) => handleChange('nivelDetalleCostos', e.target.value)}
          placeholder="Ej: Por actividad, por recurso, global"
        />
      </label>
      <label>
        ¿Tienen un presupuesto definido para las actividades actuales?
        <textarea  
          value={data.presupuestoDefinido}
          onChange={(e) => handleChange('presupuestoDefinido', e.target.value)}
        />
      </label>
    </div>
  );
};

export default GestionFinanciera;
