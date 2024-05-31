const name="aman"
const repoCount=10;
// console.log(name +repoCount);

//String interpolation
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName=new String('aman-hc')
// console.log(gameName[0]);
// console.log(gameName[0].__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('m'));

// const newString=gameName.substring(0,5);
// console.log(newString);

// const anotherString=gameName.slice(-7,3);
// console.log(anotherString);


// const newStringOne="        aman     ";
// console.log(newStringOne);
// console.log(newStringOne.trim());


const url="https://aman.com/aman%20sah";
console.log(url.replace('%20','-'));
console.log(url.includes('raman'));
console.log(gameName.split('-'));
