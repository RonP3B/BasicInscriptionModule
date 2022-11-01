import { setCareerSubjects } from "../functions/SectionFunctions/subjectsSection.js";
import { setConfirmData } from "../functions/SectionFunctions/confirmationSection.js";

export const generateHtmlDatosPersonales = () => {
  const HTML_DatosPersonales = `<div class="main__breadcrumb">
          <ul>
            <li><a href="#">Datos personales</a></li>
          </ul>
        </div>
        <div class="main__card card">
          <h5 class="main__card__header card-header">Datos Personales</h5>
          <div class="main__card__body card-body">
            <form class="main__card__body__form">
              <div class="form-group mb-2">
                <label for="name">Nombre</label>
                <input
                  class="form-control form-control-sm"
                  type="text"
                  id="name"
                  autofocus 
                />
              </div>
              <div class="form-group mb-2">
                <label for="province">Provincia</label>
                <input
                  class="form-control form-control-sm"
                  type="text"
                  id="province"
                />
              </div>
              <div class="form-group mb-2">
                <label for="city">Ciudad</label>
                <input
                  class="form-control form-control-sm"
                  type="text"
                  id="city"
                />
              </div>
              <div class="form-group mb-2">
                <label for="sector">Sector</label>
                <input
                  class="form-control form-control-sm"
                  type="text"
                  id="sector"
                />
              </div>
              <div class="form-group mb-2">
                <label for="street">Calle</label>
                <input
                  class="form-control form-control-sm"
                  type="text"
                  id="street"
                />
              </div>
              <div class="form-group mb-2">
                <label for="careers">Carrera</label>
                <select class="form-select form-select-sm" id="careers">
                  <option value="">Selecciona tu carrera</option>
                  <option value="Desarrollo de software">Desarrollo de software</option>
                  <option value="Inteligencia Artificial">Inteligencia Artificial</option>
                  <option value="Seguridad Informática">Seguridad Informática</option>
                </select>
              </div>
              <div class="main__card__body__form__buttons">
                <button
                  type="button"
                  class="btn btn-warning btn-sm"
                  id="btn-clear"
                >
                  Limpiar
                </button>
                <button
                  type="button"
                  class="btn btn-primary btn-sm"
                  id="btn-register"
                >
                  Registrar
                </button>
              </div>
            </form>
          </div>
        </div>`;

  $(".container").html(HTML_DatosPersonales);
};

