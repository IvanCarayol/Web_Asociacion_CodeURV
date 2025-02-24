import "../styles/Form.css";

function Form() {
  return (
    <section class="form__section">
      <form class="contacto">
        <h2 class="form__title">¡CONTACTA CON NOSOTROS!</h2>
        <fieldset class="contacto__info-general">
            <legend>Información general</legend>
              <div class="form__input-label__container name">
                <input id="Name" name="Name" class="form__input" type="text" placeholder="Juan" request></input>
                <label for="Name">Nombre:</label>
              </div>
              <div class="form__input-label__container surname">
                <input id="Surname" name="Surname" class="form__input" type="text" placeholder="Pablo"></input>
                <label for="Surname">Apellidos:</label>
              </div>
              <div class="form__input-label__container email">
                <input id="Email" name="Email" class="form__input" type="email" placeholder="ejemplo@correo.com" request></input>
                <label for="Email">Correo:</label>
              </div>
              <div class="form__input-label__container tel">
                <input id="Tel" name="Tel" class="form__input" type="tel" placeholder="1111111111"></input>
                <label for="Tel">Teléfono:</label>
              </div>
        </fieldset>
        <fieldset class="contacto__info-msg"> 
          <legend>Déjanos un mensaje:</legend>
          <div class="form__input-label__container msg">
            <div class="question__container">
              <p class="form__text">¿Estudias Ingeniería Informática?</p>
              <div class="form__input-yes">
                <input type="radio" id="si" name="estudia" value="si"></input>
                <label for="si">Sí</label>
              </div>
              <div class="form__input-no">
                <input type="radio" id="no" name="estudia" value="no"></input>
                <label for="no">No</label>
              </div>
            </div>
          </div> 
          <div class="form__msg-container">
            <p class="form__text">Mensaje:</p>
            <textarea id="mensaje" name="mensaje" placeholder="Tu mensaje" sentences maxLength={500} rows="6"></textarea>
          </div>
        </fieldset>
        <input id="Enviar" name="Enviar" class="enviar" type="submit" value="Enviar"></input>
      </form>
    </section>
    
  );
}

export default Form;
