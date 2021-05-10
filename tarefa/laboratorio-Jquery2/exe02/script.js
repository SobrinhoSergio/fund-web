$(function(){
    function vogal(x)
    {
        x = x.toUpperCase();
        if(x == 'A' || x == 'E' || x == 'I' || x == 'O' || x == 'U')
        {
            return true;
        }
        else
        {
            return false;
        }
    }
  
    $("#botao").click(function(){
        let y = $("#entrada").val();
        let w = y.split("");
        const regex = /[0-9]/;
        let frase = "";
        if(regex.test(y) || y == '')
        {
            alert("Digite um valor válido.");
        }
        else
        {
            for(i=0;i<y.length;i++)
            {
                if(vogal(w[i]))
                {
                    w[i] = "<strong>" + w[i] + "</strong>";
                }
            }
            y = w.join("");
            $("#resultado").html(y);
        }
    })

    $("#limpar").click(function(){
        $("#entrada").val("");
        $("#resultado").text("");
    })

});