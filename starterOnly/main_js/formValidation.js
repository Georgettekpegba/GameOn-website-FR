// creer function validate email
const formSubmit = document.querySelector('[name= "reserve"]');
// Evenements
formSubmit.addEventListener("submit", validate);

// Email validation regex
function validateEmail(email) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}

// function validate to form submit (on initialise la liste input dans la liste)
function validate(event) {
    event.preventDefault();

    console.log("toto");
    formData.forEach((elementDiv) => {
        const inputEls = elementDiv.querySelectorAll("input");
        const inputEl = inputEls[0];

        // nouveaux changement

        if (inputEl.id === "first" || inputEl.id === "last") {
            if (inputEl.value === "") {
                elementDiv.setAttribute("data-error-visible", true);
                elementDiv.setAttribute("data-error", "Le champ doit être rempli");
            } else if (inputEl.value.length < 2) {
                elementDiv.setAttribute("data-error-visible", true);
                elementDiv.setAttribute(
                    "data-error",
                    "Le champ doit contenir au moins 2 caractères"
                );
            } else {
                elementDiv.setAttribute("data-error-visible", false);
                elementDiv.setAttribute("data-error", "");
            }
        } else if (inputEl.id === "email") {
            if (!validateEmail(inputEl.value)) {
                elementDiv.setAttribute("data-error-visible", true);
                elementDiv.setAttribute(
                    "data-error",
                    "Veuillez rajouter un @ dans votre email"
                );
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
            } else if (inputEl.value < 0 || inputEl.value > 100) {
                elementDiv.setAttribute("data-error-visible", true);
                elementDiv.setAttribute(
                    "data-error",
                    "veuillez renseigner un nombre entre 0 et 99"
                );
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
            }
        }

        // 04 MAI
        // email idem
        else if (inputEl.value < 0 || inputEl.value > 100) {
            elementDiv.setAttribute("data-error-visible", true);
            elementDiv.setAttribute(
                "data-error",
                "veuillez renseigner un nombre entre 0 et 99"
            );
        } else {
            elementDiv.setAttribute("data-error-visible", false);
            elementDiv.setAttribute("data-error", "");
        }
    });
}
