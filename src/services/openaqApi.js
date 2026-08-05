const API_URL = "/api/openaq/v3";

/* =====================================================
   OBTENER ESTACIONES
===================================================== */

export async function obtenerEstaciones() {
  const bbox =
    "-83.80713775878478,-5.145582243618086,-74.34376817756562,1.776830555686696";

  const respuesta = await fetch(
    `${API_URL}/locations?bbox=${bbox}&limit=100&page=1`
  );

  if (!respuesta.ok) {
    const detalle = await respuesta.text();

    throw new Error(
      `OpenAQ respondió ${respuesta.status}: ${detalle}`
    );
  }

  const datos = await respuesta.json();

  return datos.results ?? [];
}


/* =====================================================
   OBTENER UNA ESTACIÓN
===================================================== */

export async function obtenerEstacion(id) {
  const respuesta = await fetch(`${API_URL}/locations/${id}`);

  if (!respuesta.ok) {
    throw new Error("No se pudo obtener la estación.");
  }

  const datos = await respuesta.json();

  return datos.results?.[0] ?? null;
}


/* =====================================================
   OBTENER SENSORES DE UNA ESTACIÓN
===================================================== */

export async function obtenerSensores(locationId) {
  const estacion = await obtenerEstacion(locationId);

  if (!estacion) {
    throw new Error("No se encontró la estación.");
  }

  return estacion.sensors ?? [];
}


/* =====================================================
   OBTENER MEDICIONES DE UN SENSOR
===================================================== */

export async function obtenerMediciones(sensorId) {
  const respuesta = await fetch(
    `${API_URL}/sensors/${sensorId}/measurements?limit=100&page=1`
  );

  if (!respuesta.ok) {
    const detalle = await respuesta.text();

    throw new Error(
      `OpenAQ respondió ${respuesta.status}: ${detalle}`
    );
  }

  const datos = await respuesta.json();

  return datos.results ?? [];
}