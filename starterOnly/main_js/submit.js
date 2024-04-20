// dom variables
const modalSumit = document.getElementsByClassName("container-confirmation-submit");
const closeModalSubmit = document.getElementsByClassName("close-modal-submit");
const closeBtnConfirmation = document.getElementById('close-btn-confirmation');

// submit event
formSubmit.addEventListener("submit", validate);

function displayModalSubmit() {
    modalbg.style.display = 'none';
    modalSubmit[0].style.display = 'block';
}

function handleSubmission(event) {
    event.preventDefault();
    if (form !== null) throw new Error("Form not found");

    if (validate()) {
        closeModal();
        alert("Merci pour votre participation !");
    }
}
// close submit
function closeSubmit() {
    modalSubmit[0].style.display = 'none';
    first.style.border = 'none';
    last.style.border = 'none';
    email.style.border = 'none';
    birthdate.style.border = 'none';
    quantity.style.border = 'none';
}

closeModalSubmit[0].addEventListener('click', closeSubmit);
closeBtnConfirmation.addEventListener('click', closeSubmit);

