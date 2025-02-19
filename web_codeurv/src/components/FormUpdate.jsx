import "../styles/FormUpdate.css";

function FormUpdate() {
  return (
    <div className="formDiv">
      <h2 className="form__title">¡CONTACTA CON NOSOTROS!</h2>
      <form className="contacto">
        <div className="form__input-label__container name">
          <input
            id="Name"
            name="Name"
            className="form__input"
            type="text"
            placeholder="Juan"
            request
          ></input>
          <label for="Name">Nombre:</label>

          <input
            id="Surname"
            name="Surname"
            className="form__input"
            type="text"
            placeholder="Pablo"
          ></input>
          <label for="Surname">Apellidos:</label>
        </div>
        <div className="form__input-label__container email">
          <input
            id="Email"
            name="Email"
            className="form__input"
            type="email"
            placeholder="ejemplo@correo.com"
            request
          ></input>
          <label for="Email">Correo:</label>
        </div>
        <div className="form__input-label__container tel">
          <input
            id="Tel"
            name="Tel"
            className="form__input"
            type="tel"
            placeholder="1111111111"
          ></input>
          <label for="Tel">Teléfono:</label>
        </div>

        <div className="form__input-label__container msg">
          <div className="question__container">
            <p className="form__text">¿Estudias Ingeniería Informática?</p>
            <div className="form__input-yes">
              <input type="radio" id="si" name="estudia" value="si"></input>
              <label for="si">Sí</label>
            </div>
            <div className="form__input-no">
              <input type="radio" id="no" name="estudia" value="no"></input>
              <label for="no">No</label>
            </div>
          </div>
        </div>
        <div className="form__msg-container">
          <p className="form__text">Mensaje:</p>
          <textarea
            id="mensaje"
            name="mensaje"
            placeholder="Tu mensaje"
            sentences
            maxLength={500}
            rows="6"
          ></textarea>
        </div>
        <input
          id="Enviar"
          name="Enviar"
          className="enviar"
          type="submit"
          value="Enviar"
        ></input>
      </form>
    </div>
  );
}

export default FormUpdate;
