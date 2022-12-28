var pi = "piedra";
var pa = "papel";
var ti = "tijera"
var p1 = pi;
var p2 = ti;
 
function juego(p1,p2){
    if(p1==="piedra" && p2 === "tijera"){
        console.log("P1 gana Piedra > Tijera");
    }else if(p1==="piedra" && p2 === "papel"){
        console.log("P2 gana Piedra < Papel")
    }else if(p1==="piedra" && p1==="piedra"){
        console.log("Empate");
    }else if(p1 === "tijera" && p2==="tijera"){
        console.log("Empate");
    }else if(p1 === "papel" && p2==="papel"){
        console.log("Empate");
    }else if(p1 === "papel" && p2==="piedra"){
        console.log("P1 gana Papel > piedra");
    }else if(p1 === "papel" && p2==="tijera"){
        console.log("P2 gana Papel < Tijera ");
    }else if(p1 === "tijera" && p2==="piedra"){
        console.log("P2 gana Tijera < Pedra ");
    }else if(p1 === "tijera" && p2==="pale"){
        console.log("P1 gana Tijera > Papel");
    }
}