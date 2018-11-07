$(function() {
    
    var $namefield = $("#name");
    var isNameValid = false;

    var $phonefield = $("#phone");
    var isPhoneValid = false;

    var $emailfield = $("#email");
    var isEmailValid = false;

    var $saveButton = $("#btn-save")
    //$saveButton.prop('disabled', true)
    var $openButton = $("#btn-open");

    var $dialog =  $('#dialog');

    $openButton.on("click", function (event) {
        //отменяем стандартную обработку нажатия по кнопке
        event.stopPropagation();
        setTimeout(function() {
            $dialog.modal('show');
          }, 50);
    });

    $saveButton.on("click", function(event) {
        event.preventDefault();
        $dialog.modal('hide');
        showInfo();        
    })

    $("#btn-reset").on("click", function() {
        
        $(".info").fadeOut(500, function() {
            $namefield.val('');
            $phonefield.val('');
            $emailfield.val('');
            $(".open").fadeIn(500);
        });
        
    })

    $namefield.on("input", function(){
        if(!($namefield.val().length > 0)){
            $namefield.addClass("is-invalid");
            isNameValid = false;
        }
        else {
            $namefield.removeClass("is-invalid");
            isNameValid = true;
        }

        isFormValid()        
    })

    $phonefield.on("input", function(){
        isPhone = function(value){
            var phoneNumber = /[0-9-()+]{3,20}/; 
            var res = value.match(phoneNumber);
            //alert(res);
        }
        isPhone($phonefield.val());

        if(!($phonefield.val().length > 0)){
            $phonefield.addClass("is-invalid");
            isPhoneValid = false;
        }
        else {
            $phonefield.removeClass("is-invalid");
            isPhoneValid = true;
        }

        isFormValid()
    });

    $emailfield.on("input", function(){
        
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
        if (isNameValid && isPhoneValid && isEmailValid){
            $saveButton.prop('disabled', false)
        }
        else{
            $saveButton.prop('disabled', true)
        }
    }

    function showInfo() {
        $(".open").hide();

        var $infoname = $(".info_name");
        var $infophone = $(".info_phone");
        var $infoemail = $(".info_email");

        $infoname.text($namefield.val());
        $infophone.text($phonefield.val());
        $infoemail.text($emailfield.val());

        $(".info").fadeIn(500);
    }

})