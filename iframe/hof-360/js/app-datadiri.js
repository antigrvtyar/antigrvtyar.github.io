function submitDataDiri(){
    var namalengkapVal = $("input[name=namalengkap]").val();
    var nomorteleponVal = $("input[name=nomortelepon]").val();
    var alamatlengkapVal = $("textarea[name=alamatlengkap]").val();

    if(namalengkapVal == ''){
        $("input[name=namalengkap]").addClass("error")
    }else{
        $("input[name=namalengkap]").removeClass("error")
    }
    if(nomorteleponVal == ''){
        $("input[name=nomortelepon]").addClass("error")
    }else{
        $("input[name=nomortelepon]").removeClass("error")
    }
    if(alamatlengkapVal == ''){
        $("textarea[name=alamatlengkap]").addClass("error")
    }else{
        $("textarea[name=alamatlengkap]").removeClass("error")
    }

    if(namalengkapVal != '' && nomorteleponVal != '' && alamatlengkapVal != ''){
        $("input[name=namalengkap]").removeClass("error")
        $("input[name=nomortelepon]").removeClass("error")
        $("textarea[name=alamatlengkap]").removeClass("error")
        // alert("AYOO")
        // openLink('thank.html')

        var urlImageResponse = 'https://antigravity.id/';
        var dataDiriForm = {image: urlImageResponse, type:'ALBUM_SUBMISSION', name: namalengkapVal, phone: nomorteleponVal, address: alamatlengkapVal}
        axios.post(APIURLDataDiri, dataDiriForm, {headers: configHeaderDataDiri})
        .then(function (response) {

            // GO TO THANKS
            // console.log(response)
            // openLink('thank.html')

        }).catch(function (error) {
            // handle error
        });
    }
}

function exploreSekarang(){
    // DATALAYER
    var URL = window.location.href;
    datalayerPush('interaction', 'Clicked on Button', 'Explore Sekarang', URL, dataLayerEventCampaign);
    // !DATALAYER

    setTimeout(function(){
        openLink('create-album.html')
    }, 200)
}