$(function(){

    $("#botao").click(function(){
        let frase = $("#entrada").val();
        const regex = /[0-9]/;
        if(regex.test(frase) || frase == '')
        {
            alert("Digite um valor válido.");
        }
        else
        {
            frase = frase.split("").reverse().join("");
            $("#resultado").text(frase);
        }
    })

    $("#limpar").click(function(){
        $("#entrada").val("");
        $("#resultado").text("");
    })

});
