let sign= "";
let old_value= "";          //taking as strings to prevent unwanted calculations
let next_value= "";
let sign_c=0;       //counting signs

document.addEventListener("DOMContentLoaded", function(){

    let int= document.querySelectorAll(".int");
    let sign= document.querySelectorAll(".sign");

    let old= document.querySelector(".old");
    let next= document.querySelector(".next");
    
    let period= document.querySelector(".period");
    let equal= document.querySelector(".equal");
    let clear= document.querySelector(".clear");

    document.addEventListener("keydown", function(e){
        const k= document.querySelector(`button[key-data="${e.keyCode}"]`)
        
        if(e.keyCode>47 && e.keyCode<58){
            display_numbers(String(k.textContent));
            next.textContent= next_value;
        }
        else if(e.keyCode == 190){
            decimal();
        }
        else if(e.keyCode == 32){
            calculate();
        }
        
    })

    int.forEach((number) => number.addEventListener("click", function(e){
        display_numbers(e.target.textContent);
        next.textContent= next_value;
    }))

    sign.forEach((op) => op.addEventListener("click", function(e){
        if(sign_c===0){         
            display_sign(e.target.textContent);
            old.textContent= old_value + " " + op.textContent;
            next.textContent= next_value;
        }else{          //if it is second operator, then the previous calculation will be completed first
            calculate();
            old.textContent=old_value;
            next_value=old_value;
            
            display_sign(e.target.textContent);
            old.textContent= old_value + " " + op.textContent;
            next.textContent= next_value;
            sign_c++;
        }
    }))

    clear.addEventListener("click", function(){
        old_value="";
        old.textContent=old_value;

        next_value="";
        next.textContent=next_value;

        sign= "";
    })

    equal.addEventListener("click", function(){
        calculate();

        next.textContent="";
        old.textContent=old_value;
        next_value=old_value;
    })

    period.addEventListener("click", function(){
        decimal();
    })

})

function display_numbers(i){
    console.log(typeof(i));
    if(next_value.length<=7){       //limiting input size
        next_value += i;
    }
}



function display_sign(i){
    sign = i;
    old_value = next_value;
    next_value = "";    
    sign_c++;           //updating number of operators
}

function calculate(){
    old_value= Number(old_value);
    next_value= Number(next_value);

    if(sign=== "+"){
        old_value += next_value;
    }else if(sign=== "-"){
        old_value -= next_value;
    }else if(sign=== "X"){
        old_value *= next_value;
    }else{
        old_value /= next_value;
    }

    old_value=round_number(old_value);
    old_value=old_value.toString();
    next_value=next_value.toString();

    sign_c=0;
}

function round_number(i){
    return Math.round(i * 1000) / 1000;
}

function decimal(){
    if(!next_value.includes(".")){
        next_value += ".";
    }
}