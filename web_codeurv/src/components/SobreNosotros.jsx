import "../styles/SobreNosotros.css";

function SobreNosotros() {
  return (
    <div id="sobrenosotros" className="SobreNosotros">
      <h1>SOBRE NOSOTROS</h1>
      <div className="Contenido">
        <div className="Texto">
          <h2>¿Quiénes somos?</h2>
            <p>Somos una asociación de informáticos de la Universidad Rovira i Virgili, 
                formada por alumnos del ETSE (Escola Tècnica Superior d'Enginyeria).
            </p>
          <hr />

          <h2>¿Cuál es el propósito de CODE URV?</h2>
          <p>
            Transformar el panorama de la programación y potenciar el talento, preparando a la próxima generación de innovadores en el ámbito de la informática.
          </p>
          <hr />

          <h2>¿Cómo unirse a CODE URV?</h2>
          <p>
            Juntos aprenderemos de programación, ciberseguridad y tecnología. 
          </p>
          <p>
            Únete a nosotros y forma parte del cambio, ¡hazte socio!<br />
          </p>
        </div>

        <div className="Imagenes">
          <img id="Foto-derecha" src="/AboutUS.png" alt="Nosotros" className="Logo" />
        </div>
      </div>
    </div>
  );
}

export default SobreNosotros;
