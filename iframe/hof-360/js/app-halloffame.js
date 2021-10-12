function openDetailFrame(label, image){
    $('#modalFameDetail').removeClass('hide');
    $('.backdrop').removeClass('hide');

    var modalLabel = $("#modalLabel")
    var modalAlbum = $("#modalAlbum")

    if(label == 'label'){
        modalLabel.addClass("halloffame-block--label")
        modalAlbum.attr("src", image);
    }
}

// RENDER KONTEN
var hallofamelist = document.getElementById('hallofamelist')
var urlPath = "http://localhost:4000/v1/images/";
axios.get('sample.json')
    .then((response) => {
        if(response.data){
            console.log(response.data.data)
            response.data.data.forEach(function(entry) {
                var imageURL = urlPath+entry.image;
                if(entry.isEditorPicked){
                    hallofamelist.insertAdjacentHTML('afterend', `<a href="javascript:;" class="halloffame-block halloffame-block--label" onclick="openDetailFrame('label','`+imageURL+`')">
                    <div class="halloffame-block__label"><div class="block-image"><img src="./assets/images/label-editor-choice.png" alt="Editor's Choice"></div></div>
                    <div class="block-image halloffame-block__image"><img src="`+imageURL+`" alt="Hall of Fame"></div></a>`)
                }else{
                    hallofamelist.insertAdjacentHTML('afterend', `<a href="javascript:;" class="halloffame-block" onclick="openDetailFrame('','`+imageURL+`')">
                    <div class="halloffame-block__label"><div class="block-image"><img src="./assets/images/label-editor-choice.png" alt="Editor's Choice"></div></div>
                    <div class="block-image halloffame-block__image"><img src="`+imageURL+`" alt="Hall of Fame"></div></a>`)
                }
            })
        }
    })
  .catch((err)=> {})