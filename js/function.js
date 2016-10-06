function showQuan(flav) {
    $("select[name=" + flav + "-quantity]").toggle().removeAttr('disabled');
    validateForm()
}

$('input[type=text]').change(validateForm);

function validateForm() {
    var name = $('#name').val(),
        num = $('#number').val(),
        loc = $('#location').val(),
        time = $('#time').val(),
        flavors = $(':checkbox:checked').first().val();
    console.log(name, num, loc, time, flavors);
    if (name != '' && num != '' && loc != '' && time != '' && flavors == 'on') {
        $('.submit-buttons button').removeClass('disabled');
    } else {
        $('.submit-buttons button').addClass('disabled');
    }
}

function validateCode() {
    var promos = ['HILLMAN25']
    var input = $('.promo input').val().toUpperCase();
    var valid = $.inArray(input, promos) > -1;
    if (valid) {
        $('.promo .btn').removeClass().addClass('btn btn-success').html('Success!!');
    } else {
        $('.promo .btn').removeClass().addClass('btn btn-danger').html('Invalid Code.');
    }
}

$(function () {
    var id = Math.floor(1000 + Math.random() * 9000);
    $('input[name="_subject"]').val('Order ID: ' + id);
});


//Initialize Popovers

$(function () {
    $('[data-toggle="popover"]').popover()
})
