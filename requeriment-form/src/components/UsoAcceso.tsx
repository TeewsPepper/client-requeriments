import React from 'react';
interface UsoAccesoData {
  usuariosSistema: string;
  cantidadUsuarios: string;
  dispositivosAcceso: string;
  idiomaPreferido: string;
}

interface FormSectionProps<T> {
  data: T;
  onChange: (updatedData: T) => void;
}



const UsoAcceso: React.FC<FormSectionProps<UsoAccesoData>> = ({data, onChange }) => {
  const handleChange = (key: keyof UsoAccesoData, value: string) => {
    onChange({ ...data, [key]: value });
  };

  return (
    <div>
      <h2>6. Uso y Acceso al Sistema</h2>
      <label>
        ¿Quiénes usarán el sistema? (e.g., administradores, supervisores de
        campo)
        <textarea
          value={data.usuariosSistema}
          onChange={(e) => handleChange("usuariosSistema", e.target.value)}
        />
      </label>
      <label>
        ¿Cuántos usuarios necesitarán acceso al sistema?
        <textarea
          value={data.cantidadUsuarios}
          onChange={(e) => handleChange("cantidadUsuarios", e.target.value)}
        />
      </label>
      <label>
        ¿Qué dispositivos utilizarán para acceder al sistema?
        <textarea
          value={data.dispositivosAcceso}
          onChange={(e) => handleChange("dispositivosAcceso", e.target.value)}
          placeholder="Computadoras, tablets, móviles"
        />
      </label>
      <label>
        ¿Qué idioma prefieren para la interfaz?
        <textarea
          value={data.idiomaPreferido}
          onChange={(e) => handleChange("idiomaPreferido", e.target.value)}
        />
      </label>
    </div>
  );
};

export default UsoAcceso;
