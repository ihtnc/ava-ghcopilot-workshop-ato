const {
  validateUsername,
  validateEmail,
  validatePassword,
} = require("./validation");

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
  it("validates that the password has at least one letter, at least one number, and is at least 8 characters long", () => {
    expect(validatePassword("validPassword1")).toBe(true);
    expect(validatePassword("invalidpassword")).toBe(false);
    expect(validatePassword("short1")).toBe(false);
  });
});
