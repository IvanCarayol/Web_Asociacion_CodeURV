import "../styles/Form.css";

function Form() {
  return (
    <section class="form__section">
      <form class="contacto">
        <h2 class="form__title">¡CONTACTA CON NOSOTROS!</h2>
        <fieldset class="contacto__info-general">
            <legend>Información general</legend>
              <div class="form__input-label__container">
                <input id="Name" name="Name" class="form__input" type="text" placeholder="Juan" request></input>
                <label for="Name">Tu nombre:</label>
              </div>
              <div class="form__input-label__container">
                <input id="Apellido" name="Apellido" class="form__input" type="text" placeholder="Pablo"></input>
                <label for="Apellido">Tus Apellidos:</label>
              </div>
              <div class="form__input-label__container">
                <input id="Email" name="Email" class="form__input" type="email" placeholder="ejemplo@correo.com" request></input>
                <label for="Email">Tu correo:</label>
              </div>
              <div class="form__input-label__container">
                <input id="Tel" name="Tel" class="form__input" type="tel" placeholder="1111111111"></input>
                <label for="Tel">Tu teléfono:</label>
              </div>
        </fieldset>
        <fieldset class="contacto__info-msg"> 
          <legend>Déjanos un mensaje:</legend>
          <div class="form__input-label__container">
            <p class="form__text">¿Estudias Ingeniería Informática?</p>
            <input type="radio" id="si" name="estudia" value="si"></input>
            <label for="si">Sí</label>
            <input type="radio" id="no" name="estudia" value="no"></input>
            <label for="no">No</label>
          </div> 
          <p class="form__text">Mensaje:</p>
          <textarea id="mensaje" name="mensaje" placeholder="Tu mensaje"></textarea>
        </fieldset>
        <input id="Enviar" name="Enviar" type="submit" value="Enviar"></input>
      </form>
    </section>
    
  );
}

export default Form;
