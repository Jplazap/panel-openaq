function Header() {
  return (
    <header className="header">
      <div>
        <h1>Panel de calidad del aire</h1>
        <p>Información obtenida desde la API OpenAQ v3</p>
      </div>

      <div className="user">
        <div className="user-avatar">CZ</div>

        <div>
          <strong>Administrador</strong>
          <span>Docente</span>
        </div>
      </div>
    </header>
  );
}

export default Header;