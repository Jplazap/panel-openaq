import StationsTable from "../components/StationsTable";

function LocationsPage({ estaciones, cargando, error, cargarEstaciones }) {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div>
          <p className="eyebrow">Ubicaciones</p>
          <h2>Estaciones de monitoreo</h2>
          <p>
            Consulta detallada de cada estación registrada y su información de
            ubicación y sensores.
          </p>
        </div>
        <button
          className="refresh-button"
          onClick={cargarEstaciones}
          disabled={cargando}
        >
          {cargando ? "Cargando..." : "Actualizar datos"}
        </button>
      </section>

      {cargando && (
        <div className="message loading">Consultando información de OpenAQ...</div>
      )}

      {error && (
        <div className="message error">
          <strong>Error:</strong> {error}
        </div>
      )}

      {!cargando && !error && estaciones.length === 0 && (
        <div className="message empty">No se encontraron estaciones.</div>
      )}

      {!cargando && !error && estaciones.length > 0 && (
        <StationsTable estaciones={estaciones} />
      )}
    </div>
  );
}

export default LocationsPage;
