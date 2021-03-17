// PRELOADER
$(window).on('load', function () {
    $('.preloader').addClass('hide');
    $('body').addClass('body-show');
    localStorage.clear();
});


//SLIDER
var swiperHTP = new Swiper('.htp-slider.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
        el: '.htp-slider .swiper-pagination',
    },
});

// FUNCTION
function countDownTimer(){
    var countdownNumberEl = document.querySelector('.countdown-number');
    var countdown = 3;
    countdownNumberEl.textContent = countdown;

    var setIntervalCount = setInterval(function() {
        countdown = --countdown <= 0 ? 0 : countdown;
        countdownNumberEl.textContent = countdown;
    }, 1000);

    setTimeout(function() {
        clearInterval(setIntervalCount);
    }, 3000);
}
function waktuBatasGame(waktuAkhir){
    var countdownNumberEl = document.querySelector('#waktuBatas');
    var countdown = waktuAkhir;
    countdownNumberEl.textContent = countdown;
    var setIntervalCount = setInterval(function() {
        countdown = --countdown <= 0 ? 0 : countdown;
        countdownNumberEl.textContent = countdown;
    }, 1000);

    var waktuAkhirtoMs = waktuAkhir * 1000;
    setTimeout(function() {
        clearInterval(setIntervalCount);
    }, waktuAkhirtoMs);
}

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};
var stage1 = getUrlParameter('stage1');
var stage2 = getUrlParameter('stage2');
var stage3 = getUrlParameter('stage3');
var stage4 = getUrlParameter('stage4');
var stage5 = getUrlParameter('stage5');
var stage6 = getUrlParameter('stage6');

function playNow(){
    var waktuBatasMain = localStorage.getItem("waktuMain");
    var waktuBatasMaintoMS = waktuBatasMain * 1000;

    $('#modalStageHowToPlay').addClass('hide');
    $('#modalCountDown').removeClass('hide');
    $('#modalGameWaktuSelesai').addClass('hide');
    $('.gameplay').addClass('show');

    countDownTimer();
    setTimeout(function() {
        $("#modalCountDown").addClass('hide');
        $('.backdrop').addClass('hide');

        waktuBatasGame(waktuBatasMain);
        setTimeout(function() {
            $('#modalGameWaktuSelesai').removeClass('hide');
            $('.backdrop').removeClass('hide');

            $('#modalGameWaktuSelesai .stage .stage__text h5').html('STAGE '+localStorage.getItem("stageId"));
            $('#modalGameWaktuSelesai .stage .stage__text h4').html(localStorage.getItem("stageName"));
        }, waktuBatasMaintoMS);
    }, 3000);
}
function exitGame(){
    localStorage.clear();
    $('.gameplay').removeClass('show');
    $('#modalGameWaktuSelesai').addClass('hide');
    $('.backdrop').addClass('hide');
}

function nextSlideHTP(id){
    if(id <= 2){
        swiperHTP.slideTo(id);
    }else{
        playNow();
    }
}

$('.home .drag .ground .stage').click(function () {
    var stageId = $(this).data("stage").id;
    var stageName = $(this).data("stage").name;
    var waktuMain = $(this).data("stage").waktuMain;

    if(getUrlParameter('stage'+stageId) == 'lock'){
        $('#modalStageLock').removeClass('hide');
        $('.backdrop').removeClass('hide');

        $('#modalStageLock .stage .stage__text h5').html('STAGE '+stageId);
        $('#modalStageLock .stage .stage__text h4').html(stageName);
        $('#modalStageLock .modal-title').html(stageName);
    }else{
        $('.gameplay').addClass('show');
        $('#modalStageHowToPlay .stage .stage__text h5').html('STAGE '+stageId);
        $('#modalStageHowToPlay .stage .stage__text h4').html(stageName);
        $('#modalStageHowToPlay').removeClass('hide');
        $('.backdrop').removeClass('hide');
        swiperHTP.slideTo(0);

        //setLocalStorage
        localStorage.setItem("stageId", stageId);
        localStorage.setItem("stageName", stageName);
        localStorage.setItem("waktuMain", waktuMain);
    }
});

//MODAL
$('.modalClose').click(function () {
    $('.modal').addClass('hide');
    $('.backdrop').addClass('hide');
});