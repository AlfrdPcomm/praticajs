const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('.parrafito');
const pid = document.getElementById('pid');
const input1 = document.querySelector('#calcular1');
const input2 = document.querySelector('#calcular2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.getElementById('resultado');


console.log({
    h1,
    p,
    parrafito,
    pid,
    input1
}); 

h1.innerHTML= 'Bendito el birlo de la llanta mamita';

//Insertar imagen
const img = document.createElement('img');
img.setAttribute('src','https://culturedvultures.com/wp-content/uploads/2016/10/foo-fighters-large-wallpaper.jpg')
console.log(img);

pid.append(img);

function bntOnClic(){
    console.log("Escuchadno el evento onClic");
    console.log(input1.value + input2.value);
    var val1 = input1.value;
    var val2 = input2.value;
    var resultado = parseInt(val1)+parseInt(val2)
    console.log(parseInt(val1)+parseInt(val2));
    pResult.innerText = 'Resultado: ' + resultado;

}