let calcular = document.querySelector("#calcular");

calcular.addEventListener('click', () =>{

    let valorCarro = Number.parseInt(document.querySelector('#num1').value);

    let custoTotal = (valorCarro + valorCarro*0.28) + (valorCarro + valorCarro*0.42);
    
    let resultado = document.querySelector('#res');

    resultado.innerHTML = `O custo do novo carro ${custoTotal}`

})

