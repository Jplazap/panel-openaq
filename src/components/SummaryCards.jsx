function SummaryCards({ estaciones }) {
  const totalEstaciones = estaciones.length;

  const totalSensores = estaciones.reduce(
    (total, estacion) => total + (estacion.sensors?.length || 0),
    0
  );

  const estacionesFijas = estaciones.filter(
    (estacion) => !estacion.isMobile
  ).length;

  const estacionesMoviles = estaciones.filter(
    (estacion) => estacion.isMobile
  ).length;

  const indicadores = [
    {
      titulo: "Total de estaciones",
      valor: totalEstaciones,
      icono: "📍",
      clase: "blue",
    },
    {
      titulo: "Total de sensores",
      valor: totalSensores,
      icono: "📡",
      clase: "green",
    },
    {
      titulo: "Estaciones fijas",
      valor: estacionesFijas,
      icono: "🏢",
      clase: "purple",
    },
    {
      titulo: "Estaciones móviles",
      valor: estacionesMoviles,
      icono: "🚗",
      clase: "orange",
    },
  ];

  return (
    <section className="summary-grid">
      {indicadores.map((indicador) => (
        <article
          className={`summary-card ${indicador.clase}`}
          key={indicador.titulo}
        >
          <div className="summary-icon">{indicador.icono}</div>

          <div>
            <p>{indicador.titulo}</p>
            <strong>{indicador.valor}</strong>
          </div>
        </article>
      ))}
    </section>
  );
}

export default SummaryCards;