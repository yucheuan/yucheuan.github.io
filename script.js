var currentImg = $('.active');
var x = 1;   

if(document.querySelector('#phaseThreeV1') != null)
{
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.getElementById('phaseThreeV1').play();
    }
    //console.log("ok!");
    document.getElementById('phaseThreeV1').playbackRate=15.0;
}

/*cover info*/
$('#check-info').click(function(){
    if($('#info2').hasClass('show') == true){
        $('#info2').removeClass('show');
        $('#info3').removeClass('show');
        document.getElementById('check-info').src = 'Assets/Fonts/info.png';
    }
    else{
        $('#info2').addClass('show');
        $('#info3').addClass('show');
        document.getElementById('check-info').src = 'Assets/Fonts/info-toggle.png';
    }
});

/*range slider button*/
var slider = document.getElementById('slider');
var slector = document.getElementById('selector');


if(slider != null ){
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
}

/*switch videos*/

$('#phaseOne1').click(function() {
    /*For Info-panel .show*/
    $('.description.show').removeClass('show');
    $('#description-1').addClass('show');


    /*For video .active*/ 
    currentImg = $('.active');
    currentImg.removeClass('active');
    $('#phaseOneV1').addClass('active');    

    document.getElementById('phaseOneV1').play();   
    document.getElementById('phaseOneV1').playbackRate=1.0 
    x = 1;

    /*toggle icon*/
    vid = 'phaseOneV1';
    defaultActiveStatus1();
    defaultActiveStatus2();
    defaultActiveStatus3();

    if(document.querySelector('#valueBtn') != null){   
        check01();
    }
    else{
        check1();
    }

    /*remove limitation of nextBtn*/
    $('#nextBtn').removeClass('limited');
    $('#comfirmBtn').removeClass('limited');
});

$('#phaseOne2').click(function() { 
    $('.description.show').removeClass('show');
    $('#description-2').addClass('show');

    currentImg = $('.active');   
    currentImg.removeClass('active');
    $('#phaseOneV2').addClass('active');

    document.getElementById('phaseOneV2').play();
    document.getElementById('phaseOneV2').playbackRate=1.0
    x = 2;

    vid = 'phaseOneV2';
    defaultActiveStatus1();
    defaultActiveStatus2();
    defaultActiveStatus3();

    if(document.querySelector('#valueBtn') != null){ 
        check02();
    }
    else{
        check2();
    }

    $('#nextBtn').removeClass('limited');
});

$('#phaseOne3').click(function() {
    $('.description.show').removeClass('show');
    $('#description-3').addClass('show');

    currentImg = $('.active');   
    currentImg.removeClass('active');
    $('#phaseOneV4').addClass('active');

    document.getElementById('phaseOneV4').play();
    document.getElementById('phaseOneV4').playbackRate=1.0
    x = 4;

    vid = 'phaseOneV4';
    defaultActiveStatus1();
    defaultActiveStatus2();
    defaultActiveStatus3();

    if(document.querySelector('#valueBtn') != null){ 
        check03();
    }
    else{
        check3();
    }

    $('#nextBtn').removeClass('limited');
});

$('#phaseOne4').click(function() {
    $('.description.show').removeClass('show');
    $('#description-4').addClass('show');

    currentImg = $('.active');   
    currentImg.removeClass('active');
    $('#phaseOneV5').addClass('active');

    document.getElementById('phaseOneV5').play();
    document.getElementById('phaseOneV5').playbackRate=1.0
    x = 5;

    vid = 'phaseOneV5';
    defaultActiveStatus1();
    defaultActiveStatus2();
    defaultActiveStatus3();

    if(document.querySelector('#valueBtn') != null){ 
        check04();
    }
    else{
        check4();
    }
    
    $('#nextBtn').removeClass('limited');
});

$('#phaseOne5').click(function() {
    $('.description.show').removeClass('show');
    $('#description-5').addClass('show');

    currentImg = $('.active');   
    currentImg.removeClass('active');
    $('#phaseOneV6').addClass('active');

    document.getElementById('phaseOneV6').play();
    document.getElementById('phaseOneV6').playbackRate=1.0
    x = 6;

    vid = 'phaseOneV6';
    defaultActiveStatus1();
    defaultActiveStatus2();
    defaultActiveStatus3();

    if(document.querySelector('#valueBtn') != null){ 
        check05();
    }
    else{
        check5();
    }
    
    $('#nextBtn').removeClass('limited');
});

