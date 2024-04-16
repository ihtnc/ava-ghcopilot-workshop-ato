document.querySelector("form").addEventListener("submit", function (event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Get form values
  var developername = document.getElementById("developername").value;
  var developeremail = document.getElementById("developeremail").value;
  var developerpassword = document.getElementById("developerpassword").value;

  // Validate form values
  if (!validateUsername(developername)) {
    alert("Invalid username");
    return;
  }

  if (!validateEmail(developeremail)) {
    alert("Invalid email");
    return;
  }

  if (!validatePassword(developerpassword)) {
    alert("Invalid password");
    return;
  }

  // Display form values
  var formValuesDiv = document.getElementById("formValues");
  formValuesDiv.innerHTML = `
          <p>Developer Name: ${developername}</p>
          <p>Developer Email: ${developeremail}</p>
          <p>Password Length: ${developerpassword.length}</p>
      `;

  // If validation passes, you can submit the form manually
  // event.target.submit();
  alert("Form submitted successfully!");
});
