//SLIDER
var swiperCATemplate = new Swiper('.createalbum-slider.swiper-container', {
    slidesPerView: "auto",
    spaceBetween: 15,
    centeredSlides: true,
    pagination: {
        el: '.createalbum-slider .swiper-pagination',
        clickable: true,
    },
});
var activeTemplate = swiperCATemplate.realIndex;
var assetTemplate;

var sliderCA = document.querySelector('.createalbum-slider');
var sliderCAHeight;
swiperCATemplate.on('slideChange', function () {
    sliderCAHeight = sliderCA.offsetHeight;
    sliderCA.style.height = sliderCAHeight+'px';

    activeTemplate = swiperCATemplate.realIndex;
    if(activeTemplate == 0){
        assetTemplate = './assets/images/frame/Album - 01.png';
        $("#frameAlbumStyle").addClass("album-1");
        $("#frameAlbumStyle").removeClass("album-2");
        $("#frameAlbumStyle").removeClass("album-3");
        $("#frameAlbumStyle").removeClass("album-4");
    }else if(activeTemplate == 1){
        assetTemplate = './assets/images/frame/Album - 02.png';
        $("#frameAlbumStyle").removeClass("album-1");
        $("#frameAlbumStyle").addClass("album-2");
        $("#frameAlbumStyle").removeClass("album-3");
        $("#frameAlbumStyle").removeClass("album-4");
    }else if(activeTemplate == 2){
        assetTemplate = './assets/images/frame/Album - 03.png';
        $("#frameAlbumStyle").removeClass("album-1");
        $("#frameAlbumStyle").removeClass("album-2");
        $("#frameAlbumStyle").addClass("album-3");
        $("#frameAlbumStyle").removeClass("album-4");
    }else if(activeTemplate == 3){
        assetTemplate = './assets/images/frame/Album - 04.png';
        $("#frameAlbumStyle").removeClass("album-1");
        $("#frameAlbumStyle").removeClass("album-2");
        $("#frameAlbumStyle").removeClass("album-3");
        $("#frameAlbumStyle").addClass("album-4");
    }

    $('#frameAlbum').attr('src', assetTemplate);
    
});


var transformY = 0, transformX = 0, scale = 1, rotate = 0, limitFileSize = 2000000;
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            console.log(input.files[0].size)
            if(input.files[0].size > limitFileSize){
                $("#errorFoto2").show();
            }else{
                $("#errorFoto2").hide();
                $('#fotoUploadEdit').attr('src', e.target.result);
                $('#fotoUploadEditMod').attr('src', e.target.result);
                $("#createAlbumEditFoto").removeClass("hide");
                $("#btnSimpanFoto").html("Simpan Foto");
    
                transformY = 0, transformX = 0, scale = 1, rotate = 0;
                var moveResultEdit = $("#moveResultEdit");
                var moveResultEditMod = $("#moveResultEditMod");
                moveResultImgEdit(moveResultEdit, transformY, transformX, scale, rotate)
                moveResultImgEdit(moveResultEditMod, transformY, transformX, scale, rotate)
            }

        };

        reader.readAsDataURL(input.files[0]);
    }
}

function moveResultImgEdit(object,translateY,translateX, scale, rotate){
    object.css("transform", "translate("+translateX+"%,"+translateY+"%) scale("+scale+") rotate("+rotate+"deg)");
}

function fotoEdit(mode){
    var moveResultEdit = $("#moveResultEdit");
    var moveResultEditMod = $("#moveResultEditMod");

    if(mode == 'close'){
        $("#createAlbumEditFoto").addClass("hide");
    }else if(mode == 'moveup'){
        transformY -= 5
        moveResultImgEdit(moveResultEdit, transformY, transformX, scale, rotate)
        moveResultImgEdit(moveResultEditMod, transformY, transformX, scale, rotate)
    }else if(mode == 'movedown'){
        transformY += 5
        moveResultImgEdit(moveResultEdit, transformY, transformX, scale, rotate)
        moveResultImgEdit(moveResultEditMod, transformY, transformX, scale, rotate)
    }else if(mode == 'zoomin'){
        scale += .1
        moveResultImgEdit(moveResultEdit, transformY, transformX, scale, rotate)
        moveResultImgEdit(moveResultEditMod, transformY, transformX, scale, rotate)
    }else if(mode == 'zoomout'){
        scale -= .1
        moveResultImgEdit(moveResultEdit, transformY, transformX, scale, rotate)
        moveResultImgEdit(moveResultEditMod, transformY, transformX, scale, rotate)
    }else if(mode == 'rotate'){
        rotate += 45
        moveResultImgEdit(moveResultEdit, transformY, transformX, scale, rotate)
        moveResultImgEdit(moveResultEditMod, transformY, transformX, scale, rotate)
    }
    else if(mode == 'simpan'){
        takeToCanvas();
        $("#btnSimpanFoto").html("Mohon tunggu...");
        $("#backdrop").removeClass("hide");
        setTimeout(function() {
            saveFotoUpload();
            pilihFoto(0);
            $("#createAlbumEditFoto").addClass("hide");
            $("#btnSimpanFoto").html("Simpan Foto");
            $("#backdrop").addClass("hide");
        }, 6000);
    }
}

