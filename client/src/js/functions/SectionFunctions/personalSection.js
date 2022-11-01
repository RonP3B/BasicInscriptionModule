import { getPersonalFormFieldsID } from "../../generators/dataGenerator.js";
import { deleteObjectData, showAlert } from "../generalFunctions.js";
import { personalFormData, subjectsFormData } from "../../data/dataStorage.js";
import {
  generateHtmlMaterias,
  generateHtmlDatosPersonales,
} from "../../generators/htmlGenerators.js";

const checkFields = () => {
  const fields = getPersonalFormFieldsID();

  for (const field of fields) if ($(`#${field}`).val().isEmpty()) return false;

  return true;
};

const highlightEmptyFields = () => {
  const fields = getPersonalFormFieldsID();

  for (const field of fields)
    $(`#${field}`).val().isEmpty()
      ? $(`#${field}`).addClass("is-invalid")
      : $(`#${field}`).removeClass("is-invalid");
};

export const clearFields = () => {
  const fields = getPersonalFormFieldsID();

  for (const field of fields) $(`#${field}`).val("").removeClass("is-invalid");

  $(`#${fields[0]}`).focus();
};

export const validatePersonalForm = () => {
  const fields = getPersonalFormFieldsID();

  if (checkFields(fields)) {
    getPersonalFormData(fields);
    generateHtmlMaterias();
  } else {
    highlightEmptyFields(fields);
    showAlert("Debes completar todos los campos");
  }
};

const getPersonalFormData = () => {
  const fields = getPersonalFormFieldsID();
  for (const field of fields) personalFormData[field] = $(`#${field}`).val();
};

export const setPersonalFormData = () => {
  const fields = getPersonalFormFieldsID();
  for (const field of fields) $(`#${field}`).val(personalFormData[field]);
};

export const backToPersonalForm = () => {
  generateHtmlDatosPersonales();
  setPersonalFormData();

  if (Object.keys(subjectsFormData).length !== 0)
    deleteObjectData(subjectsFormData);
};
