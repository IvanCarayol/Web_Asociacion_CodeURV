import { useState, useEffect } from "react";
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
          <a href="#inicio">INICIO</a>
        </li>
        <li>
          <a href="#eventos">EVENTOS</a>
        </li>
        <li>
          <a href="#equipos">EQUIPOS</a>
        </li>
        <li>
          <a href="#proyectos">PROYECTOS</a>
        </li>
        <li>
          <a href="#socios">SOCIOS</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
