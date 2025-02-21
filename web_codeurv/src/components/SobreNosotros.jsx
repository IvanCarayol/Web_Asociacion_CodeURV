import "../styles/SobreNosotros.css";

function SobreNosotros() {
  return (
    <div id="sobrenosotros" className="SobreNosotros">
      <h1>Sobre Nosotros</h1>
      <div className="Contenido">
        <div className="Texto">
          <h2>¿Quiénes somos?</h2>
            <p>Somos la asociación de informáticos de la Universidad Rovira i Virgili, 
                formada por alumnos del ETSE (Escola Tècnica Superior d'Enginyeria).
            </p>
          <hr />

          <h2>¿Cuál es el propósito de CODE URV?</h2>
          <p>
            Nosotros transformamos el panorama de la programación y el talento, preparando a la próxima generación de innovadores en el ámbito de la informática.
          </p>
          <hr />

          <h2>¿Cómo unirse a CODE URV?</h2>
          <p>
            Juntos, fomentamos el aprendizaje en programación, ciberseguridad y tecnología. <br />
            ¡Únete a nosotros y forma parte del cambio a través de los socios!
          </p>
        </div>

        <div className="Imagenes">
          <img id="Robots" src="/AboutUS.png" alt="Nosotros" className="Logo" />
        </div>
      </div>
    </div>
  );
}

export default SobreNosotros;
