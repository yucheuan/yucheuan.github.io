/*Image Slider*/
$('#phaseOne1').click(function() {
    $('.slides').css({
        'margin-left': '0%'
    });

    document.getElementById('phaseOneV2').play();
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