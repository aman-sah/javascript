//singleton
//Object.create

//object literals
const mySym=Symbol("key1");
const JsUser={
    name:"aman",
    "full name":"aman sah",
    [mySym]:"myKey1",
    age:21,
    location:"bihar",
    email:"aman@google.com",
    isLoggedIn:false,
    lastLoginDays:["monday","tuesday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);//js taken as string
// console.log(JsUser["full name"]);//not allowed
// console.log(JsUser[mySym]);

JsUser.email="aman@chatGpt.com";
// Object.freeze(JsUser);
JsUser.email="aman@microsoft.com";
// console.log(JsUser);

JsUser.greeting=function(){
    console.log("hello JS user");
}
JsUser.greetingTwo=function(){
    console.log(`hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());