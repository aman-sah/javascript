function sayMyName(){
    console.log("A");
    console.log("M");
    console.log("A");
    console.log("N");
}
// sayMyName(); 

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
// }

function addTwoNumbers(num1,num2){
    return num1+num2;
}

// console.log(addTwoNumbers(1,2));

function loginUserMessage(username="sam"){
    if(!username){
        console.log("Please enter a suername");
        return ;
    }
    return `${username} just logged in`;
    
}
// console.log(loginUserMessage("aman"));
console.log(loginUserMessage());