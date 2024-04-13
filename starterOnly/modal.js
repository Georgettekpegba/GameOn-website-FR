// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close");
const formSubmit = document.querySelector('[name= "reserve"]');


// @eventlisteners all
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal
closeBtn.forEach((element) => element.addEventListener("click", closeModal));
// submit event
formSubmit.addEventListener("submit", validate);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal
function closeModal() {
  modalbg.style.display = "none";
}

// creer function validate email
function validateEmail() {

  return true
}

// function validate to form submit
// on initialise la liste input dans la liste
function validate(event) {
  event.preventDefault();

  console.log("toto");
  formData.forEach((elementDiv) => {
    const inputEls = elementDiv.querySelectorAll("input");
    const inputEl = inputEls[0];


    // nouveaux changement
    if (inputEl.value === "") {
      inputEl.setAttribute("data-error-visible", true);
      inputEl.setAttribute("data-error", "Le champ doit être rempli");
    } else {
      inputEl.setAttribute("data-error-visible", false);
    }

    if (inputEl.id === "first") {
      if (inputEl.value.length < 2) {
        elementDiv.setAttribute("data-error-visible", true);
        elementDiv.setAttribute("data-error", "Le champ doit contenir au moins 2 caractères");
      }

    } else if (inputEl.id === "last") {
      if (inputEl.value.length < 2) {
        elementDiv.setAttribute("data-error-visible", true);
        elementDiv.setAttribute("data-error", "Le champ doit contenir au moins 2 caractères");
      }
    }

    else if (inputEl.id === "email") {
      if (!validateEmail(inputEl.value)) {
        inputEl.setAttribute("data-error-visible", true);
        inputEl.setAttribute("data-error", "Veuillez rajouter un @ dans votre email");
      }
    }
    else if (inputEls.id === "birthdate") {
      if (inputEl.value === "") {
        inputEl.setAttribute("data-error-visible", true);
        inputEl.setAttribute("data-error", "Veuillez renseigner votre date de naissance");
      }
    }
    else if (inputEls.id === "quantity") {
      if (inputEl.value === "") {
        inputEl.setAttribute("data-error-visible", true);
        inputEl.setAttribute("data-error", "Veuillez renseigner le nombre de tournois");
      }
    }

    // // check if a location is selected
    let checkboxes = document.querySelectorAll('.checkbox');
    let checked = false;
    checkboxes.forEach(function (checkbox) {
      if (checkbox.checked) {
        checked = true;
      }

    });

    if (!checked) {
      // alert("Vous devez choisir une option");
      return false;
    }

    // alert("Merci pour votre participation !");
    return true;


  }


  )
}

function handleSubmission(event) {
  event.preventDefault();
  if (form !== null) throw new Error("Form not found");

  if (validate()) {
    closeModal();
    alert("Merci pour votre participation !");
  }
}

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}