$('#phaseOne6').click(function(){
    $('.description.show').removeClass('show');
    $('#description-6').addClass('show');

    currentImg = $('.active');   
    currentImg.removeClass('active');
    $('#phaseOneV3').addClass('active');

    document.getElementById('phaseOneV3').play();
    document.getElementById('phaseOneV3').playbackRate=1.0
    x = 3;

    vid = 'phaseOneV3';
    defaultActiveStatus1();
    defaultActiveStatus2();
    defaultActiveStatus3();

    if(document.querySelector('#valueBtn') != null){ 
        check06();
    }
    else{
        check6();
    }
    
    $('#nextBtn').removeClass('limited');
});

$('#phaseOne7').click(function(){
    $('.description.show').removeClass('show');
    $('#description-7').addClass('show');

    currentImg = $('.active');   
    currentImg.removeClass('active');
    $('#phaseOneV7').addClass('active');

    document.getElementById('phaseOneV7').play();
    document.getElementById('phaseOneV7').playbackRate=1.0
    x = 7;

    vid = 'phaseOneV7';
    defaultActiveStatus1();
    defaultActiveStatus2();
    defaultActiveStatus3();

    if(document.querySelector('#valueBtn') != null){ 
        check07();
    }
    else{
        check7();
    }
    
    $('#nextBtn').removeClass('limited');
});

$('#phaseThree2').click(function() {
    check2();
    $('#comfirmBtn').removeClass('limited');
});

$('#phaseThree3').click(function() {
    check3();
    $('#comfirmBtn').removeClass('limited');
});

$('#phaseThree4').click(function() {
    check4();
    $('#comfirmBtn').removeClass('limited');
});

$('#phaseThree5').click(function() {
    check5();
    $('#comfirmBtn').removeClass('limited');
});

$('#phaseThree6').click(function() {
    check6();
    $('#comfirmBtn').removeClass('limited');
});

/*control menu status*/

const playIcon = document.getElementById('play');
const speedoneIcon = document.getElementById('speedone');
const speedtwoIcon = document.getElementById('speedtwo');
var vid = 'ok';

var defaultActiveStatus1 = function() {
    if(document.getElementById(vid).paused){
        //console.log("Yes");
        $('#c1').addClass('cActive');
        $('#t1').addClass('t1Active');
    }
    else{
        //console.log("No");        
        $('#c1').removeClass('cActive');
        $('#t1').removeClass('t1Active');
    }
}

var defaultActiveStatus2 = function() {
    if(document.getElementById(vid).playbackRate!=1.2){
        $('#c2').removeClass('cActive');
        $('#t2').removeClass('tActive');
    }
    else{   
        $('#c2').addClass('cActive');
        $('#t2').addClass('tActive');
    }
}

var defaultActiveStatus3 = function() {
    if(document.getElementById(vid).playbackRate!=1.5){
        $('#c3').removeClass('cActive');
        $('#t3').removeClass('tActive');
    }
    else{   
        $('#c3').addClass('cActive');
        $('#t3').addClass('tActive');
    }
}

/*control menu status :hover*/

$( '#play' ).hover(
  function() {
    $('#c1').addClass('cHover');    
    $('#t1').addClass('t1Hover');
  }, function() {
    $('#c1').removeClass('cHover');
    $('#t1').removeClass('t1Hover');
  }
);

$( '#speedone' ).hover(
  function() {
    $('#c2').addClass('cHover');    
    $('#t2').addClass('tHover');
  }, function() {
    $('#c2').removeClass('cHover');
    $('#t2').removeClass('tHover');
  }
);

$( '#speedtwo' ).hover(
  function() {
    $('#c3').addClass('cHover');    
    $('#t3').addClass('tHover');
  }, function() {
    $('#c3').removeClass('cHover');
    $('#t3').removeClass('tHover');
  }
);

/*play & pause*/

