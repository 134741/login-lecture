"use strict";

const home = (req, res) => {
  res.render("home/index");
};

const login = (req, res) => {
  res.render("home/login");
}

// object 로 exports 해준다. 
module.exports = {
    home,
    login
}

// module.exports = {
//   hello : hello,
//   login : login
// }

// module.exports = hello;
// module.exports = login;