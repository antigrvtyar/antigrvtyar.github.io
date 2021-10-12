//MODAL
$('.modalClose').click(function () {
    $('.modal').addClass('hide');
    $('.backdrop').addClass('hide');
});

function openLink(url){
    window.location.href = url
}

//DATALAYER
let dataLayerEventCampaign = "HOF - 360";
function datalayerPush(eventDL, eventC, eventA, eventL, eventCmpgn){
    dataLayer.push({
        'event' : eventDL,
        'event_category': eventC,
        'event_action': eventA,
        'event_label': eventL,
        'campaignName': eventCmpgn
    });

    // console.log(dataLayer)
}


// GET COOKIE TOKEN
let cookie = document.cookie;
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
var cookieAuth = readCookie('auth');
var cookieAuthJson = JSON.parse(cookieAuth)
var cookieAuthToken = cookieAuthJson.accessToken;
// console.log(cookie)
// console.log(cookieAuth)
// console.log(cookieAuthJson)
// console.log(cookieAuthToken)

var token = cookieAuthToken;
var APIURLAlbum = "https://qa-api.magnum.id/v1/files/base64";
var APIURLDataDiri = "https://qa-api.magnum.id/v1/submissions";
var APIKEY = "UimyUwi+xLO9C8/+kWybHFtWvoAbMMYDt4Tc6FKi/H0=";
var configHeaderAlbum = {'x-api-key': APIKEY, 'authorization': 'Bearer '+token, 'Content-Type': 'multipart/form-data'};
var configHeaderDataDiri = {'x-api-key': APIKEY, 'authorization': 'Bearer '+token};
