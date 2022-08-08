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
        'margin-left': $(this).val()+'%'
    });
});

$('#phaseOne1').click(function() {
    /*For Info-panel .show*/
    $('.description.show').removeClass('show');
    $('#description-1').addClass('show');


    /*For video .active*/ 
    currentImg = $('.active');
    currentImg.removeClass('active');
    $('#phaseOneV1').addClass('active');

    document.getElementById('phaseOneV1').play();
    x = 1;
});

$('#phaseOne2').click(function() { 
    $('.description.show').removeClass('show');
    $('#description-2').addClass('show');

    currentImg = $('.active');   
    currentImg.removeClass('active');
    $('#phaseOneV2').addClass('active');

    document.getElementById('phaseOneV2').play();
    x = 2;
});

$('#phaseOne3').click(function() {
    $('.description.show').removeClass('show');
    $('#description-3').addClass('show');

    currentImg = $('.active');   
    currentImg.removeClass('active');
    $('#phaseOneV4').addClass('active');

    document.getElementById('phaseOneV4').play();
    x = 4;
});

$('#phaseOne4').click(function() {
    $('.description.show').removeClass('show');
    $('#description-4').addClass('show');

    currentImg = $('.active');   
    currentImg.removeClass('active');
    $('#phaseOneV5').addClass('active');

    document.getElementById('phaseOneV5').play();
    x = 5;
});

$('#phaseOne5').click(function() {
    $('.description.show').removeClass('show');
    $('#description-5').addClass('show');

    currentImg = $('.active');   
    currentImg.removeClass('active');
    $('#phaseOneV6').addClass('active');

    document.getElementById('phaseOneV6').play();
    x = 6;
});

$('#phaseOne6').click(function(){
    $('.description.show').removeClass('show');
    $('#description-6').addClass('show');

    currentImg = $('.active');   
    currentImg.removeClass('active');
    $('#phaseOneV3').addClass('active');

    document.getElementById('phaseOneV3').play();
    x = 3;
});

$('#phaseOne7').click(function(){
    $('.description.show').removeClass('show');
    $('#description-7').addClass('show');

    currentImg = $('.active');   
    currentImg.removeClass('active');
    $('#phaseOneV7').addClass('active');

    document.getElementById('phaseOneV7').play();
    x = 7;
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
;
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
        case 7:
            if(document.getElementById('phaseOneV7').paused){
                document.getElementById('phaseOneV7').play();
            }
            else if(document.getElementById('phaseOneV7').played){
                document.getElementById('phaseOneV7').pause();
            }
            break;
    }    
})

/* speed x1.2*/
$('#speedone').click(function(){
    console.log(x);

    switch(x){
        case 1:
            if(document.getElementById('phaseOneV1').playbackRate=1.0){
                document.getElementById('phaseOneV1').playbackRate=1.2;
            }
            else if(document.getElementById('phaseOneV1').playbackRate=1.5){
                document.getElementById('phaseOneV1').playbackRate=1.2;
            }
            break;
        case 2:
            if(document.getElementById('phaseOneV2').playbackRate=1.0){
                document.getElementById('phaseOneV2').playbackRate=1.2;
            }
            else if(document.getElementById('phaseOneV2').playbackRate=1.5){
                document.getElementById('phaseOneV2').playbackRate=1.2;
            }
            break;
        case 3:
            if(document.getElementById('phaseOneV3').playbackRate=1.0){
                document.getElementById('phaseOneV3').playbackRate=1.2;
            }
            else if(document.getElementById('phaseOneV3').playbackRate=1.5){
                document.getElementById('phaseOneV3').playbackRate=1.2;
            }
            break;
        case 4:
            if(document.getElementById('phaseOneV4').playbackRate=1.0){
                document.getElementById('phaseOneV4').playbackRate=1.2;
            }
            else if(document.getElementById('phaseOneV4').playbackRate=1.5){
                document.getElementById('phaseOneV4').playbackRate=1.2;
            }
            break;
        case 5:
            if(document.getElementById('phaseOneV5').playbackRate=1.0){
                document.getElementById('phaseOneV5').playbackRate=1.2;
            }
            else if(document.getElementById('phaseOneV5').playbackRate=1.5){
                document.getElementById('phaseOneV5').playbackRate=1.2;
            }
            break;
        case 6:
            if(document.getElementById('phaseOneV6').playbackRate=1.0){
                document.getElementById('phaseOneV6').playbackRate=1.2;
            }
            else if(document.getElementById('phaseOneV6').playbackRate=1.5){
                document.getElementById('phaseOneV6').playbackRate=1.2;
            }
            break;
        case 7:
            if(document.getElementById('phaseOneV7').playbackRate=1.0){
                document.getElementById('phaseOneV7').playbackRate=1.2;
            }
            else if(document.getElementById('phaseOneV7').playbackRate=1.5){
                document.getElementById('phaseOneV7').playbackRate=1.2;
            }
            break;
    }    
})

