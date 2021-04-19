let calcular = document.querySelector("#calcular");

calcular.addEventListener('click', () =>{

    let nota1 = Number.parseInt(document.querySelector('#num1').value);
    let nota2 = Number.parseInt(document.querySelector('#num2').value);
    let nota3 = Number.parseInt(document.querySelector('#num3').value);

    let resultado = document.querySelector('#res');

    let soma = (nota1*2) + (nota2*3) + (nota3*5);

    let mediaFinal = soma/10 

    resultado.innerHTML = `A média ponderada é  ${mediaFinal}`

})

