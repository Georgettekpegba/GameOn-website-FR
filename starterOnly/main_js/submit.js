// DOM variables
const modalSubmit = document.getElementsByClassName("container-confirmation-submit")[0];
const closeModalSubmit = document.getElementsByClassName("close-modal-submit")[0];
const closeBtnConfirmation = document.getElementById('close-btn-confirmation');
let closeDialog = document.querySelector('closeDialog');
let openDialog = document.querySelector('#openDialog');
let submit = document.querySelector('thankModal');



//  thanks modal

openDialog.addEventListener("click", () => {
    dialog.show();
});

closeDialog.addEventListener("click", () => {
    dialog.close();
});

// Function to display the confirmation modal
function displayConfirmationModal() {
    modalSubmit.style.display = 'block';
}

// Function to handle form submission
function handleSubmission(event) {
    event.preventDefault();
    if (formSubmit === null) {
        console.error("Form not found");
        return;
    }

    // Validate the form
    const isValid = validate(event);

    if (isValid) {
        displayConfirmationModal();
    } else {
        console.error('Form validation failed.');
    }
}

// Function to close the confirmation modal
function closeConfirmationModal() {
    modalSubmit.style.display = 'none';
    first.style.border = 'none';
    last.style.border = 'none';
    email.style.border = 'none';
    birthdate.style.border = 'none';
    quantity.style.border = 'none';
}

formSubmit.addEventListener("submit", validate);


closeModalSubmit.addEventListener('click', closeConfirmationModal);


closeBtnConfirmation.addEventListener('click', closeConfirmationModal);
