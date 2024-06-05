const user={
    usrename:"aman",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.usrename}, welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage();
// user.usrename="sam"
// user.welcomeMessage();

// console.log(this);


// function chai(){
//     let username="aman"
//     console.log(this.username);// can't use this in function only in object 
// }
// chai()

// const chai=function(){
//     let username="aman"
//     console.log(this.username);
// }

const chai=()=>{
    let username="aman"
    console.log(this);
}

// chai()

// const addTwo=(num1, num2)=>{
//     return num1+num2  //Explicit Return 
// }


// const addTwo=(num1, num2)=>  num1+num2 //Implicit Return 
// const addTwo=(num1, num2)=>  (num1+num2) //Implicit Return 
const addTwo=(num1, num2)=>  ({username:"aman"})

console.log(addTwo(3,4));