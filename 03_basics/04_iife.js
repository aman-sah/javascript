//Immediately Invoked Function Expression(IIFE)

(function chai(){
    //named IIFE
    console.log("DB CONNECTED");
})();

( ()=>{
    //unnamed IIFE
    console.log(`DB CONNECTED TWO`);
})(); // always use ';' if we use more than one IIFE

( (name)=>{
    //unnamed IIFE with parameter
    console.log(`DB CONNECTED TWO ${name}`);
})('aman');

// sometimes we face problem from global scope's pollution, so remove that we us IIFE(`Immediately Invoked function Expression`) 