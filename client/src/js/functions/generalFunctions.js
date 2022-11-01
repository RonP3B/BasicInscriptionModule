export const deleteObjectData = (obj) => {
  for (const prop in obj) delete obj[prop];
};

export const showAlert = (msg) => {
  $(".alert span").html(msg);
  $(".alert").fadeIn(1000).delay(3000).fadeOut(1000);
};

export const showModal = () => $(".modal").modal("show");
