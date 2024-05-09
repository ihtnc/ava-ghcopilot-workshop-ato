function calculatePasswordStrength(password) {
    let strength = 0;
    if (password.length >= 8) {
        strength++;
    }

    if (/[A-Z]/.test(password)) {
        strength++;
    }

    if (/[a-z]/.test(password)) {
        strength++;
    }

    if (/[!@#\$%\^&\*]/.test(password)) {
        strength++;
    }

    if (/[0-9]/.test(password)) {
        strength++;
    }

    return strength;
}

function getPasswordStrengthLabel(strength) {
    let passwordStrength = '';
    switch (strength) {
        case 1:
            passwordStrength = 'very weak';
            break;
        case 2:
            passwordStrength = 'weak';
            break;
        case 3:
            passwordStrength = 'moderate';
            break;
        case 4:
            passwordStrength = 'strong';
            break;
        case 5:
            passwordStrength = 'very strong';
            break;
        default:
            passwordStrength = 'empty';
            break;
    }
    return passwordStrength;
}

if (typeof module !== 'undefined') {
    module.exports = {
        calculatePasswordStrength,
        getPasswordStrengthLabel
    };
}