import "../styles/Footer.css"

function Footer() {
    return (
      <footer className="footer">
        <div>
          <img src ="../../public/la_calle.jpg" alt="Logo"/>
        </div>

        <div id="footer-section">
          <h1>Community</h1>
          <ul>
            <li>
              Whatsapp
            </li>
            <li>
              Instagram
            </li>
            <li>
              LinkedIn
            </li>
          </ul>
        </div>

        <div id="footer-section">
          <h1>Projects</h1>
          <ul>
            <li>
              Catle
            </li>
            <li>
              Snake IA
            </li>
            <li>
              Web
            </li>
          </ul>
        </div>

        <div id="footer-section">
          <h1>Pages</h1>
          <ul>
            <li>
              Inicio
            </li>
            <li>
              Eventos
            </li>
            <li>
              Equipos
            </li>
            <li>
              Socios
            </li>
          </ul>

        </div>
  
      </footer>
    );
  }
  
  export default Footer;