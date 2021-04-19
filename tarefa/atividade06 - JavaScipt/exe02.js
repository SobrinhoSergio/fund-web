let calcular = document.querySelector("#calcular");

calcular.addEventListener('click', () =>{

    let num1 = document.querySelector('#num1').value;
    let num2 = document.querySelector('#num2').value;

    let resultado = document.querySelector('#res');

    let maior;

    if(num1>num2){
        maior = num1;
        resultado.innerHTML = `O maior número digitado é ${maior}`
    }

    else{
        maior = num2;
        resultado.innerHTML = `O maior número digitado é ${maior}`
    }

})