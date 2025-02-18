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
                            <p><strong>Responsables:</strong> El Gato Con Botas y shrek</p>
                            <p className="descripcion"><strong>Descripcion</strong></p>
                        </div>
                        <div className="catledesc">
                            <p>Catle es una adaptación del famoso juego <strong>Wordle</strong>, pero con una temática única: ¡<strong>los gatos</strong>! 😺</p>
                            <p>Los jugadores deben adivinar palabras relacionadas con el mundo felino, poniendo a prueba su conocimiento gatuno.</p>
                            <p>Este proyecto ha sido desarrollado en <strong>lenguaje C</strong> y adaptado para ser <strong>emulado en la Nintendo DS</strong> 🕹️, gracias al uso de la biblioteca <strong>libnds</strong>.</p>
                            <p>¡Descubre cuántas palabras felinas puedes adivinar y disfruta de <strong>Catle</strong> en tu Nintendo DS! 🧩🐾</p>
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
                            <p><strong>Responsables:</strong> Guillermo (algo) Arnau Fàbregas Figueras</p>
                            <p className="descripcion"><strong>Descripcion</strong></p>
                        </div>
                        <div className="Snakedesc">
                            <p><strong>SnakeIA</strong> es una evolución del clásico <strong>Snake</strong>, diseñado para desafiar tus reflejos y estrategia en un duelo contra una inteligencia artificial. 🐍🤖</p>
                            <p>El objetivo es simple: <strong>haz crecer tu serpiente</strong> comiendo manzanas mientras intentas acorralar y vencer a tu rival.</p>
                            <p>Pero hay un giro: <strong>la máquina aprende</strong>. 🧠✨ Gracias a un modelo de <strong>Machine Learning en Python</strong>, la IA mejorará con el tiempo, adaptándose a tu estilo de juego.</p>
                            <p>¿Tienes lo necesario para vencer a una IA en su propio juego? ¡Ponte a prueba en <strong>SnakeIA</strong> y demuestra quién es el verdadero depredador del tablero! 🍏⚡</p>

                        </div>
                    </div>
                        

                    {/* Imagen a la derecha */}
                    <div className="image-section">
                        <img src="/Gato.png" alt="SnakeIa" />
                    </div>
                </div>
            </div>

            <div id="web" className="Web">
                <div className="info-container">
                    {/* Texto a la izquierda */}
                    <div className="text-section">
                        <div className="info-grid">
                            <p><strong>Nombre:</strong> Web Associacion</p>
                            <p><strong>Estado:</strong> En progreso</p>
                            <p><strong>Responsables:</strong> Arnau Fàbregas Figueras, Ivan Carayol Rodríguez y Gaizka Alonso Martínez</p>
                            <p className="descripcion"><strong>Descripcion</strong></p>
                        </div>
                        <div className="Snakedesc">
                            <p>Bienvenido a <strong>CODE URV</strong>, la comunidad de apasionados por la tecnología y la programación en la <strong>Universitat Rovira i Virgili</strong>. 🚀💻</p>
                            <p>Nuestra misión es conectar a estudiantes y entusiastas de la informática a través de <strong>proyectos, eventos y aprendizaje colaborativo</strong>.</p>
                            <p>Esta web, desarrollada con <strong>React</strong>, combina <strong>HTML, CSS y JavaScript</strong> para ofrecerte una experiencia interactiva y dinámica.</p>


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
