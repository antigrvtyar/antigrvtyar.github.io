//panorama
var viewer;
function init360(panoramaGambar, panoramaLokasi){
    if(viewer != undefined){
        viewer.destroy();
    }

    const mediaQuery = window.matchMedia('(max-width: 768px)');
    let hfov;
    if (mediaQuery.matches) {
        hfov = 50
    }else{
        hfov = 110
    }

    viewer = pannellum.viewer('panorama', {
        "hotSpotDebug": false,
        "type": "equirectangular",
        "panorama": "./assets/images/" + panoramaGambar,
        "hotSpots": panoramaLokasi,
        "keyboardZoom": false,
        "showFullscreenCtrl": false,
        "showZoomCtrl": false,
        "showControls": true,
        "autoLoad": true,
        "pitch": 0,
        "yaw": 0,
        "hfov": hfov,
        draggable: true,
        mouseZoom: false
    });
    viewer.startOrientation();
}