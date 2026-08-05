import SummaryCards from "../components/SummaryCards";
import StationsTable from "../components/StationsTable";

function Homepage({ estaciones, cargando, error }) {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div>
          <p className="eyebrow">Panel principal</p>
          <h2>Monitoreo ambiental en tiempo real</h2>
          <p>
            Explora el estado general de las estaciones registradas y revisa los
            indicadores clave del sistema OpenAQ.
          </p>
        </div>
        <div className="hero-badge">{estaciones.length} estaciones activas</div>
      </section>

      <SummaryCards estaciones={estaciones} />

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
        <section>
          <div className="section-heading">
            <div>
              <h2>Resumen de estaciones</h2>
              <p>Vista rápida de las estaciones más relevantes registradas.</p>
            </div>
          </div>
          <StationsTable estaciones={estaciones} />
        </section>
      )}
    </div>
  );
}

export default Homepage;
