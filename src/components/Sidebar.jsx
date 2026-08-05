import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span className="logo-icon">AQ</span>
        <div>
          <h2>OpenAQ</h2>
          <p>Panel ambiental</p>
        </div>
      </div>

      <nav className="sidebar-menu">
        <NavLink className={({ isActive }) => (isActive ? "menu-item active" : "menu-item")} to="/">
          Inicio
        </NavLink>

        <NavLink className={({ isActive }) => (isActive ? "menu-item active" : "menu-item")} to="/locations">
          Estaciones
        </NavLink>

        <NavLink className={({ isActive }) => (isActive ? "menu-item active" : "menu-item")} to="/summary">
          Cards
        </NavLink>
      </nav>

      <div className="sidebar-footer">
        <p>Aplicaciones Telemáticas</p>
        <small>UTEQ</small>
      </div>
    </aside>
  );
}

export default Sidebar;