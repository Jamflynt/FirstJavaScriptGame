// Base code from code along game https://www.youtube.com/watch?v=bG2BmmYr9NQ 

var character = 
document.getElementById("character");
var block = document.getElementById("block");

function jump(){
    if(character.classList !="animate"){
    character.classList.add("animate");
}
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
}

var checkDead = setInterval (function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<50 && blockLeft>0 && characterTop>=400){
        block.style.animation = "none";
        alert("U LOSE SUCKER");
    }
}, 10);