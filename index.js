"use strict";
import registerFunc from "./register.js";
import loginFunc from "./login.js";

const registerForm = document.querySelector(".register-form");
const loginForm = document.querySelector(".login-form");
export const userDiv = document.querySelector(".users");

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  registerFunc(e.target);
  e.target.username.value = "";
  e.target.email.value = "";
  e.target.password.value = "";
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  loginFunc(e.target);
});
