class user{
    constructor(username){
        this.username=username;

    }

    logme(){
        console.log(`username is ${this.username}`);

        
    }
}
//const  chai1=new user("chai")

class teacher extends user{
    constructor(username,email,password){
        
        super(username)
        this.email=email;
        this.password=password
    }

    addcourse(){
        console.log(`new course was added by ${this.username}`);
        
    }
}

const chai=new teacher("chai","chai@email.com",12345);
chai.addcourse();

const masalachai=new user("masalachai")
masalachai.logme();
console.log((chai === teacher));

console.log(chai instanceof teacher);

