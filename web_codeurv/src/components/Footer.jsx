import { useEffect } from "react";
import "../styles/Footer.css";

function Footer() {
    useEffect(() => {
        const links = document.querySelectorAll(".footer a[href^='#']");
        const handleClick = (event) => {
            event.preventDefault();
            const targetId = event.target.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const offset = 40;
                window.scrollTo({
                    top: targetElement.offsetTop - offset,
                    behavior: "smooth"
                });
            }
        };
        links.forEach(link => link.addEventListener("click", handleClick));
        return () => {
            links.forEach(link => link.removeEventListener("click", handleClick));
        };
    }, []);

    return (
        <footer className="footer">
            {/* Columna 1: Logo */}
            <div className="footer-logo">
                <img src="/logo_original_blanco.png" alt="Logo"/>
            </div>

            {/* Columna 2: Secciones de texto */}
            <div className="footer-sections">
                <div className="footer-section">
                    <h1>Comunidad</h1>
                    <ul>
                        <li>
                            <img src="/logo_w.png" alt=""/>
                            <a href="https://chat.whatsapp.com/Buis8fg0r3mF2CosYwB8mu" target="_blank" rel="noopener noreferrer">Whatsapp</a>
                        </li>
                        <li>
                            <img src="/logo_i.png" alt=""/>
                            <a href="https://www.instagram.com/code_urv/" target="_blank" rel="noopener noreferrer">Instagram</a>
                        </li>
                        <li>
                            <img src="/logo_lin.png" alt=""/>
                            <a href="https://www.linkedin.com/company/code-urv/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h1>Proyectos</h1>
                    <ul>
                        <li><a href="#catle" rel="noopener noreferrer">Catle</a></li>
                        <li><a href="#snakeia" rel="noopener noreferrer">Snake IA</a></li>
                        <li><a href="#web" rel="noopener noreferrer">Web</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h1>Páginas</h1>
                    <ul>
                        <li><a href="#inicio" rel="noopener noreferrer">Inicio</a></li>
                        <li><a href="#sobrenosotros" rel ="noopener noreferrer">Sobre Nosotros</a></li>
                        <li>Eventos</li>
                        <li><a href="#equipos" rel="noopener noreferrer">Equipos</a></li>
                        <li><a href="#proyectos" rel="noopener noreferrer">Proyectos</a></li>
                        <li><a href="#socios" rel="noopener noreferrer">Socios</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
