import React from "react";

function MeasurementsTable({ mediciones }) {
  return (
    <div className="table-container">
      <table className="stations-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Fecha</th>
            <th>Valor</th>
            <th>Unidad</th>
            <th>Parámetro</th>
            <th>Período</th>
          </tr>
        </thead>

        <tbody>
          {mediciones.length > 0 ? (
            mediciones.map((medicion, index) => (
              <tr key={`${medicion.period?.datetimeFrom?.utc ?? index}-${index}`}>
                <td>{index + 1}</td>

                <td>
                  {medicion.period?.datetimeFrom?.utc
                    ? new Date(medicion.period.datetimeFrom.utc).toLocaleString()
                    : "No disponible"}
                </td>

                <td>
                  <strong>{medicion.value ?? "N/D"}</strong>
                </td>

                <td>{medicion.parameter?.units || "N/D"}</td>

                <td>{medicion.parameter?.name || "N/D"}</td>

                <td>
                  {medicion.period
                    ? `${medicion.period.interval} ${medicion.period.label}`
                    : "N/D"}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: "center", padding: "20px" }}>
                No existen mediciones disponibles.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default MeasurementsTable;