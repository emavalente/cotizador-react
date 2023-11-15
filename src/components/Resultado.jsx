import { useRef } from "react";
import useCotizador from "../hooks/useCotizador";

const Resultado = () => {
  const { resultado, cotizacion } = useCotizador();

  const referenciaCtizacion = useRef(cotizacion);
  const { marca, anio, plan } = referenciaCtizacion.current;

  if (resultado === 0) {
    return null;
  }

  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
      <h2 className="text-gray-500 font-black text-3xl">Resumen</h2>
      <p className="my-2">
        <span className="font-bold">Marca: {marca}</span>
      </p>
      <p className="my-2">
        <span className="font-bold">Año: {anio}</span>
      </p>
      <p className="my-2">
        <span className="font-bold">Plan: {plan}</span>
      </p>
      <h3 className="text-2xl font-black">
        Total: <span>{resultado}</span>
      </h3>
    </div>
  );
};

export default Resultado;
