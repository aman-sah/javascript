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


## project 2
```javascript
const form=document.querySelector('form');
/*this use case will give you empty value */
// const h=parseInt(document.querySelector('#height').value);

form.addEventListener('submit',function(e){
    e.preventDefault();
    const h=parseInt(document.querySelector('#height').value);
    const w=parseInt(document.querySelector('#weight').value);
    const r=document.querySelector('#results');

    if(h==='' || h<0 || isNaN(h)){
      r.innerHTML=`Please enter a valid height ${h}`;
    }else if(w==='' || w<0 || isNaN(w)){
      r.innerHTML=`Please enter a valid weight ${w}`;
    }
    else{
      const bmi=(w/((h*h)/10000)).toFixed(2);
      if(bmi<18.6){
        r.innerHTML=`<span>${bmi}<span>  <span>you are Under Weight</span>`
      }else if(bmi>=18.6 && bmi<=24.9){
        r.innerHTML=`<span>${bmi}<span>  <span>you are in Normal Range</span>`
      }
      else{
        r.innerHTML=`<span>${bmi}<span>  <span>you are Overweight</span>`
      }
      
    }
});




```
