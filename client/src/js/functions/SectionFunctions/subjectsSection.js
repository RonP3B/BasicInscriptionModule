import { getCareerSubjects } from "../../generators/dataGenerator.js";
import {
  generateHtmlConfirmar,
  generateHtmlMaterias,
} from "../../generators/htmlGenerators.js";
import { subjectsFormData, personalFormData } from "../../data/dataStorage.js";
import { showAlert } from "../generalFunctions.js";

export const setSubjectsData = () => {
  let idx = 1;

  for (const subject in subjectsFormData)
    $(`input[name="radio${idx++}"][value="${subjectsFormData[subject]}"]`).prop(
      "checked",
      true
    );
};

export const setCareerSubjects = () => {
  const careerSubjects = getCareerSubjects();

  const subjects = careerSubjects.filter(
    (obj) => obj.career === personalFormData.careers
  )[0].subjects;

  for (const idx in subjects)
    $(".accordion-button").eq(idx).text(subjects[idx]);
};

const highlightEmptySubjects = () => {
  for (let i = 0; i < $("* .accordion-button").length; i++) {
    if ($(`* input[name="radio${i + 1}"]:checked`).length !== 1) {
      $(".accordion-button").eq(i).addClass("border border-danger");
    } else {
      $(".accordion-button").eq(i).removeClass("border border-danger");
    }
  }
};

const getSelectedSubjects = () => {
  for (let i = 0; i < $("* .accordion-button").length; i++)
    subjectsFormData[$(".accordion-button").eq(i).text()] = $(
      `input[name="radio${i + 1}"]:checked`
    ).val();
};

const checkRadioButtons = () => {
  for (let i = 1; i <= $("* .accordion-item").length; i++)
    if ($(`* input[name="radio${i}"]:checked`).length !== 1) return false;

  return true;
};

export const validateSubjectsForm = () => {
  if (checkRadioButtons()) {
    getSelectedSubjects();
    generateHtmlConfirmar();
  } else {
    highlightEmptySubjects();
    showAlert("Debes seleccionar un horario para cada materia");
  }
};

export const backToSubjects = () => {
  generateHtmlMaterias();
  setSubjectsData();
};
