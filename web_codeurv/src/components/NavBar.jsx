import "../styles/NavBar.css";
function NavBar() {
  return (
    <nav className="navBar">
      <ul>
        <li>
          <a href="#inicio">INICIO</a>
        </li>
        <li>
          <a href="">EVENTOS</a>
        </li>
        <li>
          <a href="#equipos">EQUIPOS</a>
        </li>
        <li>
          <a href="">SOCIOS</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
