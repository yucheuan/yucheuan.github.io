/*Image Slider*/
$('#phaseOne1').click(function() {
    $('.slides').css({
        'margin-left': '0%'
    });

    document.getElementById('phaseOneV2').play();
});

/*range slider button*/
var slider = document.getElementById('slider');
var slector = document.getElementById('selector');

slider.oninput = function(){
    selector.style.left = this.value + "%";
}

/*range input control slider*/
$(document).on('input change', '#slider', function() {
    $('#slider_value').html( $(this).val() );
    $('.slides').css({
        'margin-left': $(this).val()
    });
});


/*WIP*/
$('#phaseOne2').click(function() { 
    $('.slides').css({
        'margin-left': '0%'
    });

    /*WIP for video .active*/
    var currentImg = $('.active');
    currentImg.removeClass('active').css('z-index', -10);
    $('#phaseOneV3').addClass('active').css('z-index, 10');

    document.getElementById('phaseOneV3').play();
});






$('#phaseOne3').click(function() {
    $('.slides').css({
        'margin-left': '-32%'
    });

    document.getElementById('phaseOneV4').play();
});

$('#phaseOne4').click(function() {
    $('.slides').css({
        'margin-left': '-61%'
    });

    document.getElementById('phaseOneV5').play();
});

$('#phaseOne5').click(function() {
    $('.slides').css({
        'margin-left': '-100%'
    });

    document.getElementById('phaseOneV6').play();
});

$('#phaseOne6').click(function() {
    $('.slides').css({
        'margin-left': '-100%'
    });

    document.getElementById('phaseOneV1').play();
});

/*Video Slider*/
$('#phaseOneV1').click(function() {
    //alert("Refresh!");
    //$('#phaseOneV1')[0].play();

    /*$('.video.first').css({
        'margin-left': '-20%'
    });*/
});