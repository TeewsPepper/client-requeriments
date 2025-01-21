import React from "react";

interface FormSectionProps<T> {
  data: T;
  onChange: (updatedData: T) => void;
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

const RecursosUtilizados: React.FC<
  FormSectionProps<RecursosUtilizadosData>
> = ({ data, onChange }) => {
  const handleChange = (key: keyof RecursosUtilizadosData, value: string) => {
    onChange({ ...data, [key]: value });
  };

  return (
    <div>
      <h2>3. Recursos Utilizados</h2>
      <div>
        <h3>3.1 Insumos</h3>
        <label>
          Tipo de insumos utilizados:
          <textarea
            value={data.insumos}
            onChange={(e) => handleChange("insumos", e.target.value)}
            placeholder="Ej: Abono, semillas, herramientas"
          />
        </label>
        <label>
          ¿Cómo registran el uso de insumos?
          <textarea
            value={data.registroInsumos}
            onChange={(e) => handleChange("registroInsumos", e.target.value)}
            placeholder="Ej: Papel y Lápiz"
          />
        </label>
        <label>
          ¿Quieren incluir control de inventario de insumos?
          <textarea
            value={data.controlInventarioInsumos}
            onChange={(e) =>
              handleChange("controlInventarioInsumos", e.target.value)
            }
          />
        </label>
      </div>
      <div>
        <h3>3.2 Maquinaria</h3>
        <label>
          Maquinaria disponible:
          <textarea
            value={data.maquinaria}
            onChange={(e) => handleChange("maquinaria", e.target.value)}
          />
        </label>
        <label>
          ¿Es propia o alquilada?
          <textarea
            value={data.tipoMaquinaria}
            onChange={(e) => handleChange("tipoMaquinaria", e.target.value)}
          />
        </label>
        <label>
          ¿Llevan registro del uso de maquinaria?
          <textarea
            value={data.registroMaquinaria}
            onChange={(e) => handleChange("registroMaquinaria", e.target.value)}
          />
        </label>
      </div>
      <div>
        <h3>3.3 Mano de Obra</h3>
        <label>
          Número de personas trabajando:
          <input
            type="number"
            value={data.manoDeObra}
            min={0}
            onChange={(e) => handleChange("manoDeObra", e.target.value)}
          />
        </label>
        <label>
          ¿Quieren registrar la mano de obra?
          <textarea
            value={data.registroManoObra}
            onChange={(e) => handleChange("registroManoObra", e.target.value)}
          />
        </label>
      </div>
    </div>
  );
};

export default RecursosUtilizados;
