import { Link } from "react-router-dom";

function StationsTable({ estaciones }) {
  return (
    <div className="table-container">
      <table className="stations-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Estación</th>
            <th>País</th>
            <th>Localidad</th>
            <th>Sensores</th>
            <th>Coordenadas</th>
            <th>Tipo</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {estaciones.map((estacion) => (
            <tr key={estacion.id}>
              <td>{estacion.id}</td>

              <td>
                <strong>{estacion.name || "Sin nombre"}</strong>
              </td>

              <td>{estacion.country?.name || "No disponible"}</td>

              <td>{estacion.locality || "No disponible"}</td>

              <td>{estacion.sensors?.length || 0}</td>

              <td>
                {estacion.coordinates
                  ? `${estacion.coordinates.latitude.toFixed(4)},
                     ${estacion.coordinates.longitude.toFixed(4)}`
                  : "Sin coordenadas"}
              </td>

              <td>
                <span
                  className={
                    estacion.isMobile
                      ? "status mobile"
                      : "status fixed"
                  }
                >
                  {estacion.isMobile ? "Móvil" : "Fija"}
                </span>
              </td>

              <td>
                <Link
                  to={`/locations/${estacion.id}/sensors`}
                  className="action-button"
                >
                  Ver sensores
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StationsTable;