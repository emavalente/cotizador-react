import { createContext, useState } from "react";
import PropTypes from "prop-types";
import {
  formatearDinero,
  incrementoPorMarca,
  incrementoPorPlan,
  obtenerDifPorAnio,
} from "../helpers";

export const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {
  const [cotizacion, setCotizacion] = useState({
    marca: "",
    anio: "",
    plan: "",
  });
  const [resultado, setResultado] = useState(0);
  const [cargando, setCargando] = useState(false);
  const handleCotizacion = (e, value) => {
    setCotizacion((prevObj) => ({ ...prevObj, [e.target.name]: value }));
  };

  const calcularCotizacion = () => {
    // Precio base
    let resultado = 2000;

    // Obtener diferencia de anios
    const diferencia = obtenerDifPorAnio(cotizacion.anio);

    // Restar 3% por cada anio
    resultado -= (resultado * (diferencia * 3)) / 100;

    // Valor agregado por tipo de auto
    //? Americano +15%
    //? Europeo +30%
    //? Asiatico +5%

    resultado *= incrementoPorMarca(cotizacion.marca);

    // Valor agregado por tipo de plan
    //? Basico +20%
    //? Completo +50%
    resultado *= incrementoPorPlan(cotizacion.plan);

    // Formatear a Dinero
    resultado = formatearDinero(resultado);

    setCargando(true);
    setTimeout(() => {
      setResultado(resultado);
      setCargando(false);
    }, 3000);
  };

  return (
    <CotizadorContext.Provider
      value={{
        cotizacion,
        handleCotizacion,
        calcularCotizacion,
        resultado,
        cargando,
      }}
    >
      {children}
    </CotizadorContext.Provider>
  );
};

export default CotizadorProvider;

CotizadorProvider.propTypes = {
  children: PropTypes.node,
};
