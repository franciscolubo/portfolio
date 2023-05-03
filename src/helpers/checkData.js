export default function checkData(contact) {
  const regexEmail =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  const regexName = /^[A-Za-z]*$/;
  let itsOkay = true;
  //! Correo
  if (!contact.correo) {
    const errorMail = document.getElementById("email");
    errorMail.innerText = "Debes colocar tu email";
    errorMail.style.color = "red";
    itsOkay = false;
  } else if (!regexEmail.test(contact.correo)) {
    const errorMail = document.getElementById("email");
    errorMail.innerText = "El email que colocaste no es valido";
    errorMail.style.color = "red";
    itsOkay = false;
  } else {
    const errorMail = document.getElementById("email");
    errorMail.style.color = "transparent";
  }

  //! Nombre
  if (!contact.nombre) {
    const errorName = document.getElementById("nombre");
    errorName.innerText = "Coloca un nombre";
    errorName.style.color = "red";
    itsOkay = false;
  } else if (!regexName.test(contact.nombre)) {
    const errorName = document.getElementById("nombre");
    errorName.innerText = "Nombre invalido";
    errorName.style.color = "red";
    itsOkay = false;
  } else {
    const errorName = document.getElementById("nombre");
    errorName.style.color = "transparent";
  }

  //! Apellido
  if (!contact.apellido) {
    const errorLast = document.getElementById("apellido");
    errorLast.innerText = "Coloca un apellido";
    errorLast.style.color = "red";
    itsOkay = false;
  } else if (!regexName.test(contact.apellido)) {
    const errorLast = document.getElementById("apellido");
    errorLast.innerText = "Apellido invalido";
    errorLast.style.color = "red";
    itsOkay = false;
  } else {
    const errorLast = document.getElementById("apellido");
    errorLast.style.color = "transparent";
  }

  //! Asunto
  if (!contact.asunto) {
    const errorAsunto = document.getElementById("asunto");
    errorAsunto.innerText = "Coloca un asunto";
    errorAsunto.style.color = "red";
    itsOkay = false;
  } else {
    const errorAsunto = document.getElementById("asunto");
    errorAsunto.style.color = "transparent";
  }

  //! Mensaje
  if (!contact.mensaje) {
    const errorMsg = document.getElementById("mensaje");
    errorMsg.innerText = "¡Dejame un mensaje!";
    errorMsg.style.color = "red";
    itsOkay = false;
  } else {
    const errorMsg = document.getElementById("mensaje");
    errorMsg.style.color = "transparent";
  }

  return itsOkay;
}
