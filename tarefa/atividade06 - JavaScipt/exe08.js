let calcular = document.querySelector("#calcular");

calcular.addEventListener('click', () =>{

    let fahrenheit = Number.parseInt(document.querySelector('#num1').value);

    let resultado = document.getElementById('res');

    let celsius = Number.parseFloat((fahrenheit - 32) * 5 / 9);

    resultado.innerHTML = `O valor convertido é ${celsius.toFixed(2)}F`
 
})

