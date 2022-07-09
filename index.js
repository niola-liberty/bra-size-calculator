person = prompt("Hey, there! What's your name?")
document.getElementById("nme").innerHTML= "Welcome " + person + " 👋";

document.getElementById("btn").addEventListener("click", bandVal )
function bandVal(){
    bust = parseFloat(document.getElementById("bust").value)
    band = parseFloat(document.getElementById("band").value) 
    band += 3
    size = document.getElementById("size")
    
    if(band %2 == 0){
       //pass
    }
    else{
        band += 1
    }
    
    cup = bust - band
    if (cup == 0){
        size.innerHTML = "You're a " + band + "AA"
    }
    else if (cup == 1){
        size.innerHTML = "You're a " + band + "A"
    }
    else if (cup == 2){
        size.innerHTML = "You're a " + band + "B"
    }
    else if (cup == 3){
        size.innerHTML = "You're a " + band + "C"
    }
    else if (cup == 4){
        size.innerHTML = "You're a " + band + "D"
    }
    else if (cup == 5){
        size.innerHTML = "You're a " + band + "DD/E"
    }
    else if (cup == 6){
        size.innerHTML = "You're a " + band + "DDD/F"
    }
    else{
        size.innerHTML = "Oops! Something's wrong :("
    }



}