export const generateHtmlMaterias = () => {
  const HTML_Materias = `<div class="main__breadcrumb">
          <ul>
            <li><a href="#" class="active" id="personal">Datos personales</a></li>
            <li><a href="#">Selección de materias</a></li>
          </ul>
        </div>
        <div class="main__card card">
          <h5 class="main__card__header card-header">Selección De Materias</h5>
          <div class="main__card__body card-body">
            <form class="main__card__body__form">
              <div class="accordion mb-2" id="accordion">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordion"
                  >
                    <div class="accordion-body">
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="radio1"
                          id="radio1A"
                          value="2|Lu 8:00 - 12:00"
                        />
                        <label class="form-check-label" for="radio1A">
                          Lu 8:00 - 12:00
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="radio1"
                          id="radio1B"
                          value="3|Ma 18:00 - 22:00"
                        />
                        <label class="form-check-label" for="radio1B">
                          Ma 18:00 - 22:00
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="radio1"
                          id="radio1C"
                          value="5|Ju 14:00 - 18:00"
                        />
                        <label class="form-check-label" for="radio1C">
                          Ju 14:00 - 18:00
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordion"
                  >
                    <div class="accordion-body">
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="radio2"
                          id="radio2A"
                          value="2|Lu 14:00 - 18:00"
                        />
                        <label class="form-check-label" for="radio2A">
                          Lu 14:00 - 18:00
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="radio2"
                          id="radio2B"
                          value="4|Mi 7:00 - 11:00"
                        />
                        <label class="form-check-label" for="radio2B">
                          Mi 7:00 - 11:00
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="radio2"
                          id="radio2C"
                          value="5|Ju 8:00 - 12:00"
                        />
                        <label class="form-check-label" for="radio2C">
                          Ju 8:00 - 12:00
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordion"
                  >
                    <div class="accordion-body">
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="radio3"
                          id="radio3A"
                          value="2|Lu 18:00 - 22:00"
                        />
                        <label class="form-check-label" for="radio3A">
                          Lu 18:00 - 22:00
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="radio3"
                          id="radio3B"
                          value="4|Mi 13:00 - 17:00"
                        />
                        <label class="form-check-label" for="radio3B">
                          Mi 13:00 - 17:00
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="radio3"
                          id="radio3C"
                          value="6|Vi 7:00 - 11:00"
                        />
                        <label class="form-check-label" for="radio3C">
                          Vi 7:00 - 11:00
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingFour">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordion"
                  >
                    <div class="accordion-body">
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="radio4"
                          id="radio4A"
                          value="3|Ma 8:00 - 12:00"
                        />
                        <label class="form-check-label" for="radio4A">
                          Ma 8:00 - 12:00
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="radio4"
                          id="radio4B"
                          value="4|Mi 18:00 - 22:00"
                        />
                        <label class="form-check-label" for="radio4B">
                          Mi 18:00 - 22:00
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="radio4"
                          id="radio4C"
                          value="6|Vi 18:00 - 22:00"
                        />
                        <label class="form-check-label" for="radio4C">
                          Vi 18:00 - 22:00
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingFive">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordion"
                  >
                    <div class="accordion-body">
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="radio5"
                          id="radio5A"
                          value="3|Ma 14:00 - 18:00"
                        />
                        <label class="form-check-label" for="radio5A">
                          Ma 14:00 - 18:00
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="radio5"
                          id="radio5B"
                          value="5|Ju 18:00 - 22:00"
                        />
                        <label class="form-check-label" for="radio5B">
                          Ju 18:00 - 22:00
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="radio5"
                          id="radio5C"
                          value="6|Vi 13:00 - 17:00"
                        />
                        <label class="form-check-label" for="radio5C">
                          Vi 13:00 - 17:00
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="main__card__body__form__buttons">
                <button
                  type="button"
                  class="btn btn-primary btn-sm"
                  id="btn-accept"
                >
                  Aceptar
                </button>
              </div>
            </form>
          </div>
        </div>`;

  $(".container").html(HTML_Materias);
  setCareerSubjects();
};

export const generateHtmlConfirmar = () => {
  const HTML_Confirmar = `<div class="main__breadcrumb">
          <ul>
            <li>
              <a href="#" class="active" id="personal">Datos personales</a>
            </li>
            <li>
              <a href="#" class="active" id="subjects">Selección de materias</a>
            </li>
            <li>
              <a href="#">Confirmación</a>
            </li>
          </ul>
        </div>
        <div class="main__card card">
          <h5 class="main__card__header card-header">Confirmación</h5>
          <div class="main__card__body card-body">
            <div class="main__card__body__info row">
              <h3>Datos Personales</h3>
              <div class="col-6 info-col">
                <div class="info-container">
                  <h6>Nombre:</h6>
                  <p id="name-info"></p>
                </div>
                <div class="info-container">
                  <h6>Provincia:</h6>
                  <p id="province-info"></p>
                </div>
                <div class="info-container">
                  <h6>Ciudad:</h6>
                  <p id="city-info"></p>
                </div>
              </div>
              <div class="col-6 info-col">
                <div class="info-container">
                  <h6>Sector:</h6>
                  <p id="sector-info"></p>
                </div>
                <div class="info-container">
                  <h6>Calle:</h6>
                  <p id="street-info"></p>
                </div>
                <div class="info-container">
                  <h6>Carrera:</h6>
                  <p id="careers-info"></p>
                </div>
              </div>
            </div>
            <table class="main__card__body__table mt-3 mb-2">
              <thead>
                <tr>
                  <th>Materias</th>
                  <th>Lu</th>
                  <th>Ma</th>
                  <th>Mi</th>
                  <th>Ju</th>
                  <th>Vi</th>
                  <th>Sa</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <div class="main__card__body__form__buttons">
              <button
                type="button"
                class="btn btn-success btn-sm"
                id="btn-finish"
              >
                Finalizar
              </button>
            </div>
          </div>
        </div>`;

  $(".container").html(HTML_Confirmar);
  setConfirmData();
};
