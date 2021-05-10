$(function(){

    $("#botao").click(function(){
        let frase = $("#entrada1").val();
        let procurar = $("#entrada2").val();
        let substituir = $("#entrada3").val();
        const regex = /[0-9]/;
        if(regex.test(frase) || regex.test(procurar) || regex.test(substituir) || frase == '')
        {
            alert("Digite um valor válido.");
        }
        else
        {
            frase = frase.toLocaleLowerCase();
            procurar = procurar.toLocaleLowerCase();
            substituir = substituir.toLocaleLowerCase();
            let atexto = frase.split(' ');
            for(i=0;i<atexto.length;i++)
            {
                if(atexto[i]==procurar)
                {
                    atexto[i] = substituir;
                }
            }
            let frase_novo = atexto.join(' ');
            $("#resultado").text(frase_novo);
        }
    })

    $("#limpar").click(function(){
        $("#entrada1").val("");
        $("#entrada2").val("");
        $("#entrada3").val("");
        $("#resultado").text("");
    })

});