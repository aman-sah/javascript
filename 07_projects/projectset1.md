# Project related toDOM

## project link [click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript

const buttons=document.querySelectorAll('.button')
const body=document.querySelector("body") 

buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)

    /*Using if*/
    if(e.target.id==='grey'){
      // body.style.backgroundColor='grey'
    }
    if(e.target.id==='white'){
      // body.style.backgroundColor='grey'
    }


     /*Using Switch*/
    const colorId=e.target.id;
    switch(colorId){
      case "grey":
        body.style.backgroundColor='grey'
        break;
      case "white":
        body.style.backgroundColor='white'
        break;
      case "blue":
        body.style.backgroundColor='blue'
        break;
      case "yellow":
        body.style.backgroundColor='yellow'
        break; 
      default:
        body.style.backgroundColor='white'       
    }
  });
});

````