function conta(y, palavra)
{
    return y.filter((v) => (v === palavra)).length; 
}

$(function(){
  
    $("#botao").click(function(){
        let texto = $("#entrada").val();
        const rx = /[0-9]/;
        if(rx.test(texto) || texto == '')
        {
            alert("Digite um valor válido.");
        }
        else
        {
            let atexto = texto.split(" ").map(function(palavra)
            { 
                return palavra.toLocaleLowerCase().replace(/[.,]/g, '');
            });
            let ao = new Array;
            let palavrasu = new Array;
            let i = 0;
            let x = 0;
            for(palavra of atexto)
            { 
                if(palavrasu.indexOf(palavra) == -1)
                {
                    let o = (conta(atexto, palavra));
                    palavrasu.push(palavra); // 
                    ao[x] = o;
                }
                else
                {
                    x--;
                }
                i++;
                x++;
            }
            let cont = 0;
            let palavra_mais_ocorrido;
            let aempate =new Array;
            for(i=0;i<palavrasu.length;i++)
            {
                var maior = Math.max.apply(null,ao);      
                if(ao[i]==maior)
                {   
                    cont++;
                    palavra_mais_ocorrido = palavrasu[i];
                    aempate[i] = palavrasu[i];
                }
            }
            if(cont>1)
            {
                $("#resultado").text("Há " + aempate.length + " palavras com " + ao[0] + " ocorrência(s): " + aempate + ".");
            }
            else
            {
                $("#resultado").text("A palavra '" + palavra_mais_ocorrido + "' aparece " + maior + " vez(es), sendo a que possui mais aparições.");
            }
        }        
    })

    $("#limpar").click(function(){
        $("#entrada").val("");
        $("#resultado").text("");
        $("#acervo td").remove();
    })

});