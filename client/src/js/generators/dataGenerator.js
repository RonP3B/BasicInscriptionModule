export const getPersonalFormFieldsID = () => {
  return ["name", "province", "city", "sector", "street", "careers"];
};

export const getCareerSubjects = () => {
  return [
    {
      career: "Desarrollo de software",
      subjects: [
        "Fundamentos de programación",
        "Programación I",
        "Programación II",
        "Programación III",
        "Inteligencia Artificial",
      ],
    },
    {
      career: "Inteligencia Artificial",
      subjects: [
        "Juegos Inteligentes",
        "Python",
        "Aprendizaje Profundo",
        "IA e IoT",
        "Robótica Inteligente",
      ],
    },
    {
      career: "Seguridad Informática",
      subjects: [
        "Fundamentos de Criptografía",
        "Hácker Ético I",
        "Seguridad de Redes",
        "Informática Forense",
        "Conmutación y Enrutamiento",
      ],
    },
  ];
};
