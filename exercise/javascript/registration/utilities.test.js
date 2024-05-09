const {
  calculatePasswordStrength,
  getPasswordStrengthLabel
} = require('./utilities');

test('calculatePasswordStrength returns 0 for an empty password', () => {
  const password = '';
  const result = calculatePasswordStrength(password);
  expect(result).toBe(0);
});

test('calculatePasswordStrength returns 1 for a password with a lowercase letter', () => {
  const password = 'pass';
  const result = calculatePasswordStrength(password);
  expect(result).toBe(1);
});

test('calculatePasswordStrength returns 2 for a password with length >= 8', () => {
  const password = 'password';
  const result = calculatePasswordStrength(password);
  expect(result).toBe(2);
});

test('calculatePasswordStrength returns 3 for a password with length >= 8 and at least one uppercase letter', () => {
  const password = 'Password';
  const result = calculatePasswordStrength(password);
  expect(result).toBe(3);
});

test('calculatePasswordStrength returns 3 for a password with length >= 8, at least one uppercase letter, and at least one digit', () => {
  const password = 'Password1';
  const result = calculatePasswordStrength(password);
  expect(result).toBe(4);
});

test('calculatePasswordStrength returns 4 for a password with length >= 8, at least one uppercase letter, at least one lowercase letter, and at least one special character', () => {
  const password = 'Password!';
  const result = calculatePasswordStrength(password);
  expect(result).toBe(4);
});

test('calculatePasswordStrength returns 5 for a password with length >= 8, at least one uppercase letter, at least one lowercase letter, at least one special character, and at least one digit', () => {
  const password = 'Password1!';
  const result = calculatePasswordStrength(password);
  expect(result).toBe(5);
});

test('getPasswordStrengthLabel returns "very weak" for strength 1', () => {
  const strength = 1;
  const result = getPasswordStrengthLabel(strength);
  expect(result).toBe('very weak');
});

test('getPasswordStrengthLabel returns "weak" for strength 2', () => {
  const strength = 2;
  const result = getPasswordStrengthLabel(strength);
  expect(result).toBe('weak');
});

test('getPasswordStrengthLabel returns "moderate" for strength 3', () => {
  const strength = 3;
  const result = getPasswordStrengthLabel(strength);
  expect(result).toBe('moderate');
});

test('getPasswordStrengthLabel returns "strong" for strength 4', () => {
  const strength = 4;
  const result = getPasswordStrengthLabel(strength);
  expect(result).toBe('strong');
});

test('getPasswordStrengthLabel returns "very strong" for strength 5', () => {
  const strength = 5;
  const result = getPasswordStrengthLabel(strength);
  expect(result).toBe('very strong');
});

test('getPasswordStrengthLabel returns "empty" for unknown strength', () => {
  const strength = 0;
  const result = getPasswordStrengthLabel(strength);
  expect(result).toBe('empty');
});