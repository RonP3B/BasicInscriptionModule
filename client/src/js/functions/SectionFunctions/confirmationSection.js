import { personalFormData, subjectsFormData } from "../../data/dataStorage.js";
import { generateHtmlDatosPersonales } from "../../generators/htmlGenerators.js";
import { deleteObjectData } from "../generalFunctions.js";

export const setConfirmData = () => {
  let idx = 1;

  for (const prop in personalFormData)
    $(`#${prop}-info`).text(personalFormData[prop]);

  for (const prop in subjectsFormData) {
    const schedule = subjectsFormData[prop].split("|");
    $(`tbody tr:nth-child(${idx}) td:first-child`).text(prop);
    $(`tbody tr:nth-child(${idx++}) td:nth-child(${schedule[0]})`).text(
      schedule[1]
    );
  }
};

export const completeInscription = () => {
  $(".modal").modal("hide");
  generateHtmlDatosPersonales();
  deleteObjectData(subjectsFormData);
  deleteObjectData(personalFormData);
};
