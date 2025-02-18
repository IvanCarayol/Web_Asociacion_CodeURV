import "../styles/Footer.css"

function Footer() {
    return (
      <footer className="footer">
        <div>
          <img src ="../../public/logo_blanco.png" alt="Logo"/>
        </div>
        <div className="footer-sections">
          <div className="footer-section">
            <h1>Comunidad</h1>
            <ul>
              <li>
                <img src ="../../public/logo_wass.png" alt=""/>
                Whatsapp
              </li>
              <li>
                <img src ="./logo_insta.png" alt=""/>
                <a href="https://www.instagram.com/code_urv/" target="_blank" rel="noopener noreferrer">
                    Instagram
                </a>
              </li>
              <li>
                <img src ="../../public/logo_linkedin.png" alt=""/>
                <a href="https://www.linkedin.com/company/code-urv/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h1>Proyectos</h1>
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

          <div className="footer-section">
            <h1>Páginas</h1>
            <ul>
              <li>  
                <a href="#inicio" rel="noopener noreferrer">Inicio</a>
              </li>
              <li>
                Eventos
              </li>
              <li>
                <a href="#equipos" rel="noopener noreferrer">Equipos</a>
              </li>
              <li>
                Socios
              </li>
            </ul>

          </div>
        </div>
  
      </footer>
    );
  }
  
  export default Footer;