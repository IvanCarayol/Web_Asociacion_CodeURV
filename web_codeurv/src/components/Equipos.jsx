import { useState } from "react";
import "../styles/Eventos.css";
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

function EventosYEquipos() {
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
    <div className="contenedor-principal">
      {/* Sección de Eventos */}
      <div id="eventos">
        <div className="eventos-container">
          <h2>EVENTOS</h2>
          <div className="eventos">
            {[...Array(10)].map((_, i) => {
              const fecha = new Date(2024, 9, 10 + i); // Octubre 2024
              const dia = fecha.getDate();
              const mes = fecha.getMonth() + 1;
              const diaSemana = fecha.toLocaleString("en", { weekday: "short" });

              return (
                <div className="evento" key={i}>
                  <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                    {dia}/{mes}
                  </p>
                  <p style={{ fontSize: "18px" }}>2024</p>
                  <span style={{ fontSize: "16px" }}>{diaSemana}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Sección de Equipos */}
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
                <img
                  src={equipo.imagen}
                  alt={equipo.nombre}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <div className="contenido" style={{ fontSize: "20px" }}>
                  <h2 style={{ fontSize: "24px" }}>{equipo.nombre}</h2>
                  <p style={{ fontSize: "18px" }}>{equipo.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="btn" onClick={siguiente}>
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventosYEquipos;