$('#play').click(function(){
    //console.log(x);

    switch(x){
        case 1:
            if(document.getElementById('phaseOneV1').paused){
                document.getElementById('phaseOneV1').play();
                
                vid = 'phaseOneV1';
                defaultActiveStatus1();              
            }
            else if(document.getElementById('phaseOneV1').played){
                document.getElementById('phaseOneV1').pause();

                vid = 'phaseOneV1';
                defaultActiveStatus1();
            }
            break;
        case 2:
            if(document.getElementById('phaseOneV2').paused){
                document.getElementById('phaseOneV2').play();

                vid = 'phaseOneV2';
                defaultActiveStatus1();
            }
            else if(document.getElementById('phaseOneV2').played){
                document.getElementById('phaseOneV2').pause();

                vid = 'phaseOneV2';
                defaultActiveStatus1();
            }
            break;
        case 3:
            if(document.getElementById('phaseOneV3').paused){
                document.getElementById('phaseOneV3').play();

                vid = 'phaseOneV3';
                defaultActiveStatus1();
            }
            else if(document.getElementById('phaseOneV3').played){
                document.getElementById('phaseOneV3').pause();

                vid = 'phaseOneV3';
                defaultActiveStatus1();
            }
            break;
        case 4:
            if(document.getElementById('phaseOneV4').paused){
                document.getElementById('phaseOneV4').play()

                vid = 'phaseOneV4';;
                defaultActiveStatus1();
            }
            else if(document.getElementById('phaseOneV4').played){
                document.getElementById('phaseOneV4').pause();

                vid = 'phaseOneV4';
                defaultActiveStatus1();
            }
            break;
        case 5:
            if(document.getElementById('phaseOneV5').paused){
                document.getElementById('phaseOneV5').play();

                vid = 'phaseOneV5';
                defaultActiveStatus1();
            }
            else if(document.getElementById('phaseOneV5').played){
                document.getElementById('phaseOneV5').pause();

                vid = 'phaseOneV6';
                defaultActiveStatus1();
            }
            break;
        case 6:
            if(document.getElementById('phaseOneV6').paused){
                document.getElementById('phaseOneV6').play();

                vid = 'phaseOneV7';
                defaultActiveStatus1();
            }
            else if(document.getElementById('phaseOneV6').played){
                document.getElementById('phaseOneV6').pause();

                vid = 'phaseOneV7';
                defaultActiveStatus1();
            }
            break;
        case 7:
            if(document.getElementById('phaseOneV7').paused){
                document.getElementById('phaseOneV7').play();

                vid = 'phaseOneV7';
                defaultActiveStatus1();
            }
            else if(document.getElementById('phaseOneV7').played){
                document.getElementById('phaseOneV7').pause();

                vid = 'phaseOneV7';
                defaultActiveStatus1();
            }
            break;
    }    
})

/*speed x1.2*/

$('#speedone').click(function(){
    //console.log(x);

    switch(x){
        case 1:
            if(document.getElementById('phaseOneV1').playbackRate!=1.2){
                document.getElementById('phaseOneV1').playbackRate=1.2;

                vid = 'phaseOneV1';
                defaultActiveStatus2();
                defaultActiveStatus3();
            }
            else if(document.getElementById('phaseOneV1').playbackRate=1.2){
                document.getElementById('phaseOneV1').playbackRate=1.0;

                vid = 'phaseOneV1';
                defaultActiveStatus2();
                defaultActiveStatus3();
            }
            break;
        case 2:
            if(document.getElementById('phaseOneV2').playbackRate!=1.2){
                document.getElementById('phaseOneV2').playbackRate=1.2;

                vid = 'phaseOneV2';
                defaultActiveStatus2();
                defaultActiveStatus3();
            }
            else if(document.getElementById('phaseOneV2').playbackRate=1.2){
                document.getElementById('phaseOneV2').playbackRate=1.0;

                vid = 'phaseOneV2';
                defaultActiveStatus2();
                defaultActiveStatus3();
            }
            break;
        case 3:
            if(document.getElementById('phaseOneV3').playbackRate!=1.2){
                document.getElementById('phaseOneV3').playbackRate=1.2;

                vid = 'phaseOneV3';
                defaultActiveStatus2();
                defaultActiveStatus3();
            }
            else if(document.getElementById('phaseOneV3').playbackRate=1.2){
                document.getElementById('phaseOneV3').playbackRate=1.0;

                vid = 'phaseOneV3';
                defaultActiveStatus2();
                defaultActiveStatus3();
            }
            break;
        case 4:
            if(document.getElementById('phaseOneV4').playbackRate!=1.2){
                document.getElementById('phaseOneV4').playbackRate=1.2;

                vid = 'phaseOneV4';
                defaultActiveStatus2();
                defaultActiveStatus3();
            }
            else if(document.getElementById('phaseOneV4').playbackRate=1.2){
                document.getElementById('phaseOneV4').playbackRate=1.0;

                vid = 'phaseOneV4';
                defaultActiveStatus2();
                defaultActiveStatus3();
            }
            break;
        case 5:
            if(document.getElementById('phaseOneV5').playbackRate!=1.2){
                document.getElementById('phaseOneV5').playbackRate=1.2;

                vid = 'phaseOneV5';
                defaultActiveStatus2();
                defaultActiveStatus3();
            }
            else if(document.getElementById('phaseOneV5').playbackRate=1.2){
                document.getElementById('phaseOneV5').playbackRate=1.0;

                vid = 'phaseOneV5';
                defaultActiveStatus2();
                defaultActiveStatus3();
            }
            break;
        case 6:
            if(document.getElementById('phaseOneV6').playbackRate!=1.2){
                document.getElementById('phaseOneV6').playbackRate=1.2;

                vid = 'phaseOneV6';
                defaultActiveStatus2();
                defaultActiveStatus3();
            }
            else if(document.getElementById('phaseOneV6').playbackRate=1.2){
                document.getElementById('phaseOneV6').playbackRate=1.0;

                vid = 'phaseOneV6';
                defaultActiveStatus2();
                defaultActiveStatus3();
            }
            break;
        case 7:
            if(document.getElementById('phaseOneV7').playbackRate!=1.2){
                document.getElementById('phaseOneV7').playbackRate=1.2;

                vid = 'phaseOneV7';
                defaultActiveStatus2();
                defaultActiveStatus3();
            }
            else if(document.getElementById('phaseOneV7').playbackRate=1.2){
                document.getElementById('phaseOneV7').playbackRate=1.0;

                vid = 'phaseOneV7';
                defaultActiveStatus2();
                defaultActiveStatus3();
            }
            break;
    }    
})

