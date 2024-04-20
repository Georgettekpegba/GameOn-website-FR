// creer function validate email
const formSubmit = document.querySelector('[name= "reserve"]');


function validateEmail() {

    return true
}

// function validate to form submit (on initialise la liste input dans la liste)
function validate(event) {
    event.preventDefault();

    console.log("toto");
    formData.forEach((elementDiv) => {
        const inputEls = elementDiv.querySelectorAll("input");
        const inputEl = inputEls[0];
        console.log('elementDiv', elementDiv);
        console.log('inputEls', inputEls);
        console.log('inputel', inputEl);


        // nouveaux changement
        if (inputEl.value === "") {
            elementDiv.setAttribute("data-error-visible", true);
            elementDiv.setAttribute("data-error", "Le champ doit être rempli");
        } else {
            elementDiv.setAttribute("data-error-visible", false);
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
                elementDiv.setAttribute("data-error-visible", true);
                elementDiv.setAttribute("data-error", "Veuillez rajouter un @ dans votre email");
            }
        }
        else if (inputEl.id === "birthdate") {
            if (inputEl.value === "") {
                elementDiv.setAttribute("data-error-visible", true);
                elementDiv.setAttribute("data-error", "Vous devez entrer votre date de naissance.");
            }
        }
        else if (inputEl.id === "quantity") {
            if (inputEl.value === "") {
                elementDiv.setAttribute("data-error-visible", true);
                elementDiv.setAttribute("data-error", "Veuillez renseigner le nombre de tournois");
            }
        }
        // input ou radio( = type d'input)
        else if (inputEl.id === "location1") {


            inputEls.forEach(function (radio) {
                // radio.checked;
                if (!radio.checked) {
                    elementDiv.setAttribute("data-error-visible", true);
                    elementDiv.setAttribute("data-error", "Vous devez choisir une option");
                }
            })

        }
        return true;


    }


    )
}