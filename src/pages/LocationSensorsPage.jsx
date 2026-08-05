
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { obtenerSensores } from "../services/openaqApi";
import SensorsTable from "../components/SensorsTable";

function LocationSensorsPage() {
  const { locationId } = useParams();

  const [sensores, setSensores] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function cargarSensores() {
      try {
        setCargando(true);
        setError("");

        const datos = await obtenerSensores(locationId);

        setSensores(datos);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    }

    cargarSensores();
  }, [locationId]);

  return (
    <div className="page-shell">

      <section className="page-hero">
        <div>
          <p className="eyebrow">Sensores</p>

          <h2>Sensores de la estación</h2>

          <p>
            Lista de sensores registrados para la ubicación seleccionada.
          </p>
        </div>

        <div className="hero-badge">
          {sensores.length} sensores
        </div>

      </section>

      {cargando && (
        <div className="message loading">
          Cargando sensores...
        </div>
      )}

      {error && (
        <div className="message error">
          {error}
        </div>
      )}

      {!cargando && !error && (
        <SensorsTable sensores={sensores} />
      )}

    </div>
  );
}

export default LocationSensorsPage;