function takeToCanvas(){
    html2canvas(document.querySelector("#finalResultEditMod"),{
        scale: 2
    }).then(canvas => {
      $("#takeToCanvas").append(canvas);

        // document.querySelector("#takeToCanvas canvas").toBlob(function(blob) {
        //     saveAs(blob, "Foto.png");
        // }, "image/png");
    });
}
function takeToCanvasAlbum(){
    html2canvas(document.querySelector("#frameAlbumStyle"),{
        scale: 2
    }).then(canvas => {
      $("#frameAlbumCanvas").append(canvas);
    });
}
function saveFotoUpload(){
    var hasilFotoUpload = document.querySelector("#takeToCanvas canvas").toDataURL('image/png');
    // console.log(hasilFotoUpload)
    
    $('#fotoFinalUpload').val(hasilFotoUpload)
    $('#hasilFotoUpload').attr('src', hasilFotoUpload);
    $("#hasilFotoUploadBlock").removeClass("hide");
    $("#foto-0").prop("checked", true);
    $("#takeToCanvas").html('');
}
function saveAlbumUpload(){
    ;
    document.querySelector("#frameAlbumCanvas canvas").toBlob(function(blob) {
        // saveAs(blob, "Album Mangnum.png");

        // openLink('data-diri.html')
        var hasilAlbumUpload = blob
        console.log(hasilAlbumUpload)
        var hasilParam = {image : hasilAlbumUpload};
    
        axios.post(APIURLAlbum, hasilParam, {headers: configHeaderAlbum})
        .then(function (response) {
            console.log(response)
            // GO TO FORM DATA DIRI
            // console.log(response)
            openLink('data-diri.html')
        }).catch(function (error) {
            // handle error
        });
        
    }, "image/png");

    // var hasilAlbumUpload = document.querySelector("#frameAlbumCanvas canvas").toDataURL('image/png');
    // console.log(hasilAlbumUpload)

}

function submitCoverAlbum(){
    var namabandVal = $("input[name=namaband]").val();
    var fotodefaultVal = $("input[name=fotodefault]:checked").val();
    var setujumateriVal = $("input[name=setujumateri]:checked").val();

    if(namabandVal == ''){
        $("input[name=namaband]").addClass("error")
    }else{
        $("input[name=namaband]").removeClass("error")
    }
    if(fotodefaultVal == undefined){
        $("#errorFoto").show()
    }else{
        $("#errorFoto").hide()
    }

    if(namabandVal != '' && fotodefaultVal != undefined){
        // DATALAYER
        var URL = window.location.href;
        datalayerPush('interaction', 'Clicked on Button', 'Submit Cover Album', URL, dataLayerEventCampaign);
        // !DATALAYER

        $("#frameAlbumNamaBand").html(namabandVal)

        if(fotodefaultVal == 0){
            $('#frameAlbumFoto').attr('src', $('#fotoFinalUpload').val());
        }else if(fotodefaultVal == 1){
            $('#frameAlbumFoto').attr('src', './assets/images/default/default-1.jpeg');
        }else if(fotodefaultVal == 2){
            $('#frameAlbumFoto').attr('src', './assets/images/default/default-2.jpeg');
        }else if(fotodefaultVal == 3){
            $('#frameAlbumFoto').attr('src', './assets/images/default/default-3.jpeg');
        }else if(fotodefaultVal == 4){
            $('#frameAlbumFoto').attr('src', './assets/images/default/default-4.jpeg');
        }


        $("#submitCoverAlbum").html("Mohon tunggu...");
        $("#backdrop").removeClass("hide");
        setTimeout(function() {
            takeToCanvasAlbum();
            setTimeout(function() {
                saveAlbumUpload();
                $("#submitCoverAlbum").html("Selesai");
                $("#backdrop").addClass("hide");
            }, 6000);
        }, 500);
    }
}

function pilihFoto(index){
    $(".createalbum-form-foto__block .label-foto").addClass("opacity");
    if(index == 0){
        $('#frameAlbumFoto').attr('src', $('#fotoFinalUpload').val());
    }else if(index == 1){
        $('#frameAlbumFoto').attr('src', './assets/images/default/default-1.jpeg');
    }else if(index == 2){
        $('#frameAlbumFoto').attr('src', './assets/images/default/default-2.jpeg');
    }else if(index == 3){
        $('#frameAlbumFoto').attr('src', './assets/images/default/default-3.jpeg');
    }else if(index == 4){
        $('#frameAlbumFoto').attr('src', './assets/images/default/default-4.jpeg');
    }
}