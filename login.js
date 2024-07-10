"use strict";
import { users } from "./register.js";

function loginFunc(target) {
  let username = target.username.value;
  let password = target.password.value;

  let findUser = users.find((user) => user.username === username);

  if (findUser.password === password) {
    alert("Welcome to website!!!");
  } else {
    alert("Get outta here boy");
  }
}

export default loginFunc;
