const { submitForm, formLoad, setPasswordStrength, postData } = require('./form');

describe('form.js', () => {
    describe('submitForm', () => {
        let usernameField, emailField, passwordField;
        let localStorageSetItem;
        let validateForm;

        beforeEach(() => {
            validateForm = jest.fn();
            window.validateForm = validateForm;

            localStorageSetItem = jest.fn();
            jest.spyOn(window, 'localStorage', 'get').mockImplementation(() => ({
                setItem: localStorageSetItem
            }));

            document.body.innerHTML = '<form id="registration-form"><input id="username" type="text" /><input id="email" type="email" /><input id="password" type="password" /><input id="password-strength" type="hidden" /></form>';

            usernameField = document.getElementById('username');
            emailField = document.getElementById('email');
            passwordField = document.getElementById('password');

            jest.spyOn(usernameField, 'setCustomValidity');
            jest.spyOn(emailField, 'setCustomValidity');
            jest.spyOn(passwordField, 'setCustomValidity');
        });

        afterEach(() => {
            jest.restoreAllMocks();

            delete window.validateForm;
        });

        test('should validate the form', () => {
            const result = { isValid: true };
            validateForm.mockReturnValue(result);

            const event = new Event('submit');
            submitForm(event);

            expect(validateForm).toHaveBeenCalled();
        });

        test('should set field validity based on validation result', () => {
            const result = {
                isValid: true,
                username: 'validateForm spy username result',
                email: 'validateForm spy email result',
                password: 'validateForm spy password result'
            };
            validateForm.mockReturnValue(result);

            const event = new Event('submit');
            submitForm(event);

            expect(usernameField.setCustomValidity).toHaveBeenCalledWith(result.username);
            expect(emailField.setCustomValidity).toHaveBeenCalledWith(result.email);
            expect(passwordField.setCustomValidity).toHaveBeenCalledWith(result.password);
        });

        test('should post data if form is valid', () => {
            const result = { isValid: true };
            validateForm.mockReturnValue(result);
            usernameField.value = 'username';
            emailField.value = 'email';
            passwordField.value = 'password';

            const event = new Event('submit');
            submitForm(event);

            expect(localStorageSetItem).toHaveBeenCalledWith('username', usernameField.value);
            expect(localStorageSetItem).toHaveBeenCalledWith('email', emailField.value);
            expect(localStorageSetItem).toHaveBeenCalledWith('password', passwordField.value);
        });

        test('should return true if form is valid', () => {
            const result = { isValid: true };
            validateForm.mockReturnValue(result);

            const event = new Event('submit');
            const submitResult = submitForm(event);

            expect(submitResult).toBe(true);
        });

        test('should not proceed with submission if form is invalid', () => {
            const result = { isValid: false };
            validateForm.mockReturnValue(result);

            const event = new Event('submit');
            jest.spyOn(event, 'preventDefault');
            submitForm(event);

            expect(event.preventDefault).toHaveBeenCalled();
        });

        test('should return false if form is invalid', () => {
            const result = { isValid: false };
            validateForm.mockReturnValue(result);

            const event = new Event('submit');
            const submitResult = submitForm(event);

            expect(submitResult).toBe(false);
        });
    });

    describe('formLoad', () => {
        let passwordField, passwordStrength;
        let initialiseValidation, calculatePasswordStrength;

        beforeEach(() => {
            document.body.innerHTML = '<form id="registration-form"><input id="username" type="text" /><input id="email" type="email" /><input id="password" type="password" /><input id="password-strength" type="hidden" /></form>';

            initialiseValidation = jest.fn();
            calculatePasswordStrength = jest.fn();

            window.initialiseValidation = initialiseValidation;
            window.calculatePasswordStrength = calculatePasswordStrength;

            passwordField = document.getElementById('password');
            passwordStrength = document.getElementById('password-strength');
        });

        afterEach(() => {
            jest.restoreAllMocks();

            delete window.initialiseValidation;
            delete window.calculatePasswordStrength;
        });

        test('should initialise validation', () => {
            formLoad();

            expect(initialiseValidation).toHaveBeenCalled();
        });

        test('should add event listener on password field to set password strength', () => {
            const strength = 123;
            calculatePasswordStrength.mockReturnValue(strength);

            formLoad();

            passwordField.value = 'password';
            passwordField.dispatchEvent(new Event('input'));

            expect(calculatePasswordStrength).toHaveBeenCalledWith(passwordField.value);
            expect(passwordStrength.value).toBe(strength.toString());
        });

        test('should hide password strength control by default', () => {
            formLoad();

            expect(passwordStrength.style.display).toBe('none');
        });

        test('should add event listener on password field to hide password strength control', () => {
            formLoad();
            passwordStrength.style.display = 'block';

            passwordField.dispatchEvent(new Event('blur'));
            expect(passwordStrength.style.display).toBe('none');
        });

        test('should add event listener on password field to show password strength control', () => {
            formLoad();
            passwordStrength.style.display = 'none';

            passwordField.dispatchEvent(new Event('focus'));
            expect(passwordStrength.style.display).toBe('block');
        });
    });

    describe('setPasswordStrength', () => {
        let passwordStrength;
        let calculatePasswordStrength;

        beforeEach(() => {
            document.body.innerHTML = '<form id="registration-form"><input id="username" type="text" /><input id="email" type="email" /><input id="password" type="password" /><input id="password-strength" type="hidden" /></form>';

            calculatePasswordStrength = jest.fn();
            window.calculatePasswordStrength = calculatePasswordStrength;

            passwordStrength = document.getElementById('password-strength');
        });

        afterEach(() => {
            jest.restoreAllMocks();

            delete window.calculatePasswordStrength;
        });

        test('should call calculatePasswordStrength', () => {
            const password = 'password';
            setPasswordStrength(password);

            expect(calculatePasswordStrength).toHaveBeenCalledWith(password);
        });

        test('should set password strength value', () => {
            const strength = 123;
            calculatePasswordStrength.mockReturnValue(strength);

            setPasswordStrength('password');

            expect(passwordStrength.value).toBe(strength.toString());
        });
    });

    describe('postData', () => {
        let usernameField, emailField, passwordField;
        let localStorageSetItem;

        beforeEach(() => {
            localStorageSetItem = jest.fn();
            jest.spyOn(window, 'localStorage', 'get').mockImplementation(() => ({
                setItem: localStorageSetItem
            }));

            document.body.innerHTML = '<form id="registration-form"><input id="username" type="text" /><input id="email" type="email" /><input id="password" type="password" /><input id="password-strength" type="hidden" /></form>';

            usernameField = document.getElementById('username');
            emailField = document.getElementById('email');
            passwordField = document.getElementById('password');
        });

        afterEach(() => {
            jest.restoreAllMocks();
        });

        test('should store data to local storage', () => {
            usernameField.value = 'username';
            emailField.value = 'email';
            passwordField.value = 'password';

            postData();

            expect(localStorageSetItem).toHaveBeenCalledWith('username', usernameField.value);
            expect(localStorageSetItem).toHaveBeenCalledWith('email', emailField.value);
            expect(localStorageSetItem).toHaveBeenCalledWith('password', passwordField.value);
        });
    });
});
