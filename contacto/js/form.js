// Form by: https://www.geeksforgeeks.org/create-contact-form-template-in-tailwind-css/?ref=oin_asr1

let contactForm = document.querySelector('#contactForm');
let nameInput = document.querySelector('#name');
let nameValidation = document.querySelector('#nameValidation');
let emailInput = document.querySelector('#email');
let emailValidation = document.querySelector('#emailValidation');
let subjectInput = document.querySelector('#subject');
let subjectValidation = document.querySelector('#subjectValidation');
let messageInput = document.querySelector('#message');
let messageValidation = document.querySelector('#messageValidation');

const validateInput = (input, validationElement, validationFunction) => {
    if (!validationFunction(input.value.trim())) {
        validationElement.classList.remove('hidden');
        return false;
    } else {
        validationElement.classList.add('hidden');
        return true;
    }
};

const validateName = () =>   validateInput(nameInput, nameValidation, (name) => 
    /^[a-zA-ZÀ-ÿ\s]+$/.test(name.trim()) && name.trim() !== ''
  );
const validateEmail = () => validateInput(emailInput, emailValidation, (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
const validateSubject = () => validateInput(subjectInput, subjectValidation, (subject) => subject !== '');
const validateMessage = () => validateInput(messageInput, messageValidation, (message) => message !== '');

const validateForm = () => {
    return validateName() && validateEmail() && validateSubject() && validateMessage();
};

contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    if (validateForm()) {
        alert('Mensaje enviado con éxito!');
        this.submit();
    }
});

const inputs = [nameInput, emailInput, subjectInput, messageInput];
inputs.forEach(input => {
    input.addEventListener('input', function () {
        switch (input.id) {
            case 'name':
                validateName();
                break;
            case 'email':
                validateEmail();
                break;
            case 'subject':
                validateSubject();
                break;
            case 'message':
                validateMessage();
                break;
            default:
                break;
        }
    });
});