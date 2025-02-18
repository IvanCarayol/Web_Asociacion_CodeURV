import "../styles/Socios.css";

function Socios() {
  return (
    <section className="socios">
      <div className="socios-content alt-layout">
        <h1>Ventajas de ser socio de CodeURV</h1>

        <div className="advantage-row">
          <div className="image-placeholder"></div>
          <div className="info">
            <h2>Camiseta exclusiva</h2>
            <p>
              Podrás recibir una camiseta con el logo de CodeURV para lucir
              en todas nuestras actividades.
            </p>
          </div>
        </div>

        <div className="advantage-row">
          <div className="image-placeholder"></div>
          <div className="info">
            <h2>Certificado de asistencia a charlas</h2>
            <p>
              Obtén una constancia oficial de las charlas y talleres a los que asistas. 
              Perfecto para destacar en tu currículum.
            </p>
          </div>
        </div>

        <div className="advantage-row">
          <div className="image-placeholder"></div>
          <div className="info">
            <h2>Descuentos con la Fundación URV</h2>
            <p>
              Próximamente podrás beneficiarte de interesantes descuentos
              en formación y eventos de la Fundación URV.
            </p>
          </div>
        </div>

        <div className="advantage-row">
          <div className="image-placeholder"></div>
          <div className="info">
            <h2>Excursiones y visitas exclusivas</h2>
            <p>
              Participa en salidas técnicas y recreativas organizadas
              exclusivamente para miembros de CodeURV.
            </p>
          </div>
        </div>

        <div className="advantage-row">
          <div className="image-placeholder"></div>
          <div className="info">
            <h2>Sorteo de claves para cursos</h2>
            <p>
              Ten la oportunidad de ganar claves de acceso a cursos y
              plataformas de formación de gran interés.
            </p>
          </div>
        </div>

        {/* Botón de llamada a la acción */}
        <div className="cta-container">
          <a href="/formulario-inscripcion" className="cta-button">
            ¡Apúntate!
          </a>
        </div>
      </div>
    </section>
  );
}

export default Socios;
