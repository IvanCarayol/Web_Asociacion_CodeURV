import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

function NavBar() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setShowNav(true); // Mostrar cuando está en la parte superior
      } else if (currentScrollY > lastScrollY) {
        setShowNav(false); // Ocultar al hacer scroll hacia abajo
      } else {
        setShowNav(true); // Mostrar al hacer scroll hacia arriba
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`navBar ${showNav ? "visible" : "hidden"}`}>
      <ul>
        <li>
          <Link to="/#inicio">INICIO</Link>
        </li>
        <li>
          <Link to="/#eventos">EVENTOS</Link>
        </li>
        <li>
          <Link to="/#equipos">EQUIPOS</Link>
        </li>
        <li>
          <Link to="/#proyectos">PROYECTOS</Link>
        </li>
        <li>
          <Link to="/contacto">CONTACTO</Link>
        </li>
        <li>
          <Link to="/#socios">SOCIOS</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
