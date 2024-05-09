const { redirectToIndex, getData, populateWelcome } = require('./welcome');

describe('welcome', () => {
    describe('redirectToIndex', () => {
        let mockLocation;

        beforeEach(() => {
            mockLocation = { href: '' };
            jest.spyOn(window, 'location', 'get').mockReturnValue(mockLocation);
        });

        afterEach(() => {
            jest.restoreAllMocks();
        });

        test('redirectToIndex redirects to index.html', () => {
            redirectToIndex();

            expect(mockLocation.href).toBe('index.html');
          });
    });

    describe('getData', () => {
        let localStorageGetItem;

        beforeEach(() => {
            localStorageGetItem = jest.fn();
            jest.spyOn(window, 'localStorage', 'get').mockImplementation(() => ({
                getItem: localStorageGetItem
            }));
        });

        afterEach(() => {
            jest.restoreAllMocks();
        });

        test('should retrieve data from localStorage', () => {
            getData();

            expect(localStorage.getItem).toHaveBeenCalledTimes(3);
            expect(localStorage.getItem).toHaveBeenCalledWith('username');
            expect(localStorage.getItem).toHaveBeenCalledWith('email');
            expect(localStorage.getItem).toHaveBeenCalledWith('password');
        });

        test('should retrieve data from localStorage', () => {
            const mockUsername = 'testuser';
            const mockEmail = 'test@example.com';
            const mockPassword = 'password123';

            localStorageGetItem.mockReturnValueOnce(mockUsername);
            localStorageGetItem.mockReturnValueOnce(mockEmail);
            localStorageGetItem.mockReturnValueOnce(mockPassword);

            // Act
            const result = getData();

            // Assert
            expect(result).toEqual({
                username: mockUsername,
                email: mockEmail,
                password: mockPassword
            });
        });
    });

    describe('populateWelcome', () => {
        let usernameField, emailField, passwordField;
        let calculatePasswordStrength, getPasswordStrengthLabel;
        let localStorageGetItem;
        let mockLocation;

        beforeEach(() => {
            calculatePasswordStrength = jest.fn();
            getPasswordStrengthLabel = jest.fn();

            window.calculatePasswordStrength = calculatePasswordStrength;
            window.getPasswordStrengthLabel = getPasswordStrengthLabel;

            localStorageGetItem = jest.fn();
            jest.spyOn(window, 'localStorage', 'get').mockImplementation(() => ({
                getItem: localStorageGetItem
            }));

            mockLocation = { href: '' };
            jest.spyOn(window, 'location', 'get').mockReturnValue(mockLocation);

            document.body.innerHTML = '<span id="welcome-username"></span><span id="welcome-email"></span><span id="welcome-password"></span>';

            usernameField = document.getElementById('welcome-username');
            emailField = document.getElementById('welcome-email');
            passwordField = document.getElementById('welcome-password');
        });

        afterEach(() => {
            jest.restoreAllMocks();

            delete window.calculatePasswordStrength;
            delete window.getPasswordStrengthLabel;
        });

        test('should redirect to index.html if data is missing', () => {
            localStorageGetItem.mockReturnValueOnce('');
            localStorageGetItem.mockReturnValueOnce('');
            localStorageGetItem.mockReturnValueOnce('');

            populateWelcome();

            expect(window.location.href).toBe('index.html');
        });

        test('should populate username section with data', () => {
            const username = 'testuser';
            localStorageGetItem.mockReturnValueOnce(username);

            populateWelcome();

            expect(usernameField.textContent).toBe(username);
        });

        test('should populate email section with data', () => {
            const email = 'test@example.com';
            localStorageGetItem.mockReturnValueOnce('username');
            localStorageGetItem.mockReturnValueOnce(email);

            populateWelcome();

            expect(emailField.textContent).toBe(email);
        });

        test('should populate password section with data', () => {
            const password = 'password123';
            localStorageGetItem.mockReturnValueOnce('username');
            localStorageGetItem.mockReturnValueOnce('email');
            localStorageGetItem.mockReturnValueOnce(password);

            const passwordStrength = 3;
            calculatePasswordStrength.mockReturnValue(passwordStrength);

            const passwordLabel = 'label';
            getPasswordStrengthLabel.mockReturnValue(passwordLabel);

            populateWelcome();

            expect(calculatePasswordStrength).toHaveBeenCalledWith(password);
            expect(getPasswordStrengthLabel).toHaveBeenCalledWith(passwordStrength);
            expect(passwordField.textContent).toBe(passwordLabel);
        });
    });
});
