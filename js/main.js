$(function() {
    

    $("#btn-open").on("click", function (event) {
        //отменяем стандартную обработку нажатия по кнопке
        event.stopPropagation();
        setTimeout(function() {
            $('#dialog').modal('show');
          }, 5000);
    });

   

})