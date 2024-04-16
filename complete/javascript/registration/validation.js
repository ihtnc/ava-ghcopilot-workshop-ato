function validateUsername(username) {
  const regex = /^[a-zA-Z0-9]{4,12}$/;
  return regex.test(username);
}

function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

function validatePassword(password) {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return regex.test(password);
}

module.exports = {
  validateUsername,
  validateEmail,
  validatePassword,
};
