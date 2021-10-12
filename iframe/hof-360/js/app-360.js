//SLIDER
var swiperHTP = new Swiper('.htp-slider.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: '.htp-slider .swiper-pagination',
        clickable: true,
    },
});
function nextSlideHTP(id){
    if(id <= 2){
        swiperHTP.slideTo(id);
    }else{
        closeHTP();

        // DATALAYER
        var URL = window.location.href;
        datalayerPush('interaction', 'Clicked on Button', 'Mulai Sekarang', URL, dataLayerEventCampaign);
        // !DATALAYER
    }
}
function closeHTP(){
    $('#modalHowToPlay').addClass('hide');
    $('.backdrop').addClass('hide');
    viewer.startOrientation()

        
    // DATALAYER
    datalayerPush('impression', 'Page Reached', '360 Page', '360', dataLayerEventCampaign);
    // !DATALAYER
}

// 360 Init
function hotspot(hotSpotDiv, args) {
    hotSpotDiv.classList.add('custom-tooltip');
    var wrapper = document.createElement('div');
    wrapper.classList.add('custom-tooltip__wrapper');
    var span = document.createElement('div');
    span.classList.add('custom-tooltip__text');
    span.innerHTML = args;
    var span2 = document.createElement('div');
    span2.classList.add('custom-tooltip__circle');
    var span3 = document.createElement('div');
    span3.classList.add('custom-tooltip__circle-inner');
    hotSpotDiv.appendChild(wrapper);
    wrapper.appendChild(span);
    wrapper.appendChild(span2);
    span2.appendChild(span3);
    // wrapper.style.width = span.scrollWidth - 20 + 'px';
    // wrapper.style.marginLeft = -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + 'px';
    // wrapper.style.marginTop = -span.scrollHeight - 12 + 'px';
}
function openCreateAlbum(){
    // DATALAYER
    var URL = window.location.href;
    datalayerPush('interaction', 'Clicked on Button', 'Ciptain Album Band Lo', URL, dataLayerEventCampaign);
    // !DATALAYER

    setTimeout(function(){
        openLink('create-album.html')
    }, 200)
}
function openHallOfFame(){
    // DATALAYER
    var URL = window.location.href;
    datalayerPush('interaction', 'Clicked on Button', 'Kunjungin Hall of Fame Disini', URL, dataLayerEventCampaign);
    // !DATALAYER

    setTimeout(function(){
        openLink('hall-of-fame.html')
    }, 200)

}
var panoramaGambar = '360-2k.jpeg';
    panoramaLokasi = [
        {
            "pitch": 3.1367010256588834, 
            "yaw": -20.72823182567128,
            "cssClass": "custom-hotspot",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "Ciptain&nbsp;Album&nbsp;Band&nbsp;Lo",
            clickHandlerFunc: openCreateAlbum
        },
        {
            "pitch": 18.32941862584953, 
            "yaw": 17,
            "cssClass": "custom-hotspot",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "Kunjungin&nbsp;Hall&nbsp;of&nbsp;Fame&nbsp;Disini",
            clickHandlerFunc: openHallOfFame
        }
    ];
init360(panoramaGambar, panoramaLokasi);