/* speed x1.5*/
$('#speedtwo').click(function(){
    console.log(x);

    switch(x){
        case 1:
            if(document.getElementById('phaseOneV1').playbackRate=1.0){
                document.getElementById('phaseOneV1').playbackRate=1.5;
            }
            else if(document.getElementById('phaseOneV1').playbackRate=1.2){
                document.getElementById('phaseOneV1').playbackRate=1.5;
            }
            break;
        case 2:
            if(document.getElementById('phaseOneV2').playbackRate=1.0){
                document.getElementById('phaseOneV2').playbackRate=1.5;
            }
            else if(document.getElementById('phaseOneV2').playbackRate=1.2){
                document.getElementById('phaseOneV2').playbackRate=1.5;
            }
            break;
        case 3:
            if(document.getElementById('phaseOneV3').playbackRate=1.0){
                document.getElementById('phaseOneV3').playbackRate=1.5;
            }
            else if(document.getElementById('phaseOneV3').playbackRate=1.2){
                document.getElementById('phaseOneV3').playbackRate=1.5;
            }
            break;
        case 4:
            if(document.getElementById('phaseOneV4').playbackRate=1.0){
                document.getElementById('phaseOneV4').playbackRate=1.5;
            }
            else if(document.getElementById('phaseOneV4').playbackRate=1.2){
                document.getElementById('phaseOneV4').playbackRate=1.5;
            }
            break;
        case 5:
            if(document.getElementById('phaseOneV5').playbackRate=1.0){
                document.getElementById('phaseOneV5').playbackRate=1.5;
            }
            else if(document.getElementById('phaseOneV5').playbackRate=1.2){
                document.getElementById('phaseOneV5').playbackRate=1.5;
            }
            break;
        case 6:
            if(document.getElementById('phaseOneV6').playbackRate=1.0){
                document.getElementById('phaseOneV6').playbackRate=1.5;
            }
            else if(document.getElementById('phaseOneV6').playbackRate=1.2){
                document.getElementById('phaseOneV6').playbackRate=1.5;
            }
            break;
        case 7:
            if(document.getElementById('phaseOneV7').playbackRate=1.0){
                document.getElementById('phaseOneV7').playbackRate=1.5;
            }
            else if(document.getElementById('phaseOneV7').playbackRate=1.2){
                document.getElementById('phaseOneV7').playbackRate=1.5;
            }
            break;
    }    
})

/*toggle check icons*/

$('#check1').click(function() {
    var currentIcon = document.getElementById('check1');

    if(currentIcon.src.match('Assets/Fonts/check.png')){
        currentIcon.src = 'Assets/Fonts/check-toggle.png';
    }
    else{
        currentIcon.src = 'Assets/Fonts/check.png';
    }
})

$('#check2').click(function() {
    var currentIcon = document.getElementById('check2');

    if(currentIcon.src.match('Assets/Fonts/check.png')){
        currentIcon.src = 'Assets/Fonts/check-toggle.png';
    }
    else{
        currentIcon.src = 'Assets/Fonts/check.png';
    }
})

$('#check3').click(function() {
    var currentIcon = document.getElementById('check3');

    if(currentIcon.src.match('Assets/Fonts/check.png')){
        currentIcon.src = 'Assets/Fonts/check-toggle.png';
    }
    else{
        currentIcon.src = 'Assets/Fonts/check.png';
    }
})

$('#check4').click(function() {
    var currentIcon = document.getElementById('check4');

    if(currentIcon.src.match('Assets/Fonts/check.png')){
        currentIcon.src = 'Assets/Fonts/check-toggle.png';
    }
    else{
        currentIcon.src = 'Assets/Fonts/check.png';
    }
})

$('#check5').click(function() {
    var currentIcon = document.getElementById('check5');

    if(currentIcon.src.match('Assets/Fonts/check.png')){
        currentIcon.src = 'Assets/Fonts/check-toggle.png';
    }
    else{
        currentIcon.src = 'Assets/Fonts/check.png';
    }
})

$('#check6').click(function() {
    var currentIcon = document.getElementById('check6');

    if(currentIcon.src.match('Assets/Fonts/check.png')){
        currentIcon.src = 'Assets/Fonts/check-toggle.png';
    }
    else{
        currentIcon.src = 'Assets/Fonts/check.png';
    }
})

$('#check7').click(function() {
    var currentIcon = document.getElementById('check7');

    if(currentIcon.src.match('Assets/Fonts/check.png')){
        currentIcon.src = 'Assets/Fonts/check-toggle.png';
    }
    else{
        currentIcon.src = 'Assets/Fonts/check.png';
    }
})

