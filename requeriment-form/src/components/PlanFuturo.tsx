import React from "react";

interface PlanFuturoData {
  expansionOperaciones: string;
  integracionFuncionalidades: string;
  cumplimientoNormativas: string;
}

interface FormSectionProps<T> {
  data: T;
  onChange: (updatedData: T) => void;
}

const PlanFuturo: React.FC<FormSectionProps<PlanFuturoData>> = ({
  data,
  onChange,
}) => {
  const handleChange = (key: keyof PlanFuturoData, value: string) => {
    onChange({ ...data, [key]: value });
  };

  return (
    <div>
      <h2>8. Plan a Futuro</h2>
      <label>
        ¿Tienen planes de ampliar la operación a más cultivos o terrenos en el
        futuro?
        <textarea
          value={data.expansionOperaciones}
          onChange={(e) => handleChange("expansionOperaciones", e.target.value)}
        />
      </label>
      <label>
        ¿Quieren integrar más funcionalidades en el futuro, como trazabilidad de
        lotes o sensores IoT?
        <textarea
          value={data.integracionFuncionalidades}
          onChange={(e) =>
            handleChange("integracionFuncionalidades", e.target.value)
          }
        />
      </label>
      <label>
        ¿Existen normativas legales o certificaciones que deban cumplir? (e.g.,
        GlobalG.A.P., HACCP)
        <textarea
          value={data.cumplimientoNormativas}
          onChange={(e) =>
            handleChange("cumplimientoNormativas", e.target.value)
          }
        />
      </label>
    </div>
  );
};

export default PlanFuturo;
