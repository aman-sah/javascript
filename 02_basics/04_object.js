// const tinderUser=new Object();//singleton
const tinderUser={};//non singleton

tinderUser.id="123abc";
tinderUser.name="aman";
tinderUser.isLoggedIn=false;

// console.log(tinderUser);


const regularUser={
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"aman",
            lastname:"sah"
        }
    }
} 

// console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"};
const obj2={3:"a",4:"b"};
const obj3={5:"a",6:"b"};
// const obj3={obj1,obj2};

// const obj4=Object.assign({},obj1,obj2,obj3)
const obj4={...obj1, ...obj2, ...obj3};//spread operator 
// console.log(obj4);

const user=[
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:2,
        email:"b@gmail.com"
    },
    {
        id:3,
        email:"c@gmail.com"
    },
]

// console.log(user[1].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));