/*toggle one icon only*/

$('#check-1').click(function() {
    document.getElementById('check-1').src = 'Assets/Fonts/check-toggle.png';
    document.getElementById('check-2').src = 'Assets/Fonts/check.png';
    document.getElementById('check-3').src = 'Assets/Fonts/check.png';
    document.getElementById('check-4').src = 'Assets/Fonts/check.png';
    document.getElementById('check-5').src = 'Assets/Fonts/check.png';
    document.getElementById('check-6').src = 'Assets/Fonts/check.png';
})

$('#check-2').click(function() {
    document.getElementById('check-1').src = 'Assets/Fonts/check.png';
    document.getElementById('check-2').src = 'Assets/Fonts/check-toggle.png';
    document.getElementById('check-3').src = 'Assets/Fonts/check.png';
    document.getElementById('check-4').src = 'Assets/Fonts/check.png';
    document.getElementById('check-5').src = 'Assets/Fonts/check.png';
    document.getElementById('check-6').src = 'Assets/Fonts/check.png';
})

$('#check-3').click(function() {
    document.getElementById('check-1').src = 'Assets/Fonts/check.png';
    document.getElementById('check-2').src = 'Assets/Fonts/check.png';
    document.getElementById('check-3').src = 'Assets/Fonts/check-toggle.png';
    document.getElementById('check-4').src = 'Assets/Fonts/check.png';
    document.getElementById('check-5').src = 'Assets/Fonts/check.png';
    document.getElementById('check-6').src = 'Assets/Fonts/check.png';
})

$('#check-4').click(function() {
    document.getElementById('check-1').src = 'Assets/Fonts/check.png';
    document.getElementById('check-2').src = 'Assets/Fonts/check.png';
    document.getElementById('check-3').src = 'Assets/Fonts/check.png';
    document.getElementById('check-4').src = 'Assets/Fonts/check-toggle.png';
    document.getElementById('check-5').src = 'Assets/Fonts/check.png';
    document.getElementById('check-6').src = 'Assets/Fonts/check.png';
})

$('#check-5').click(function() {
    document.getElementById('check-1').src = 'Assets/Fonts/check.png';
    document.getElementById('check-2').src = 'Assets/Fonts/check.png';
    document.getElementById('check-3').src = 'Assets/Fonts/check.png';
    document.getElementById('check-4').src = 'Assets/Fonts/check.png';
    document.getElementById('check-5').src = 'Assets/Fonts/check-toggle.png';
    document.getElementById('check-6').src = 'Assets/Fonts/check.png';
})

$('#check-6').click(function() {
    document.getElementById('check-1').src = 'Assets/Fonts/check.png';
    document.getElementById('check-2').src = 'Assets/Fonts/check.png';
    document.getElementById('check-3').src = 'Assets/Fonts/check.png';
    document.getElementById('check-4').src = 'Assets/Fonts/check.png';
    document.getElementById('check-5').src = 'Assets/Fonts/check.png';
    document.getElementById('check-6').src = 'Assets/Fonts/check-toggle.png';
})
            
/*time-Updated Simulation*/
const p3Video = document.querySelector('.autoVid')
if(p3Video != null){        
    p3Video.playbackRate=0.92
    var animationTrigger = false;

    p3Video.addEventListener('timeupdate', function(event) {
    var currentTime = p3Video.currentTime;    
    //console.log(currentTime)

        if (currentTime > 0.9 && currentTime < 3 && animationTrigger != true) {
        animationTrigger = true;
        //console.log('in');
        //console.log(animationTrigger);

        document.getElementById('check1').src = 'Assets/Fonts/check-toggle.png';
        document.getElementById('check2').src = 'Assets/Fonts/check-toggle.png';
        }

        if (currentTime > 3.3 && currentTime < 7 && animationTrigger == true) {
        animationTrigger = false;
        //console.log('in2');
        //console.log(animationTrigger);

        document.getElementById('check3').src = 'Assets/Fonts/check-toggle.png';
        }

        if (currentTime > 7 && currentTime < 10) {
        animationTrigger = true;
        }

        if (currentTime > 10 && currentTime < 11 && animationTrigger == true) {
        animationTrigger = false;
        //console.log('in3');
        //console.log(animationTrigger);

        document.getElementById('check3').src = 'Assets/Fonts/check.png';
        }

        if (currentTime > 14.6 && currentTime < 15 && animationTrigger != true) {
        animationTrigger = false;
        //console.log('in4');
        //console.log(animationTrigger);

        document.getElementById('check1').src = 'Assets/Fonts/check.png';
        document.getElementById('check2').src = 'Assets/Fonts/check.png';
        }
    })
}


