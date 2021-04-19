let calcular = document.querySelector("#calcular");

calcular.addEventListener('click', () =>{

    let cateto1 = Number.parseFloat(document.querySelector('#num1').value);
    let cateto2 = Number.parseFloat(document.querySelector('#num2').value);

    let resultado = document.querySelector('#res');

    let hipotenusa = sqrt(pow(cateto1, 2) + pow(cateto2, 2))

    resultado.innerHTML = `A soma dos valores inseridos é ${hipotenusa}`

})

