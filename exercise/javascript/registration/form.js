function formLoad() {
    initialiseValidation();

    const passwordField = document.getElementById('password');

    passwordField.addEventListener('input', (e) => {
        setPasswordStrength(passwordField.value);
    });

    const passwordStrength = document.getElementById('password-strength');
    passwordStrength.style.display = 'none';
    passwordField.addEventListener('blur', () => {
        passwordStrength.style.display = 'none';
    });

    passwordField.addEventListener('focus', () => {
        passwordStrength.style.display = 'block';
    });
}

function submitForm(event) {
    const result = validateForm();

    const usernameField = document.getElementById('username');
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');

    usernameField.setCustomValidity(result.username)
    emailField.setCustomValidity(result.email);
    passwordField.setCustomValidity(result.password);

    if (!result.isValid) {
        event.preventDefault();
        return false;
    }

    postData();

    return true;
}

function postData() {
    const usernameField = document.getElementById('username');
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');

    const username = usernameField.value;
    const email = emailField.value;
    const password = passwordField.value;

    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
}

function setPasswordStrength(password) {
    const strengthMeter = document.getElementById('password-strength');
    const strength = calculatePasswordStrength(password);
    strengthMeter.value = strength;
}

if (typeof module !== 'undefined') {
    module.exports = {
        formLoad,
        submitForm,
        postData,
        setPasswordStrength
    };
}