/*speed x1.5*/

$('#speedtwo').click(function(){
    //console.log(x);

    switch(x){
        case 1:
            if(document.getElementById('phaseOneV1').playbackRate!=1.5){
                document.getElementById('phaseOneV1').playbackRate=1.5;

                vid = 'phaseOneV1';
                defaultActiveStatus2();
                defaultActiveStatus3();
            }
            else if(document.getElementById('phaseOneV1').playbackRate=1.5){
                document.getElementById('phaseOneV1').playbackRate=1.0;

                vid = 'phaseOneV1';
                defaultActiveStatus2();
                defaultActiveStatus3();
            }
            break;
        case 2:
            if(document.getElementById('phaseOneV2').playbackRate!=1.5){
                document.getElementById('phaseOneV2').playbackRate=1.5;

                vid = 'phaseOneV2';
                defaultActiveStatus2();
                defaultActiveStatus3();
            }
            else if(document.getElementById('phaseOneV2').playbackRate=1.5){
                document.getElementById('phaseOneV2').playbackRate=1.0;

                vid = 'phaseOneV2';
                defaultActiveStatus2();
                defaultActiveStatus3();
            }
            break;
        case 3:
            if(document.getElementById('phaseOneV3').playbackRate!=1.5){
                document.getElementById('phaseOneV3').playbackRate=1.5;

                vid = 'phaseOneV3';
                defaultActiveStatus2();
                defaultActiveStatus3();
            }
            else if(document.getElementById('phaseOneV3').playbackRate=1.5){
                document.getElementById('phaseOneV3').playbackRate=1.0;

                vid = 'phaseOneV3';
                defaultActiveStatus2();
                defaultActiveStatus3();
            }
            break;
        case 4:
            if(document.getElementById('phaseOneV4').playbackRate!=1.5){
                document.getElementById('phaseOneV4').playbackRate=1.5;

                vid = 'phaseOneV4';
                defaultActiveStatus2();
                defaultActiveStatus3();
            }
            else if(document.getElementById('phaseOneV4').playbackRate=1.5){
                document.getElementById('phaseOneV4').playbackRate=1.0;

                vid = 'phaseOneV4';
                defaultActiveStatus2();
                defaultActiveStatus3();
            }
            break;
        case 5:
            if(document.getElementById('phaseOneV5').playbackRate!=1.5){
                document.getElementById('phaseOneV5').playbackRate=1.5;

                vid = 'phaseOneV5';
                defaultActiveStatus2();
                defaultActiveStatus3();
            }
            else if(document.getElementById('phaseOneV5').playbackRate=1.5){
                document.getElementById('phaseOneV5').playbackRate=1.0;

                vid = 'phaseOneV5';
                defaultActiveStatus2();
                defaultActiveStatus3();
            }
            break;
        case 6:
            if(document.getElementById('phaseOneV6').playbackRate!=1.5){
                document.getElementById('phaseOneV6').playbackRate=1.5;

                vid = 'phaseOneV6';
                defaultActiveStatus2();
                defaultActiveStatus3();
            }
            else if(document.getElementById('phaseOneV6').playbackRate=1.5){
                document.getElementById('phaseOneV6').playbackRate=1.0;

                vid = 'phaseOneV6';
                defaultActiveStatus2();
                defaultActiveStatus3();
            }
            break;
        case 7:
            if(document.getElementById('phaseOneV7').playbackRate!=1.5){
                document.getElementById('phaseOneV7').playbackRate=1.5;

                vid = 'phaseOneV7';
                defaultActiveStatus2();
                defaultActiveStatus3();
            }
            else if(document.getElementById('phaseOneV7').playbackRate=1.5){
                document.getElementById('phaseOneV7').playbackRate=1.0;

                vid = 'phaseOneV7';
                defaultActiveStatus2();
                defaultActiveStatus3();
            }
            break;
    }    
})

