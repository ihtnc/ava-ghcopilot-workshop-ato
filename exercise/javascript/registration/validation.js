const USERNAME_PATTERN = /^[a-zA-Z0-9]{4,12}$/;
const EMAIL_PATTERN = /^[a-zA-Z0-9\._%\+\-]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,}$/;
const PASSWORD_PATTERN = /(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

const USERNAME_VALIDATION_MESSAGE = 'Username must be 4-12 characters long and contain only letters and numbers.';
const EMAIL_VALIDATION_MESSAGE = 'Email must be in an email format.';
const PASSWORD_VALIDATION_MESSAGE = 'Password must be at least 8 characters long and contain at least one letter, one number, and one special character.';

function initialiseValidation() {
    const usernameField = document.getElementById('username');
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');

    usernameField.addEventListener('input', () => {
        usernameField.setCustomValidity('');
    });

    emailField.addEventListener('input', () => {
        emailField.setCustomValidity('');
    });

    passwordField.addEventListener('input', (e) => {
        passwordField.setCustomValidity('');
    });
}

function validateUsername(username) {
    return USERNAME_PATTERN.test(username) && validateRequiredField(username);
}

function validateEmail(email) {
    return EMAIL_PATTERN.test(email) && validateRequiredField(email);
}

function validatePassword(password) {
    return PASSWORD_PATTERN.test(password) && validateRequiredField(password);
}

function validateRequiredField(field) {
    return field.trim() !== '';
}

function validateForm() {
    const usernameField = document.getElementById('username');
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');

    const username = usernameField.value;
    const email = emailField.value;
    const password = passwordField.value;

    const usernameValid = validateUsername(username);
    const emailValid = validateEmail(email);
    const passwordValid = validatePassword(password);

    return {
        isValid: usernameValid && emailValid && passwordValid,
        username: usernameValid ? '' : USERNAME_VALIDATION_MESSAGE,
        email: emailValid ? '' : EMAIL_VALIDATION_MESSAGE,
        password: passwordValid ? '' : PASSWORD_VALIDATION_MESSAGE,
    };
}

if (typeof module !== 'undefined') {
    module.exports = {
        initialiseValidation,
        validateUsername,
        validateEmail,
        validatePassword,
        validateRequiredField,
        validateForm,
        USERNAME_VALIDATION_MESSAGE,
        EMAIL_VALIDATION_MESSAGE,
        PASSWORD_VALIDATION_MESSAGE
    };
}
