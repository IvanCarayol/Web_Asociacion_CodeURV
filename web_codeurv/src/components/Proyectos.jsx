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
                            <p><strong>Encargados:</strong> Bla bla bla</p>
                        </div>
                        
                        <p><strong>Descripción:</strong> Catle es una divertida adaptación del famoso juego <strong>Wordle</strong>, pero con una temática única: ¡<strong>los gatos</strong>! 😺</p>
                        <p>Los jugadores deben adivinar palabras relacionadas con el mundo felino, poniendo a prueba su ingenio y conocimiento gatuno.</p>
                        <p>Este proyecto ha sido desarrollado en <strong>lenguaje C</strong> y adaptado para ser <strong>emulado en la Nintendo DS</strong> 🕹️, gracias al uso de la biblioteca <strong>libnds</strong>.</p>
                        <p>¡Descubre cuántas palabras felinas puedes adivinar y disfruta de <strong>Catle</strong> en tu Nintendo DS! 🧩🐾</p>
                    </div>

                    {/* Imagen a la derecha */}
                    <div className="image-section">
                        <img src="/images/catle.png" alt="Catle Game" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Proyectos;
