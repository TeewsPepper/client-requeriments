import React from "react";
import { Field, ErrorMessage } from "formik";



const RecursosUtilizados: React.FC = () => {
 

  return (
    <div>
      <h2>3. Recursos Utilizados</h2>
      <div>
        <h3>3.1 Insumos</h3>
        <label>
          Tipo de insumos utilizados:
          <Field
           as="textarea"
           id="recursosUtilizados.insumos"
           name="recursosUtilizados.insumos"
           placeholder="Ej: Abono, semillas, herramientas"
          />
           <ErrorMessage
                    name="recursosUtilizados.insumos"
                    component="div"
                    className="error"
                  />
        </label>
        <label>
          ¿Cómo registran el uso de insumos?
          <Field
           as="textarea"
           id="recursosUtilizados.registroInsumos"
           name="recursosUtilizados.registroInsumos"
           placeholder="Ej: Abono, semillas, herramientas"
          />
           <ErrorMessage
                    name="recursosUtilizados.registroInsumos"
                    component="div"
                    className="error"
                  />
        </label>
        <label>
          ¿Quieren incluir control de inventario de insumos?
           <Field
           as="textarea"
           id="recursosUtilizados.controlInventarioInsumos"
           name="recursosUtilizados.controlInventarioInsumos"
          />
           <ErrorMessage
                    name="recursosUtilizados.controlInventarioInsumos"
                    component="div"
                    className="error"
                  />
        </label>
      </div>
      <div>
        <h3>3.2 Maquinaria</h3>
        <label>
          Maquinaria disponible:
          <Field
           as="textarea"
           id="recursosUtilizados.maquinaria"
           name="recursosUtilizados.maquinaria"
          />
           <ErrorMessage
                    name="recursosUtilizados.maquinaria"
                    component="div"
                    className="error"
                  />
        </label>
        <label>
          ¿Es propia o alquilada?
           <Field
           as="textarea"
           id="recursosUtilizados.tipoMaquinaria"
           name="recursosUtilizados.tipoMaquinaria"
          />
           <ErrorMessage
                    name="recursosUtilizados.tipoMaquinaria"
                    component="div"
                    className="error"
                  />
        </label>
        <label>
          ¿Llevan registro del uso de maquinaria?
           <Field
           as="textarea"
           id="recursosUtilizados.registroMaquinaria"
           name="recursosUtilizados.registroMaquinaria"
          />
           <ErrorMessage
                    name="recursosUtilizados.registroMaquinaria"
                    component="div"
                    className="error"
                  />
        </label>
      </div>
      <div>
        <h3>3.3 Mano de Obra</h3>
        <label>
          Número de personas trabajando:
          <Field
           as="textarea"
           id="recursosUtilizados.manoDeObra"
           name="recursosUtilizados.manoDeObra"
          />
           <ErrorMessage
                    name="recursosUtilizados.manoDeObra"
                    component="div"
                    className="error"
                  />
        </label>
        <label>
          ¿Quieren registrar la mano de obra?
         
           <Field
           as="textarea"
           id="recursosUtilizados.registroManoObra"
           name="recursosUtilizados.registroManoObra"
          />
           <ErrorMessage
                    name="recursosUtilizados.registroManoObra"
                    component="div"
                    className="error"
                  />
        </label>
      </div>
    </div>
  );
};

export default RecursosUtilizados;
