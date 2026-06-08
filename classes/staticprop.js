class user{
    constructor(username){
        this.username=username
    }

    logme(){
        console.log(`username is ${this.username}`);
        
    }

     creadteID(){
        return `123`
    }

}

const hitesh=new user("hitesh")
console.log((hitesh.creadteID()));


class teacher extends user{
    constructor(username,email){
         super(username)
        this.email=email;
       
    }


}
const iphone=new teacher("iphone","i@phone.com")

iphone.logme();
