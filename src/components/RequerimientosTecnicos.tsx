import React from "react";

interface RequerimientosTecnicosData {
  accesoInternet: string;
  preferenciaSolucion: string;
}

interface FormSectionProps<T> {
  data: T;
  onChange: (updatedData: T) => void;
}

const RequerimientosTecnicos: React.FC<
  FormSectionProps<RequerimientosTecnicosData>
> = ({ data, onChange }) => {

  const handleChange = (key: keyof RequerimientosTecnicosData, value: string) => {
    onChange({ ...data, [key]: value });
  };

  return (
    <div>
      <h2>7. Requerimientos Técnicos</h2>
      <label>
        ¿Tienen acceso estable a internet en la zona de trabajo?
        <textarea
          value={data.accesoInternet}
          onChange={(e) => handleChange("accesoInternet", e.target.value)}
        />
      </label>
      <label>
        ¿Prefieren una solución local (en sus computadoras) o en la nube?
        <textarea
          value={data.preferenciaSolucion}
          onChange={(e) => handleChange("preferenciaSolucion", e.target.value)}
        />
      </label>
    </div>
  );
};

export default RequerimientosTecnicos;
