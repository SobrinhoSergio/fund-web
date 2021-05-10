$(function(){
    
    $("#entrada").keyup(function(){
        const rmin = /[a-z]/;
        const rmai = /[A-Z]/;
        const rnum = /[1-9]/;
        const rchar_especiais = /[@#!$%&*()-+.,=]/;
        if($("#entrada").val() == '')
        {
            $("#resultado").text("");
        }
        if(rmin.test($("#entrada").val()) || rmai.test($("#entrada").val()))
        {
            $("#resultado").text("Senha fraca");
            $("#resultado").css("color", "red");
            $("#resultado").css("font-weight" , "bolder");
        }
        if(rmin.test($("#entrada").val()) && rmai.test($("#entrada").val()) && rnum.test($("#entrada").val()))
        {
            $("#resultado").text("Senha moderada");
            $("#resultado").css("color", "orange");
            $("#resultado").css("font-weight" , "bolder");
        }
        if(rmin.test($("#entrada").val()) && rmai.test($("#entrada").val()) && rnum.test($("#entrada").val()) && rchar_especiais.test($("#entrada").val()))
        {
            $("#resultado").text("Senha forte");
            $("#resultado").css("color", "green");
            $("#resultado").css("font-weight" , "bolder");
        }
    })

    $("#olho").on('click', function(){
        let tipe = $("#entrada").attr("type");
        console.log(tipe);
        if(tipe == "password")
        {
            $("#entrada").prop('type',"text");
            $(this).text("Ocultar");
        }
        else
        {
            $("#entrada").prop("type", "password");
            $(this).text("Mostrar");
        }
    })
});