// class user {
//     constructor (username,email,password){
//         this.username=username;
//         this.email=email;
//         this.password=password
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUseranme(){
//         return `${this.username.toUpperCase()}`
//     }
// }    
// const chai=new user("chai","chai@gmail.com","123")
// console.log(chai.encryptPassword());

// console.log(chai.changeUseranme());

function user(username,password,email){
  this.username=username;
  this.password=password;
  this.email=email;

}

user.prototype.changeUseranme=function(){
    return `${this.username.toUpperCase()}`
}

user.prototype.encryptPassword=function(){
    return `${this.password}abc`
}

const tea=new user("anuraj",1345,"ajsinghindolia@gmail.com");
console.log(tea.changeUseranme());

