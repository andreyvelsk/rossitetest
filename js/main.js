$(function() {
    
    var $namefield = $("#name"),
    $phonefield = $("#phone"),
    $emailfield = $("#email"),
    $saveButton = $("#btn-save"),
    $openButton = $("#btn-open"),
    $dialog =  $('#dialog');

    var isNameValid = false,
    isPhoneValid = false,
    isEmailValid = false;

    $saveButton.prop('disabled', true)

    $openButton.on("click", function (event) {
        event.stopPropagation();
        setTimeout(function() {
            $dialog.modal('show');
          }, 5000);
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
            isNameValid = false;
            isPhoneValid = false;
            isEmailValid = false;
            $saveButton.prop('disabled', true)
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
            var phoneNumber = /[0-9 -()+]+$/;
            return phoneNumber.test(value);
        }

        if( $phonefield.val().length <= 5 || !(isPhone($phonefield.val())) ){
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

        isEmail = function(value){
            var email = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
            return email.test(value);
        }

        if($emailfield.val().length <= 0 || !( isEmail($emailfield.val()) ) ){
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