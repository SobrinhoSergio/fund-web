let calcular = document.querySelector("#calcular");

calcular.addEventListener('click', () =>{

    let qtdCarrosVendidos = Number.parseInt(document.querySelector('#num1').value);
    let valorTotalVendas = Number.parseFloat(document.querySelector('#num2').value);
    let salario = Number.parseFloat(document.querySelector('#num3').value);
    let valorCarroVendido = Number.parseFloat(document.querySelector('#num4').value);

    let salFinal = (salario + ((valorTotalVendas/qtdCarrosVendidos)*(valorCarroVendido/100)));
    
    let resultado = document.querySelector('#res');

    resultado.innerHTML = `O seu salario é de ${salFinal}`

})

