import "../styles/Proyectos.css";

function Proyectos() {
    return (
        <div id="proyectos" className="proyectos">
            <h1>PROYECTOS</h1>

            <div id="catle" className="catle">
                <div className="info-container">
                    {/* Texto a la izquierda */}
                    <div className="text-section">
                        <div className="info-grid">
                            <p><strong>Nombre:</strong> Catle</p>
                            <p><strong>Estado:</strong> Finalizado</p>
                            <p><strong>Responsables:</strong> Oriol Algar Vilà y Eric Riveiro Illescas</p>
                            <p className="descripcion"><strong>Descripcion</strong></p>
                        </div>
                        <div className="catledesc">
                            <p>🐱 <strong>Catle</strong> es una versión temática del popular juego <strong>Wordle</strong>, pero con un giro felino. En este desafío, los jugadores deben adivinar palabras relacionadas con el mundo de los gatos, poniendo a prueba su conocimiento y amor por estos adorables compañeros.</p>
                            <p>💻 Desarrollado en <strong>lenguaje C</strong> y optimizado para ser <strong>emulado en la Nintendo DS</strong>, <strong>Catle</strong> utiliza la biblioteca <strong>libnds</strong> para ofrecer una experiencia fluida y divertida en la icónica consola portátil.</p>
                            <p>🎮 Más que un simple juego, <strong>Catle</strong> es un proyecto que combina la lógica de los juegos de palabras con la programación para consolas retro, permitiendo a los desarrolladores y jugadores explorar nuevas posibilidades en el desarrollo para la Nintendo DS.</p>
                            <p>🐾 ¿Cuántas palabras gatunas puedes descubrir? Ponte a prueba y disfruta de <strong>Catle</strong> en tu Nintendo DS. 🍀🎮</p>
                        </div>
                    </div>
                        

                    {/* Imagen a la derecha */}
                    <div className="image-section">
                        <img src="/Gato.png" alt="Catle Game" />
                    </div>
                </div>
            </div>

            <div id="snakeia" className="Snake IA">
                <div className="info-container">
                    {/* Texto a la izquierda */}
                    <div className="text-section">
                        <div className="info-grid">
                            <p><strong>Nombre:</strong> SnakeIA</p>
                            <p><strong>Estado:</strong> En progreso</p>
                            <p><strong>Responsables:</strong> Guillermo Pinteño Cabello y Arnau Fàbregas Figueras</p>
                            <p className="descripcion"><strong>Descripcion</strong></p>
                        </div>
                        <div className="Snakedesc">
                            <p>🎮 <strong>SnakeIA</strong> es un proyecto innovador que combina desarrollo de videojuegos y <strong>inteligencia artificial</strong> para ofrecer una experiencia desafiante y única.</p>
                            <p>🖥️ Desarrollado con <strong>Python</strong> y <strong>Machine Learning</strong>, este sistema no solo juega, sino que <strong>aprende</strong>. A través de modelos de IA, analiza cada partida y <strong>mejora su toma de decisiones</strong>, optimizando sus movimientos para realizar la mejor jugada posible en cada momento.</p>
                            <p>🚀 Más que un simple juego, <strong>SnakeIA</strong> es una plataforma de prueba y experimentación en la que se exploran conceptos clave de <strong>algoritmos de aprendizaje automático</strong> y <strong>desarrollo de juegos interactivos</strong>.</p>
                            <p>📌 Su diseño intuitivo y su enfoque educativo lo convierten en un recurso valioso para aquellos interesados en la <strong>programación de IA</strong>, el <strong>desarrollo de software</strong> y la <strong>optimización de estrategias</strong>.</p>
                        </div>
                    </div>
                        

                    {/* Imagen a la derecha */}
                    <div className="image-section">
                        <img id="snakefoto" src="/SnakeIa.png" alt="SnakeIa" />
                    </div>
                </div>
            </div>

            <div id="web" className="Web">
                <div className="info-container">
                    {/* Texto a la izquierda */}
                    <div className="text-section">
                        <div className="info-grid">
                            <p><strong>Nombre:</strong> Web CodeURV</p>
                            <p><strong>Estado:</strong> En progreso</p>
                            <p><strong>Responsables:</strong> Arnau Fàbregas Figueras, Ivan Carayol Rodríguez y Gaizka Alonso Martínez</p>
                            <p className="descripcion"><strong>Descripcion</strong></p>
                        </div>
                        <div className="Webdesc">
                            <p>💻 Nuestra página web es el corazón digital de nuestra asociación, desarrollada con <strong>React</strong> e impulsada por <strong>HTML</strong>, <strong>CSS</strong> y <strong>JavaScript</strong>.</p>
                            <p>🌐 Cada sección ha sido cuidadosamente diseñada para <strong>informar</strong>, <strong>conectar</strong> y <strong>potenciar</strong> a nuestra comunidad, facilitando el acceso a eventos, proyectos y oportunidades de colaboración.</p>
                            <p>📌 Con un diseño intuitivo y adaptable, nuestra web permite que cualquier usuario pueda navegar de forma rápida y sencilla, fortaleciendo nuestra misión de <strong>crecimiento</strong> y <strong>aprendizaje colectivo</strong>.</p>
                            <p>🚀 Más que un sitio, es un punto de encuentro para la <strong>innovación</strong>, la <strong>tecnología</strong> y el <strong>desarrollo</strong>, un espacio donde las ideas cobran vida y la comunidad crece unida.</p>
                        </div>
                    </div>
                        

                    {/* Imagen a la derecha */}
                    <div className="image-section">
                        <img id="webfoto" src="/logo_blanco.png" alt="WebFoto" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Proyectos;
