document.addEventListener("DOMContentLoaded", function(){
  const formB = document.getElementById("formB");
  const alert = document.getElementById("alerta");

  formB.addEventListener("click", function () {
    const name = document.getElementById("name").value.trim();
    const surname = document.getElementById("surname").value.trim();
    const age = document.getElementById("age").value.trim();
    const country = document.getElementById("country").value.trim();
    const number = document.getElementById("phNumber").value.trim();

    if (name === "" || surname === "" || age === "" || country === "" || number === "") {
       alert.textContent = "Data is missing!";
       alert.classList.remove("d-none");
    } else {
       alert.textContent = "Perfect! Your pizza is on the way 😎";
       alert.classList.remove("d-none");
    }
  });
});
