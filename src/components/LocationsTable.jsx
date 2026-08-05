
import { Link } from "react-router-dom";

function LocationsTable({ estaciones }) {
  return (
    <div className="table-container">
      <table className="stations-table">

        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>País</th>
            <th>Ciudad</th>
            <th>Latitud</th>
            <th>Longitud</th>
            <th>Acción</th>
          </tr>
        </thead>

        <tbody>
          {estaciones.length > 0 ? (
            estaciones.map((estacion) => (
              <tr key={estacion.id}>

                <td>
                  {estacion.id}
                </td>

                <td>
                  <strong>
                    {estacion.name || "Sin nombre"}
                  </strong>
                </td>

                <td>
                  {estacion.country?.name || "N/D"}
                </td>

                <td>
  {
    estacion.locality ||
    estacion.city ||
    estacion.location ||
    "No disponible"
  }
</td>

                <td>
                  {estacion.coordinates?.latitude ?? "N/D"}
                </td>

                <td>
                  {estacion.coordinates?.longitude ?? "N/D"}
                </td>

                <td>
                  <Link
                    to={`/locations/${estacion.id}/sensors`}
                    className="refresh-button"
                    style={{
                      textDecoration: "none",
                      padding: "8px 14px",
                      display: "inline-block",
                    }}
                  >
                    Ver sensores
                  </Link>
                </td>

              </tr>
            ))
          ) : (

            <tr>
              <td
                colSpan="7"
                style={{
                  textAlign: "center",
                  padding: "20px",
                }}
              >
                No existen ubicaciones disponibles.
              </td>
            </tr>

          )}
        </tbody>

      </table>
    </div>
  );
}

export default LocationsTable;