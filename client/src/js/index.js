"use strict";

import {
  validatePersonalForm,
  clearFields,
  backToPersonalForm,
} from "./functions/SectionFunctions/personalSection.js";

import {
  backToSubjects,
  validateSubjectsForm,
} from "./functions/SectionFunctions/subjectsSection.js";

import { showModal } from "./functions/generalFunctions.js";
import { completeInscription } from "./functions/SectionFunctions/confirmationSection.js";
import { generateHtmlDatosPersonales } from "./generators/htmlGenerators.js";

$(() => {
  String.prototype.isEmpty = function () {
    return this === null || this === undefined || this.trim().length === 0;
  };

  generateHtmlDatosPersonales();

  $(".container").on("click", "#btn-register", () => validatePersonalForm());
  $(".container").on("click", "#btn-clear", () => clearFields());
  $(".container").on("click", "#personal", () => backToPersonalForm());
  $(".container").on("click", "#subjects", () => backToSubjects());
  $(".container").on("click", "#btn-accept", () => validateSubjectsForm());
  $(".container").on("click", "#btn-finish", () => showModal());
  $("#btn-modal").click(() => completeInscription());
});
