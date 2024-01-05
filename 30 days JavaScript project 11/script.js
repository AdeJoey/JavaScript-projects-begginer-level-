let container = document.querySelector(".container"); 
// let LoginPage = document.querySelector(".login-wrapper");
// let SignupPage = document.querySelector(".signUp-wrapper");
// let regUsername = document.querySelector("#reg-username");
// let regEmail = document.querySelector("#reg-email");
// let regPassword = document.querySelector("#reg-password");
// let userEmail = document.getElementById("user-email");
// let userPassword = document.getElementById("user-password");
let loginBtn = document.getElementById("loginNow");
let regBtn = document.getElementById("regNow");


regBtn.addEventListener("click", ()=>{
  container.classList.add("change-form");
})
loginBtn.addEventListener("click", ()=>{
  container.classList.remove("change-form");
})




 