
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { obtenerMediciones } from "../services/openaqApi";
import MeasurementsTable from "../components/MeasurementsTable";

function SensorMeasurementsPage() {
  const { sensorId } = useParams();

  const [mediciones, setMediciones] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function cargarMediciones() {
      try {
        setCargando(true);
        setError("");

        const datos = await obtenerMediciones(sensorId);

        setMediciones(datos);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    }

    cargarMediciones();
  }, [sensorId]);

  return (
    <div className="page-shell">

      <section className="page-hero">
        <div>
          <p className="eyebrow">Mediciones</p>

          <h2>Historial del sensor</h2>

          <p>
            Visualiza las últimas mediciones registradas por el sensor
            seleccionado.
          </p>
        </div>

        <div className="hero-badge">
          {mediciones.length} registros
        </div>
      </section>

      {cargando && (
        <div className="message loading">
          Cargando mediciones...
        </div>
      )}

      {error && (
        <div className="message error">
          <strong>Error:</strong> {error}
        </div>
      )}

      {!cargando && !error && mediciones.length === 0 && (
        <div className="message empty">
          No existen mediciones disponibles.
        </div>
      )}

      {!cargando && !error && mediciones.length > 0 && (
        <MeasurementsTable mediciones={mediciones} />
      )}

    </div>
  );
}

export default SensorMeasurementsPage;