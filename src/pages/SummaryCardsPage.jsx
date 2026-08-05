import SummaryCards from "../components/SummaryCards";

function SummaryCardsPage({ estaciones, cargando, error }) {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div>
          <p className="eyebrow">Vista de tarjetas</p>
          <h2>Resumen visual de indicadores</h2>
          <p>
            Aquí puedes ver únicamente las cards resumen con los principales
            indicadores de las estaciones de OpenAQ.
          </p>
        </div>
        <div className="hero-badge">{estaciones.length} registros</div>
      </section>

      {cargando && (
        <div className="message loading">Consultando información de OpenAQ...</div>
      )}

      {error && (
        <div className="message error">
          <strong>Error:</strong> {error}
        </div>
      )}

      {!cargando && !error && <SummaryCards estaciones={estaciones} />}
    </div>
  );
}

export default SummaryCardsPage;
