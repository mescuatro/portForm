document.addEventListener("DOMContentLoaded", function(){
  const loginB = document.getElementById("loginB");
  const alert = document.getElementById("alerta");

  loginB.addEventListener("click", function () {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
       alert.textContent = "The username or password is invalid!";
       alert.classList.remove("d-none")
       setTimeout(() => {
        alert.classList.add("d-none");
       }, 3000);
    } else {
       window.location.href = "../Main/form.html";
    }
  });
});
