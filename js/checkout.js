function validate() {
<<<<<<< HEAD
  var fName = document.getElementById("fName");
  var fAddress = document.getElementById("fAddress");
  var fEmail = document.getElementById("fEmail");
  var fLastN = document.getElementById("fLastN");
  var fPassword = document.getElementById("fPassword");
  var fPhone = document.getElementById("fPhone");

  var errorName = document.getElementById("errorName");
  var errorAddress = document.getElementById("errorAddress");
  var errorEmail = document.getElementById("errorEmail");
  var errorLastN = document.getElementById("errorLastN");
  var errorPassword = document.getElementById("errorPassword");
  var errorPhone = document.getElementById("errorPhone");

  var error = 0;
=======
  event.preventDefault();
  let fName = document.getElementById("fName");
  let fAddress = document.getElementById("fAddress");
  let fEmail = document.getElementById("fEmail");
  let fLastN = document.getElementById("fLastN");
  let fPassword = document.getElementById("fPassword");
  let fPhone = document.getElementById("fPhone");

  let errorName = document.getElementById("errorName");
  let errorAddress = document.getElementById("errorAddress");
  let errorEmail = document.getElementById("errorEmail");
  let errorLastN = document.getElementById("errorLastN");
  let errorPassword = document.getElementById("errorPassword");
  let errorPhone = document.getElementById("errorPhone");

  let error = 0;
>>>>>>> lvl-3-dev

  if (fName.value === "" || fName.value.trim().length < 3) {
    document.getElementById("fName").classList.add("is-invalid");
    errorName.style.display = "block";
<<<<<<< HEAD
    console.log("error nombre");
=======
>>>>>>> lvl-3-dev
    error++;
  } else {
    fName.classList.remove("is-invalid");
    errorName.style.display = "none";
  }
  if (
    fEmail.value === "" ||
    fEmail.value.trim().length < 3 ||
    fEmail.value.includes("@") == false
  ) {
    document.getElementById("fEmail").classList.add("is-invalid");
    errorEmail.style.display = "block";
    error++;
  } else {
    fEmail.classList.remove("is-invalid");
    errorEmail.style.display = "none";
  }

  if (fAddress.value === "" || fAddress.value.trim().length < 3) {
    document.getElementById("fAddress").classList.add("is-invalid");
    errorAddress.style.display = "block";

    error++;
  } else {
    fAddress.classList.remove("is-invalid");
    errorAddress.style.display = "none";
  }

  if (fLastN.value === "" || fLastN.value.trim().length < 3) {
    document.getElementById("fLastN").classList.add("is-invalid");
    errorLastN.style.display = "block";

    error++;
  } else {
    fLastN.classList.remove("is-invalid");
    errorLastN.style.display = "none";
  }

  if (
    fPassword.value === "" ||
    !/\d/.test(fPassword.value) ||
    !/[a-zA-Z]/.test(fPassword.value)
  ) {
    document.getElementById("fPassword").classList.add("is-invalid");
    errorPassword.style.display = "block";
    error++;
  } else {
    fPassword.classList.remove("is-invalid");
    errorPassword.style.display = "none";
  }

  if (fPhone.value === "" || !/\d/.test(fPhone.value)) {
    document.getElementById("fPhone").classList.add("is-invalid");
    errorPhone.style.display = "block";
    error++;
  } else {
    fPhone.classList.remove("is-invalid");
    errorPhone.style.display = "none";
  }

  if (error > 0) {
    alert("Error");
  } else {
    alert("OK");
  }
}
