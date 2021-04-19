let calcular = document.querySelector("#calcular");

calcular.addEventListener('click', () =>{

    let qtdMaca = Number.parseInt(document.querySelector('#num1').value);

    let resultado = document.querySelector('#res');

    if(qtdMaca>=12){

        resultado.innerHTML = `O valor da maça é de ${(qtdMaca*1.00).toFixed(2)}`
        
    }
    else{

        resultado.innerHTML = `O valor da maça é de ${(qtdMaca*1.30).toFixed(2)}`
        
    }

})

