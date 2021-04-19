let calcular = document.querySelector("#calcular");

calcular.addEventListener('click', () =>{

    let numero = Number.parseInt(document.getElementById('num1').value);
    let resultado = document.getElementById('res');

    let divisores=0;

for(let count=1 ; count<=numero ; count++)
     
    if(numero % count == 0)
         divisores++;
    
    if(divisores==2){
        resultado.innerHTML='É primo';

    }
    
    else{

        resultado.innerHTML='Não é primo';

    }
})