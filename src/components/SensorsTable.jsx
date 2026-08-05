
import { Link } from "react-router-dom";

function SensorsTable({ sensores }) {
  return (
    <div className="table-container">
      <table className="stations-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Parámetro</th>
            <th>Unidad</th>
            <th>Última actualización</th>
            <th>Acción</th>
          </tr>
        </thead>

        <tbody>
          {sensores.length > 0 ? (
            sensores.map((sensor) => (
              <tr key={sensor.id}>
                <td>{sensor.id}</td>

                <td>
                  <strong>{sensor.parameter?.name || "No disponible"}</strong>
                </td>

                <td>{sensor.parameter?.units || "N/D"}</td>

                <td>
                  {sensor.datetimeFirst?.utc
                    ? new Date(sensor.datetimeFirst.utc).toLocaleString()
                    : "No disponible"}
                </td>

                <td>
                  <Link
                    to={`/sensors/${sensor.id}/measurements`}
                    className="refresh-button"
                    style={{
                      textDecoration: "none",
                      padding: "8px 14px",
                      display: "inline-block",
                    }}
                  >
                    Ver mediciones
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="5"
                style={{
                  textAlign: "center",
                  padding: "20px",
                }}
              >
                No existen sensores registrados.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default SensorsTable;