/*toggle check icons*/

var check1 = function() {
    var currentIcon = document.getElementById('check1');

    if(currentIcon.src.match('Assets/Fonts/check.png')){
        currentIcon.src = 'Assets/Fonts/check-toggle.png';
    }
    else{
        currentIcon.src = 'Assets/Fonts/check.png';
    }
}

var check2 = function() {
    var currentIcon = document.getElementById('check2');

    if(currentIcon.src.match('Assets/Fonts/check.png')){
        currentIcon.src = 'Assets/Fonts/check-toggle.png';
    }
    else{
        currentIcon.src = 'Assets/Fonts/check.png';
    }
}

var check3 = function() {
    var currentIcon = document.getElementById('check3');

    if(currentIcon.src.match('Assets/Fonts/check.png')){
        currentIcon.src = 'Assets/Fonts/check-toggle.png';
    }
    else{
        currentIcon.src = 'Assets/Fonts/check.png';
    }
}

var check4 = function() {
    var currentIcon = document.getElementById('check4');

    if(currentIcon.src.match('Assets/Fonts/check.png')){
        currentIcon.src = 'Assets/Fonts/check-toggle.png';
    }
    else{
        currentIcon.src = 'Assets/Fonts/check.png';
    }
}

var check5 = function() {
    var currentIcon = document.getElementById('check5');

    if(currentIcon.src.match('Assets/Fonts/check.png')){
        currentIcon.src = 'Assets/Fonts/check-toggle.png';
    }
    else{
        currentIcon.src = 'Assets/Fonts/check.png';
    }
}

var check6 = function() {
    var currentIcon = document.getElementById('check6');

    if(currentIcon.src.match('Assets/Fonts/check.png')){
        currentIcon.src = 'Assets/Fonts/check-toggle.png';
    }
    else{
        currentIcon.src = 'Assets/Fonts/check.png';
    }
}

var check7 = function() {
    var currentIcon = document.getElementById('check7');

    if(currentIcon.src.match('Assets/Fonts/check.png')){
        currentIcon.src = 'Assets/Fonts/check-toggle.png';
    }
    else{
        currentIcon.src = 'Assets/Fonts/check.png';
    }
}

$('#check1').click(function() {
    check1();
})

$('#check2').click(function() {
    check2();
})

$('#check3').click(function() {
    check3();
})

$('#check4').click(function() {
    check4();
})

$('#check5').click(function() {
    check5();
})

$('#check6').click(function() {
    check6();
})

$('#check7').click(function() {
    check7();
})

/*toggle one icon only*/

var check01 = function() {
    document.getElementById('check-1').src = 'Assets/Fonts/check-toggle.png';
    document.getElementById('check-2').src = 'Assets/Fonts/check.png';
    document.getElementById('check-3').src = 'Assets/Fonts/check.png';
    document.getElementById('check-4').src = 'Assets/Fonts/check.png';
    document.getElementById('check-5').src = 'Assets/Fonts/check.png';
    document.getElementById('check-6').src = 'Assets/Fonts/check.png';
}

var check02 = function() {
    document.getElementById('check-1').src = 'Assets/Fonts/check.png';
    document.getElementById('check-2').src = 'Assets/Fonts/check-toggle.png';
    document.getElementById('check-3').src = 'Assets/Fonts/check.png';
    document.getElementById('check-4').src = 'Assets/Fonts/check.png';
    document.getElementById('check-5').src = 'Assets/Fonts/check.png';
    document.getElementById('check-6').src = 'Assets/Fonts/check.png';
}

