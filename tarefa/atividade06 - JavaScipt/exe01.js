let calcular = document.querySelector("#calcular");

calcular.addEventListener('click', () =>{

    let num1 = Number.parseInt(document.querySelector('#num1').value);
    let num2 = Number.parseInt(document.querySelector('#num2').value);

    let resultado = document.querySelector('#res');

    let soma = num1 + num2;

    resultado.innerHTML = `A soma dos valores inseridos é ${soma}`

})

