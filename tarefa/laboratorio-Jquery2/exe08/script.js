$(function(){

    $("#botao").click(function(){
        let dt1 = $("#entrada1").val(); 
        let dt2 = $("#entrada2").val(); 
        if(dt1 == '' || dt2 == '')  
        {
            alert("Digite uma data válida.");
        }
        else
        {
            let dia1 = dt1.substr(8,2);
            let ano1 = dt1.substr(0,4);
            let mes1 = dt1.substr(5,2);
            let dia2 = dt2.substr(8,2);
            let ano2 = dt2.substr(0,4);
            let mes2 = dt2.substr(5,2);
            let dt_form_date2 = new Date(ano2,mes2 - 1,dia2);
            let dt_form_date1 = new Date(ano1,mes1 - 1,dia1);
            const diff = Math.abs(dt_form_date1.getTime() - dt_form_date2.getTime());
            const days = Math.ceil(diff / (1000 * 60 * 60 * 24 * 7));
            $("#resultado").text("Passou " + days + " semana(s) entre " + dia1 + "/" + mes1 + "/" + ano1 + " e " + dia2 + "/" + mes2 + "/" + ano2 + ".");
        }
    })

    $("#limpar").click(function(){
        $("#entrada1").val("");
        $("#entrada2").val("");
        $("#resultado").text("");
    })

});