const {
  initialiseValidation,
  validateUsername,
  validateEmail,
  validatePassword,
  validateForm,
  validateRequiredField,
  USERNAME_VALIDATION_MESSAGE,
  EMAIL_VALIDATION_MESSAGE,
  PASSWORD_VALIDATION_MESSAGE
} = require("./validation");

describe("validation", () => {
  describe("initialiseValidation", () => {
    let usernameField, emailField, passwordField;

    beforeEach(() => {
      document.body.innerHTML = '<form id="registration-form"><input id="username" type="text" /><input id="email" type="email" /><input id="password" type="password" /><div id="password-strength"></div></form>';

      usernameField = document.getElementById('username');
      emailField = document.getElementById('email');
      passwordField = document.getElementById('password');
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it("should set custom validity to empty when username field is inputted", () => {
      initialiseValidation();

      usernameField.value = "validUname25";
      usernameField.dispatchEvent(new Event('input'));

      expect(usernameField.validity.customError).toBe(false);
      expect(usernameField.validationMessage).toBe("");
    });

    it("should set custom validity to empty when email field is inputted", () => {
      initialiseValidation();

      emailField.value = "test@example.com";
      emailField.dispatchEvent(new Event('input'));

      expect(emailField.validity.customError).toBe(false);
      expect(emailField.validationMessage).toBe("");
    });

    it("should set custom validity to empty when password field is inputted", () => {
      initialiseValidation();

      passwordField.value = "validPassword1!";
      passwordField.dispatchEvent(new Event('input'));

      expect(passwordField.validity.customError).toBe(false);
      expect(passwordField.validationMessage).toBe("");
    });
  });

  describe("validateUsername", () => {
    it("validates that the username is alphanumeric and has a length of 4 to 12 characters", () => {
      expect(validateUsername("validUname25")).toBe(true); //12 characters
      expect(validateUsername("invalid_username")).toBe(false);
      expect(validateUsername("shorty")).toBe(true);
      expect(validateUsername("thisusernameistoolong")).toBe(false);
    });
  });

  describe("validateEmail", () => {
    it("validates that the email is in a standard format", () => {
      expect(validateEmail("test@example.com")).toBe(true);
      expect(validateEmail("invalid_email")).toBe(false);
    });
  });

  describe("validatePassword", () => {
    it("validates that the password is at least 8 characters long and contains at least one letter, one number, and one special character", () => {
      expect(validatePassword("validPassword1!")).toBe(true);
      expect(validatePassword("invalidpassword")).toBe(false);
      expect(validatePassword("short1!")).toBe(false);
      expect(validatePassword("longpasswordwithoutspecialcharacter")).toBe(false);
    });
  });

  describe("validateForm", () => {
    let usernameField, emailField, passwordField;

    beforeEach(() => {
      document.body.innerHTML = '<form id="registration-form"><input id="username" type="text" /><input id="email" type="email" /><input id="password" type="password" /><div id="password-strength"></div></form>';

      usernameField = document.getElementById('username');
      emailField = document.getElementById('email');
      passwordField = document.getElementById('password');
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it("validates the form data and returns the validation result", () => {
      usernameField.value = "validUname25";
      emailField.value = "test@example.com";
      passwordField.value = "validPassword1!";

      const result = validateForm();

      expect(result.isValid).toBe(true);
      expect(result.username).toBe("");
      expect(result.email).toBe("");
      expect(result.password).toBe("");
    });

    it("validates the form data and returns the validation result with error messages", () => {
      usernameField.value = "invalid_username";
      emailField.value = "invalid_email";
      passwordField.value = "invalidpassword";

      const result = validateForm();

      expect(result.isValid).toBe(false);
      expect(result.username).toBe(USERNAME_VALIDATION_MESSAGE);
      expect(result.email).toBe(EMAIL_VALIDATION_MESSAGE);
      expect(result.password).toBe(PASSWORD_VALIDATION_MESSAGE);
    });
  });

  describe("validateRequiredField", () => {
    it("validates that the field is not empty", () => {
      expect(validateRequiredField("")).toBe(false);
      expect(validateRequiredField("notEmpty")).toBe(true);
    });
  });
});