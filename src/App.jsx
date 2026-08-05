import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import Homepage from "./pages/Homepage";
import LocationsPage from "./pages/LocationsPage";
import SummaryCardsPage from "./pages/SummaryCardsPage";
import LocationSensorsPage from "./pages/LocationSensorsPage";
import SensorMeasurementsPage from "./pages/SensorMeasurementsPage";

import { obtenerEstaciones } from "./services/openaqApi";

import "./App.css";

function App() {
  const [estaciones, setEstaciones] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  // ==============================
  // Cargar estaciones
  // ==============================

  async function cargarEstaciones() {
    try {
      setCargando(true);
      setError("");

      const resultados = await obtenerEstaciones();

      setEstaciones(resultados);
    } catch (errorPeticion) {
      setError(errorPeticion.message);
    } finally {
      setCargando(false);
    }
  }

  useEffect(() => {
    cargarEstaciones();
  }, []);

  return (
    <div className="admin-layout">
      <Sidebar />

      <div className="main-container">
        <Header />

        <main className="content">
          <Routes>

            {/* Dashboard */}
            <Route
              path="/"
              element={
                <Homepage
                  estaciones={estaciones}
                  cargando={cargando}
                  error={error}
                />
              }
            />

            {/* Estaciones */}
            <Route
              path="/locations"
              element={
                <LocationsPage
                  estaciones={estaciones}
                  cargando={cargando}
                  error={error}
                  cargarEstaciones={cargarEstaciones}
                />
              }
            />

            {/* Resumen */}
            <Route
              path="/summary"
              element={
                <SummaryCardsPage
                  estaciones={estaciones}
                  cargando={cargando}
                  error={error}
                />
              }
            />

            {/* Sensores de una estación */}
            <Route
              path="/locations/:locationId/sensors"
              element={<LocationSensorsPage />}
            />

            {/* Mediciones de un sensor */}
            <Route
              path="/sensors/:sensorId/measurements"
              element={<SensorMeasurementsPage />}
            />

            {/* Ruta por defecto */}
            <Route
              path="*"
              element={
                <Homepage
                  estaciones={estaciones}
                  cargando={cargando}
                  error={error}
                />
              }
            />

          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;