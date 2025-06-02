// Exercise 6
function validate() {
  event.preventDefault();
  // Get the input fields
  var fName = document.getElementById("fName");
  var fAddress = document.getElementById("fAddress");
  var fEmail = document.getElementById("fEmail");
  var fLastN = document.getElementById("fLastN");
  var fPassword = document.getElementById("fPassword");
  var fPhone = document.getElementById("fPhone");

  // Get the error elements
  var errorName = document.getElementById("errorName");
  var errorAddress = document.getElementById("errorAddress");
  var errorEmail = document.getElementById("errorEmail");
  var errorLastN = document.getElementById("errorLastN");
  var errorPassword = document.getElementById("errorPassword");
  var errorPhone = document.getElementById("errorPhone");

  var error = 0;
  // Validate fields entered by the user: name, phone, password, and email

  if (fName.value === "" || fName.value.trim().length < 3) {
    document.getElementById("fName").classList.add("is-invalid");
    errorName.style.display = "block"; // Mostrar el error
    console.log("error nombre");
    error++;
  }
  console.log(error, "name");

  if (
    fEmail.value === "" ||
    fEmail.value.trim().length < 3 ||
    fEmail.value.includes("@") == false
  ) {
    document.getElementById("fEmail").classList.add("is-invalid");
    errorEmail.style.display = "block";
    console.log("error email");
    error++;
  }
  console.log(error, "email");

  if (fAddress.value === "" || fAddress.value.trim().length < 3) {
    document.getElementById("fAddress").classList.add("is-invalid");
    errorAddress.style.display = "block";
    console.log("error Address");
    error++;
  }
  console.log(error, "Adress");

  if (fLastN.value === "" || fLastN.value.trim().length < 3) {
    document.getElementById("fLastN").classList.add("is-invalid");
    errorLastN.style.display = "block";
    console.log("error fLastN");
    error++;
  }
  console.log(error, "LastN");

  if (
    fPassword.value === "" ||
    !/\d/.test(fPassword.value) ||
    !/[a-zA-Z]/.test(fPassword.value)
  ) {
    document.getElementById("fPassword").classList.add("is-invalid");
    errorPassword.style.display = "block";
    console.log("error Password");
    error++;
  }
  console.log(error, "Password");

  if (fPhone.value === "" || !/\d/.test(fPhone.value)) {
    document.getElementById("fPhone").classList.add("is-invalid");
    errorPhone.style.display = "block";
    console.log("error Phone");
    error++;
  }
  console.log(error, "Phone");

  if (error > 0) {
    alert("Error");
  } else {
    alert("OK");
  }
}
