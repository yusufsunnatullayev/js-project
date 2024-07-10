"use strict";
import { userDiv } from "./index.js";

export let users = [];
function registerFunc(target) {
  let user = {};
  user.username = target.username.value;
  user.email = target.email.value;
  user.password = target.password.value;

  users.push(user);
  userDiv.innerHTML = ""; // Fixed variable name from userList to userDiv
  users.forEach((item) => {
    let userList = document.createElement("div"); // Declared userList inside forEach loop
    userList.classList.add("user-lists");
    userList.innerHTML = `
    <h3>UserName: <span>${item.username}</span></h3>
    <h3>Email: <span>${item.email}</span></h3>
    <h3>Password: <span>${item.password}</span></h3>
    `;

    userDiv.append(userList);
  });
}

export default registerFunc;
