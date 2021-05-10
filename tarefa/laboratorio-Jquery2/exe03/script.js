function conta(y, palavra)
{
    return y.filter((v) => (v === palavra)).length; 
}

$(function(){
  
    $("#botao").click(function(){
        let frase = $("#entrada").val();
        const r = /[0-9]/;
        if(r.test(frase) || frase == '')
        {
            alert("Digite um valor válido.");
        }
        else
        {
            let array_frase = frase.split(" ").map(function(palavra)
            { 
                return palavra.toLocaleLowerCase().replace(/[.,]/g, '');
            });
            let arrayas = new Array;
            let pu = new Array;
            let i = 0;
            let x = 0;
            let oco;
            for(palavra of array_frase)
            { 
                if(pu.indexOf(palavra) == -1)
                {
                    oco = (conta(array_frase, palavra));
                    pu.push(palavra); 
                    arrayas[x] = oco;
                }
                else
                {
                    x--;
                }
                i++;
                x++;
            }
           
            for(i=0;i<pu.length;i++)
            {
                let obj_tr = $("<tr>");
                $("#acervo").append(obj_tr);
                let obj_td = $("<td>");
                let obj_td2 = $("<td>");
                obj_td.text(pu[i]);
                obj_td2.text(arrayas[i]);
                obj_tr.append(obj_td);
                obj_tr.append(obj_td2);                 
            }
        }        
    })

    $("#limpar").click(function(){
        $("#entrada").val("");
        $("#resultado").text("");
        $("#acervo td").remove();
    })

});