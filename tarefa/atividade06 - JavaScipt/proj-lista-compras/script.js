const adicionar = document.getElementById('adicionar-item')
const apagar = document.getElementById('apagar-item')

adicionar.addEventListener('click', () => {

    const inserir = document.getElementById('inserir-item')
    let novoItem = document.createElement('li')
    const lista = document.getElementById('mostrar-item')

    novoItem.innerHTML = inserir.value + ' <button type="button" id="apagar-item">Remover</button>'

    lista.appendChild(novoItem)

})

apagar.addEventListener('click', () =>{

    let novoItem = document.createElement('li')
    const lista = document.getElementById('mostrar-item')
    lista.removeChild(novoItem)

})