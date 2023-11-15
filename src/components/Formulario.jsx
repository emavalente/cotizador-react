import { Fragment, useState } from "react";
import { MARCAS, PLANES, YEARS } from "../constants";
import useCotizador from "../hooks/useCotizador";

const Formulario = () => {
  const [error, setError] = useState(false);
  const { cotizacion, handleCotizacion, calcularCotizacion } = useCotizador();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(cotizacion).includes("")) {
      console.log("Todos los campos son obligatorios");
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
      return;
    }
    calcularCotizacion();
  };

  return (
    <>
      {error && (
        <p className="p-4 bg-red-500 text-white text-center font-semibold">
          Todos los campos son obligatorios
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <div className="my-5">
          <label
            htmlFor="marca"
            className="block mb-4 font-bold text-gray-400 uppercase"
          >
            Marca
            <select
              name="marca"
              id="marca"
              value={cotizacion.marca}
              onChange={(e) => handleCotizacion(e, e.target.value)}
              className="mt-2 w-full p-3 bg-white border border-gray-200"
            >
              <option value="">-- Seleccione una Marca --</option>
              {MARCAS.map((marca) => (
                <option
                  key={marca.id}
                  value={marca.nombre}
                  className="text-black"
                >
                  {marca.nombre}
                </option>
              ))}
            </select>
          </label>
          <label
            htmlFor="año"
            className="block mb-4 font-bold text-gray-400 uppercase"
          >
            Año
            <select
              name="anio"
              id="anio"
              value={cotizacion.anio}
              onChange={(e) => handleCotizacion(e, e.target.value)}
              className="mt-2 w-full p-3 bg-white border border-gray-200"
            >
              <option value="">-- Seleccione un Año --</option>
              {YEARS.map((year, index) => (
                <option key={index} value={year} className="text-black">
                  {year}
                </option>
              ))}
            </select>
          </label>
          <p className="mb-4 font-bold text-gray-400 uppercase">
            Elige un Plan
          </p>
          <div className="flex gap-4 items-center">
            {PLANES.map((plan) => (
              <Fragment key={plan.id}>
                <label htmlFor={plan.nombre}>{plan.nombre}</label>
                <input
                  type="radio"
                  name="plan"
                  id={plan.nombre}
                  value={plan.nombre}
                  onChange={(e) => handleCotizacion(e, e.target.value)}
                />
              </Fragment>
            ))}
          </div>
        </div>
        <input
          type="submit"
          value="Cotizar"
          className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white p-3 uppercase font-bold cursor-pointer"
        />
      </form>
    </>
  );
};

export default Formulario;
