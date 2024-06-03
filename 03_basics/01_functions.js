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
// console.log(loginUserMessage());



function calculateCartPrice(val1,val2,...num1){   // (...num1)rest operator
    return num1
}
// console.log(calculateCartPrice(200,300,400,1000));

const user={
    username:"abc",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);
handleObject({
    username:"sam",
    price:399
})

const mynewArray=[200,400,100,600]

function returnSecondaryValue(getArray){
    return getArray[1]
}
// console.log(returnSecondaryValue(mynewArray));
console.log(returnSecondaryValue([200,400,500,1000]));