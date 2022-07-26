var currentImg = $('.active');
var x = 1;

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

$('#phaseOne1').click(function() {
    /*$('.slides').css({
        'margin-left': '0%'
    });*/

    /*for video .active*/ 
    currentImg = $('.active');
    currentImg.removeClass('active');
    $('#phaseOneV1').addClass('active');

    document.getElementById('phaseOneV1').play();
    x = 1;
});

$('#phaseOne2').click(function() { 
    /*$('.slides').css({
        'margin-left': '0%'
    });*/    
    currentImg = $('.active');   
    currentImg.removeClass('active');
    $('#phaseOneV2').addClass('active');

    document.getElementById('phaseOneV2').play();
    x = 2;
});

$('#phaseOne3').click(function() {
    /*$('.slides').css({
        'margin-left': '-32%'
    });*/
    currentImg = $('.active');   
    currentImg.removeClass('active');
    $('#phaseOneV4').addClass('active');

    document.getElementById('phaseOneV4').play();
    x = 4;
});

$('#phaseOne4').click(function() {
    /*$('.slides').css({
        'margin-left': '-61%'
    });*/
    currentImg = $('.active');   
    currentImg.removeClass('active');
    $('#phaseOneV5').addClass('active');

    document.getElementById('phaseOneV5').play();
    x = 5;
});

$('#phaseOne5').click(function() {
    /*$('.slides').css({
        'margin-left': '-100%'
    });*/
    currentImg = $('.active');   
    currentImg.removeClass('active');
    $('#phaseOneV6').addClass('active');

    document.getElementById('phaseOneV6').play();
    x = 6;
});

$('#phaseOne6').click(function(){
    /*$('.slides').css({
        'margin-left': '-100%'
    });*/
    currentImg = $('.active');   
    currentImg.removeClass('active');
    $('#phaseOneV3').addClass('active');

    document.getElementById('phaseOneV3').play();
    x = 3;
});

/*play & pause*/
$('#play').click(function(){
    console.log(x);

    switch(x){
        case 1:
            if(document.getElementById('phaseOneV1').paused){
                document.getElementById('phaseOneV1').play();
            }
            else if(document.getElementById('phaseOneV1').played){
                document.getElementById('phaseOneV1').pause();
            }
            break;
        case 2:
            if(document.getElementById('phaseOneV2').paused){
                document.getElementById('phaseOneV2').play();
            }
            else if(document.getElementById('phaseOneV2').played){
                document.getElementById('phaseOneV2').pause();
            }
            break;
        case 3:
            if(document.getElementById('phaseOneV3').paused){
                document.getElementById('phaseOneV3').play();
            }
            else if(document.getElementById('phaseOneV3').played){
                document.getElementById('phaseOneV3').pause();
            }
            break;
        case 4:
            if(document.getElementById('phaseOneV4').paused){
                document.getElementById('phaseOneV4').play();
            }
            else if(document.getElementById('phaseOneV4').played){
                document.getElementById('phaseOneV4').pause();
            }
            break;
        case 5:
            if(document.getElementById('phaseOneV5').paused){
                document.getElementById('phaseOneV5').play();
            }
            else if(document.getElementById('phaseOneV5').played){
                document.getElementById('phaseOneV5').pause();
            }
            break;
        case 6:
            if(document.getElementById('phaseOneV6').paused){
                document.getElementById('phaseOneV6').play();
            }
            else if(document.getElementById('phaseOneV6').played){
                document.getElementById('phaseOneV6').pause();
            }
            break;
    }    
})