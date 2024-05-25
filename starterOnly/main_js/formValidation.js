// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close");

// @eventlisteners all
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal
closeBtn.forEach((element) => element.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}
// close modal
function closeModal() {
    modalbg.style.display = "none";
}
// function navigation edition
function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}




// Dom elements
const formSubmit = document.querySelector('[name= "reserve"]');
let dialog = document.getElementById("openDialog");

// Evenements
formSubmit.addEventListener("submit", validate);

// Email validation regex
function validateEmail(email) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}

// function validate to form submit (on initialise la liste input dans la liste)
function validate(event) {
    // prevent modal to submit if there is an error
    event.preventDefault();
    // retourner les erreurs
    let nbError = 0;


    // boucle sur les éléments du formulaire
    formData.forEach((elementDiv) => {
        // les elements input de la Div en cours
        const inputEls = elementDiv.querySelectorAll("input");
        // Le 1er elements de la liste
        const inputEl = inputEls[0];
        // Check comme on est dans une boucle si le champs est first ou last
        if (inputEl.id === "first" || inputEl.id === "last") {
            // Si la valeur du champs est vide, on affiche un message d'erreur
            if (inputEl.value === "") {
                elementDiv.setAttribute("data-error-visible", true);
                elementDiv.setAttribute("data-error", "Le champ doit être rempli");
                nbError += 1;
            }
            // Si la valeur des caractères est inférieur à 2, on affiche un message d'erreur
            else if (inputEl.value.length < 2) {
                elementDiv.setAttribute("data-error-visible", true);
                elementDiv.setAttribute(
                    "data-error",
                    "Le champ doit contenir au moins 2 caractères"
                );
                nbError += 1;
            }
            // sinon ne pas afficher d'erreur 
            else {
                elementDiv.setAttribute("data-error-visible", false);
                elementDiv.setAttribute("data-error", "");
            }
        }

        else if (inputEl.id === "email") {
            if (!validateEmail(inputEl.value)) {
                elementDiv.setAttribute("data-error-visible", true);
                elementDiv.setAttribute(
                    "data-error",
                    "Veuillez rajouter un @ dans votre email"
                );
                nbError += 1;
            } else {
                elementDiv.setAttribute("data-error-visible", false);
                elementDiv.setAttribute("data-error", "");
            }
        } else if (inputEl.id === "birthdate") {
            if (inputEl.value === "") {
                elementDiv.setAttribute("data-error-visible", true);
                elementDiv.setAttribute(
                    "data-error",
                    "Vous devez entrer votre date de naissance."
                );
                nbError += 1;
            } else {
                elementDiv.setAttribute("data-error-visible", false);
                elementDiv.setAttribute("data-error", "");
            }
        } else if (inputEl.id === "quantity") {
            if (inputEl.value === "") {
                elementDiv.setAttribute("data-error-visible", true);
                elementDiv.setAttribute(
                    "data-error",
                    "Veuillez renseigner le nombre de tournois"
                );
                nbError += 1;
            } else if (inputEl.value < 0 || inputEl.value > 100) {
                elementDiv.setAttribute("data-error-visible", true);
                elementDiv.setAttribute(
                    "data-error",
                    "veuillez renseigner un nombre entre 0 et 99"
                );
                nbError += 1;
            } else {
                elementDiv.setAttribute("data-error-visible", false);
                elementDiv.setAttribute("data-error", "");
            }
        } else if (inputEl.id === "location1") {
            let oneChecked = 0;

            inputEls.forEach(function (radio) {
                if (radio.checked) {
                    oneChecked += 1;
                }
            });

            if (oneChecked === 0) {
                elementDiv.setAttribute("data-error-visible", true);
                elementDiv.setAttribute("data-error", "Vous devez choisir une option");
                nbError += 1;
            }
            else {
                elementDiv.setAttribute("data-error-visible", false);
                elementDiv.setAttribute("data-error", "");
            }
        }

        //  Term of use
        else if (inputEl.id === "checkbox1") {
            if (!inputEl.checked) {
                elementDiv.setAttribute("data-error-visible", true);
                elementDiv.setAttribute(
                    "data-error",
                    "Vous devez vérifier que vous acceptez les termes et conditions"
                );
                nbError += 1;

            } else {
                elementDiv.setAttribute("data-error-visible", false);
                elementDiv.setAttribute("data-error", "");
            }
        }

        if (nbError === 0) {
            closeModal()
            dialog.showModal();

        }

    });
}

document.addEventListener("DOMContentLoaded", () => {
    const closeButtons = dialog.querySelectorAll(
        ".close-modal-submit, #close-btn-confirmation"
    );

    closeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            dialog.close();
            // dialog.reset()
        });
    });

    document.addEventListener("DOMContentLoaded", () => {
        const closeButtons = dialog.querySelectorAll(
            ".close-modal-submit, #close-btn-confirmation"
        );

        closeButtons.forEach((button) => {
            button.addEventListener("click", () => {
                dialog.close();
                const form = dialog.querySelector("form");
                if (form) {
                    form.reset();
                }
            });
        });
    })

});
