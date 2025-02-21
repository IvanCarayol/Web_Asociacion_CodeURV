import { useState } from "react";
import "../styles/Equipos.css";

const equipos = [
  {
    nombre: "EQUIPO WEB",
    descripcion: "Somos muy guapos",
    imagen: "../../public/presentacionWeb.jpg",
  },
  {
    nombre: "HACKATONES",
    descripcion: "Amantes del hardware",
    imagen: "../../public/hackatonLleida.png",
  },
  {
    nombre: "HACKERS",
    descripcion: "Somos hackers del futuro",
    imagen: "https://example.com/hackers.jpg",
  },
];

function Equipos() {
  const [indexActual, setIndexActual] = useState(0);

  const siguiente = () => {
    setIndexActual((prevIndex) => (prevIndex + 1) % equipos.length);
  };

  const anterior = () => {
    setIndexActual(
      (prevIndex) => (prevIndex - 1 + equipos.length) % equipos.length
    );
  };

  return (
    <div className="carrusel-container">
      <h1>EQUIPOS</h1>
      <div className="carrusel">
        <button className="btn" onClick={anterior}>
          &lt;
        </button>
        <div className="tarjeta-container">
          {equipos.map((equipo, index) => (
            <div
              key={index}
              className={`tarjeta ${index === indexActual ? "activa" : ""}`}
            >
              <img src={equipo.imagen} alt={equipo.nombre} />
              <div className="contenido">
                <h2>{equipo.nombre}</h2>
                <p>{equipo.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="btn" onClick={siguiente}>
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Equipos;