var check03 = function() {
    document.getElementById('check-1').src = 'Assets/Fonts/check.png';
    document.getElementById('check-2').src = 'Assets/Fonts/check.png';
    document.getElementById('check-3').src = 'Assets/Fonts/check-toggle.png';
    document.getElementById('check-4').src = 'Assets/Fonts/check.png';
    document.getElementById('check-5').src = 'Assets/Fonts/check.png';
    document.getElementById('check-6').src = 'Assets/Fonts/check.png';
}

var check04 = function() {
    document.getElementById('check-1').src = 'Assets/Fonts/check.png';
    document.getElementById('check-2').src = 'Assets/Fonts/check.png';
    document.getElementById('check-3').src = 'Assets/Fonts/check.png';
    document.getElementById('check-4').src = 'Assets/Fonts/check-toggle.png';
    document.getElementById('check-5').src = 'Assets/Fonts/check.png';
    document.getElementById('check-6').src = 'Assets/Fonts/check.png';
}

var check05 = function() {
    document.getElementById('check-1').src = 'Assets/Fonts/check.png';
    document.getElementById('check-2').src = 'Assets/Fonts/check.png';
    document.getElementById('check-3').src = 'Assets/Fonts/check.png';
    document.getElementById('check-4').src = 'Assets/Fonts/check.png';
    document.getElementById('check-5').src = 'Assets/Fonts/check-toggle.png';
    document.getElementById('check-6').src = 'Assets/Fonts/check.png';
}

var check06 = function() {
    document.getElementById('check-1').src = 'Assets/Fonts/check.png';
    document.getElementById('check-2').src = 'Assets/Fonts/check.png';
    document.getElementById('check-3').src = 'Assets/Fonts/check.png';
    document.getElementById('check-4').src = 'Assets/Fonts/check.png';
    document.getElementById('check-5').src = 'Assets/Fonts/check.png';
    document.getElementById('check-6').src = 'Assets/Fonts/check-toggle.png';
}

$('#check-1').click(function() {
    check1();
})

$('#check-2').click(function() {
    check2();
})

$('#check-3').click(function() {
    check3();
})

$('#check-4').click(function() {
    check4();
})

$('#check-5').click(function() {
    check5();
})

$('#check-6').click(function() {
    check6();
})
            
/*time-Updated Simulation page-3*/
/*
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
*/

/*time-Updated Simulation page-4*/

const p4Video = document.querySelector('.autoVid2')
if(p4Video != null){        
    p4Video.playbackRate=0.92

    p4Video.addEventListener('timeupdate', function(event) {
    var currentTime = p4Video.currentTime;    
    //console.log(currentTime)

        if (currentTime > 3.5 && currentTime < 4) {
        //console.log(animationTrigger);

        $('.columns').addClass('cMove');
        $('.site').addClass('sMove');        
        $('.navigationBtn').addClass('nMove');
        document.getElementById('phaseThreeV1').playbackRate=1.5;
        }

        if (currentTime > 6.08 && currentTime < 7) {
        console.log('in');
        //console.log(animationTrigger);
        document.getElementById('check01').src = 'Assets/Fonts/check-toggle.png';
        }

        if (currentTime > 11.1 && currentTime < 12) {
        console.log('in2');
        //console.log(animationTrigger);

        document.getElementById('check02').src = 'Assets/Fonts/check-toggle.png';
        }

        if (currentTime > 15.2 && currentTime < 16) {
        console.log('in3');
        //console.log(animationTrigger);

        document.getElementById('check03').src = 'Assets/Fonts/check-toggle.png';
        }

        if (currentTime > 23.3 && currentTime < 24) {
        console.log('in4');
        //console.log(animationTrigger);

        document.getElementById('check04').src = 'Assets/Fonts/check-toggle.png';
        }

        if (currentTime > 27.7 && currentTime < 29) {
        console.log('in5');
        //console.log(animationTrigger);

        document.getElementById('check05').src = 'Assets/Fonts/check-toggle.png';
        }

        if (currentTime > 32.1 && currentTime < 33) {
        console.log('in6');
        //console.log(animationTrigger);

        document.getElementById('check06').src = 'Assets/Fonts/check-toggle.png';
        }

        if (currentTime > 38 && currentTime < 38.1) {
        console.log('in7');
        //console.log(animationTrigger);

        document.getElementById('check07').src = 'Assets/Fonts/check-toggle.png';
        }
    })
}