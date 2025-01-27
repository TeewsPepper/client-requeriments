import React from 'react';

interface ComentariosAdicionalesData {
  comentarios:  string;
}
    

interface FormSectionProps<T> {
  data: T;
  onChange: (updatedData: T) => void;
}

const ComentariosAdicionales: React.FC<FormSectionProps<ComentariosAdicionalesData>> = ({ data, onChange }) => {


  const handleChange = (key: keyof ComentariosAdicionalesData, value: string) => {
    onChange({ ...data, [key]: value });
  };

  return (
    <div>
      <h2>9. Comentarios Adicionales</h2>
      <label>
        ¿Hay alguna otra información que consideren relevante para el desarrollo del sistema?
        <textarea
          value={data.comentarios}
          onChange={(e) => handleChange('comentarios', e.target.value)}
        />
      </label>
    </div>
  );
};

export default ComentariosAdicionales;
