$(function() {
    
    var $namefield = $("#name");
    var isNameValid = false;

    var $phonefield = $("#phone");
    var isPhoneValid = false;

    var $emailfield = $("#email");
    var isEmailValid = false;

    var $saveButton = $("#savebutton")
    $saveButton.prop('disabled', true)


    $("#btn-open").on("click", function (event) {
        //отменяем стандартную обработку нажатия по кнопке
        event.stopPropagation();
        setTimeout(function() {
            $('#dialog').modal('show');
          }, 50);
    });

    $namefield.change(function(){
        if(!($namefield.val().length > 0)){
            $namefield.addClass("is-invalid");
            isNameValid = false;
        }
        else {
            $namefield.removeClass("is-invalid");
            isNameValid = true;
        }

        isFormValid()        
    });

    $phonefield.change(function(){
        isPhone = function(value){
            var phoneNumber = /[0-9-()+]{3,20}/; 
            var res = value.match(phoneNumber);
            alert(res);
        }
        isPhone($phonefield.val());

        if(!($phonefield.val().length > 0)){
            $phonefield.addClass("is-invalid");
            isNameValid = false;
        }
        else {
            $phonefield.removeClass("is-invalid");
            isNameValid = true;
        }

        isFormValid()
    });

    $emailfield.change(function(){
        
        if(!($emailfield.val().length > 0)){
            $emailfield.addClass("is-invalid");
            isEmailValid = false;
        }
        else {
            $emailfield.removeClass("is-invalid");
            isEmailValid = true;
        }

        isFormValid()
    });

    function isFormValid() {
        if (isNameValid){
            $saveButton.prop('disabled', false)
        }
        else{
            $saveButton.prop('disabled', true)
        }
    }

   

})