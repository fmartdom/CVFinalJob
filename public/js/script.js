const contact = document.querySelector('.icon-bar1');
const details = document.querySelector('.icon-bar');
const aside2 = document.querySelector('#aside2');
const aside = document.querySelector('#aside');
const detailsContainer = document.querySelector('.details');
const form = document.querySelector('.contactForm');
const nameInput = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

contact.addEventListener('click', () => {
    if (aside.style.display === "none" ||details.style.display === "block") {
        aside.style.display = "flex";
        aside2.style.display = "none";
        detailsContainer.style.display = "none";
      } else {
        aside.style.display = "none";
        aside2.style.display = "flex";
        detailsContainer.style.display = "none";
      }
}); 

details.addEventListener('click', () => {
    if (aside.style.display === "none") {
        detailsContainer.style.display = "none";
        aside.style.display = "flex";
        aside2.style.display = "none";
      } else {
        aside.style.display = "none";
        detailsContainer.style.display = "block";
        aside2.style.display = "none";

      }
}); 
form.addEventListener("submit", function(event) {
  event.preventDefault();
  let msjNombre = "";
  let msjEmail = "";
  let msjMensaje = "";

  if (nameInput.value.trim() === "") {
    msjNombre = "Por favor, completa el campo Nombre.";
  }

  if (email.value.trim() === "") {
    msjEmail = "Por favor, completa el campo Email.";
  }

  if (mensaje.value.trim() === "") {
    msjMensaje = "Por favor, completa el campo Mensaje.";
  }

  if (msjNombre !== "" || msjEmail !== "" || msjMensaje !== "") {
    alert(msjNombre + "\n" + msjEmail + "\n" + msjMensaje);
  } else {
    // Si todos los campos están completos, puedes realizar alguna acción adicional o simplemente no hacer nada.
    // Aquí puedes agregar el código que deseas ejecutar en caso de que todos los campos estén completos.
  }
});
