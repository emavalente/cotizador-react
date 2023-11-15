export const obtenerDifPorAnio = (anioSeleccionado) => {
  const anioActual = new Date().getFullYear();
  return anioActual - anioSeleccionado;
};

export const incrementoPorMarca = (marca) => {
  let incremento;

  switch (marca) {
    case "Americano":
      incremento = 1.15;
      break;
    case "Europeo":
      incremento = 1.3;
      break;
    case "Asiatico":
      incremento = 1.05;
      break;
    default:
      break;
  }

  return incremento;
};

export const incrementoPorPlan = (plan) => {
  let incremento;

  switch (plan) {
    case "Básico":
      incremento = 1.2;
      break;
    case "Completo":
      incremento = 1.5;
      break;
    default:
      break;
  }

  return incremento;
};

export const formatearDinero = (valor) => {
  return valor.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};
