/*
  WRITE YOUR SOLUTION HERE
*/

// const user = {
//    username: Johny,
//    password: newPassword,
//    age: 35
// }

const username = Symbol("username");
const password = Symbol("password");

const user = {
  [username]: "Ion",
  [password]: "pass",
  age: 35
}

console.log("username:", user.username,
  "password:", user.password);


// class User {
//   constructor(username, password, age) {

//     [username] = username;
//     [password] = password;
//     this.age = age
//   }
//   showCredentials(user) {
//     return `${this.username} has the ${this.password} pass and ${this.age} of age`
//   }
// }