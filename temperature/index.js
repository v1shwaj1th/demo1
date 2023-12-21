let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");

function ctf(){
    let op = (parseFloat(celsius.value) * 9 / 5) + 32;
    fahrenheit.value = parseFloat(op.toFixed(2));
}

function ftc(){
    let op = (parseFloat(fahrenheit.value) - 32) * 5 / 9;
    celsius.value = parseFloat(op.toFixed(2));
    console.log(op);
}


