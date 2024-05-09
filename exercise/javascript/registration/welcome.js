function populateWelcome() {
    const data = getData();
    const username = data.username;
    const email = data.email;
    const password = data.password;

    if (!username || !email || !password) {
        window.location.href = 'index.html';
    }

    const welcomeUsername = document.getElementById('welcome-username');
    welcomeUsername.textContent = username;

    const welcomeEmail = document.getElementById('welcome-email');
    welcomeEmail.textContent = email;

    const welcomePassword = document.getElementById('welcome-password');
    const strength = calculatePasswordStrength(password)
    welcomePassword.textContent = getPasswordStrengthLabel(strength);
}

function getData() {
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');

    return {
        username,
        email,
        password
    };
}


function redirectToIndex() {
    window.location.href = 'index.html';
}

if (typeof module !== 'undefined') {
    module.exports = {
        populateWelcome,
        getData,
        redirectToIndex
    };
}
