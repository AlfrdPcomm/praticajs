const btnEvent = document.querySelector('#btnEvent');

btnEvent.addEventListener('click', btntOnClick1);

function btntOnClick1(){
    let var1 = parseInt(input1.value);
    let var2 = parseInt(input2.value);
    let result = var1 + var2;
    pResult.innerText = "El restultado es: " + result;
    console.log(result);
}