let sign= "";
let old_value= "";
let next_value= "";

document.addEventListener("DOMContentLoaded", function(){

    let int= document.querySelectorAll(".int");
    let sign= document.querySelectorAll(".sign");

    let old= document.querySelector(".old");
    let next= document.querySelector(".next");
    
    let period= document.querySelector(".period");
    let equal= document.querySelector(".equal");
    let clear= document.querySelector(".clear");

    int.forEach((number) => number.addEventListener("click", function(e){
        display_numbers(e.target.textContent);
        next.textContent= next_value;
    }))

    sign.forEach((op) => op.addEventListener("click", function(e){
        display_sign(e.target.textContent);
        old.textContent= old_value + " " + sign;
        next.textContent= next_value;
    }))
})

function display_numbers(i){
    if(next_value.length<=7){
        next_value += i;
    }
}

function display_sign(i){
    sign = i;
    old_value = next_value;
    next_value = "";
}