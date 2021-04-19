let calcular = document.querySelector("#calcular");

calcular.addEventListener('click', () =>{

    let salario = Number.parseInt(document.querySelector('#num1').value);
    let reajuste = Number.parseInt(document.querySelector('#num2').value);
    
    let resultado = document.querySelector('#res');

    let salarioNovo = salario + (salario*(reajuste/100));

    resultado.innerHTML = `O valor do salario com o reajuste salarial é de ${salarioNovo}`

})

