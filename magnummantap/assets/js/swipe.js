'use strict';
localStorage.clear();

var gameAreaSwipe = document.querySelector('.game-area__swipe');
var gameAreaSwipeCard = document.querySelectorAll('.game-area__swipe-card');
var mitos = document.getElementById('mitos');
var fakta = document.getElementById('fakta');
var score = 0;

var gameChoice = document.querySelector('.game-choice');
var gameProgressBar = document.querySelectorAll('.game-progress__bar-block');
var gameinfo = document.getElementById('gameinfo');
var backdrop = document.getElementById('backdrop');
var modalMitos = document.getElementById('modalMitos');
var modalFakta = document.getElementById('modalFakta');
var modalMitosButton = document.querySelector('.modalMitosButton');
var modalFaktaButton = document.querySelector('.modalFaktaButton');
var modalMitosContent = document.getElementById('modalMitosContent');
var modalFaktaContent = document.getElementById('modalFaktaContent');
var modalMitosAnswer = document.getElementById('modalMitosAnswer');
var modalFaktaAnswer = document.getElementById('modalFaktaAnswer');
var gameIndex = 0;
var gameData = [
  {
    true: '',
    mitos: '',
    fakta: '',
    question: ''
  },
  {
    true: 'mitos',
    mitos: '<p>Darah Biru gak bergantung sama nama besar karena pede sama kemampuan. Terusin, Bro. Karakter kuat lo ini yang bikin orang-orang respek sama lo.</p>',
    fakta: '<p>Kalo cuma ngandelin nama besar tanpa usaha pasti bakal kegeser sama yang kerjanya maksimal. Yuk fokus kerja dan tunjukin semua kemampuan yang lo punya.</p>',
    question: 'question1'
  },
  {
    true: 'mitos',
    mitos: '<p>Kesuksesan Darah Biru bukan hanya tergambar dari hasil yang didapatkan, tapi juga dari besarnya perjuangan yang diberikan. Dan biasanya, hasil yang didapat tanpa jalan pintas bisa kasih kepuasan maksimal.</p>',
    fakta: '<p>Yakin lo, Bro? <br> Darah Biru itu ngebangun sukses  bukan cuma dari hasil, tapi juga soal proses yang lo laluin. Nikmatin aja prosesnya, biar bisa maksimal ngebanggain hasilnya. </p>',
    question: 'question2'
  },
  {
    true: 'mitos',
    mitos: '<p>Lo paham banget nih kalo Darah Biru ngeliat pasangan bukan cuma dari latar belakang sosial, tapi juga soal kecocokan. Keren lo, Bro!</p>',
    fakta: '<p>Berasal dari satu kalangan nggak ngejamin kecocokan kalian, Bro. Coba deh lebih fokus ke kepribadian calon pasangan, biar lebih enak jalanin ke depan.</p>',
    question: 'question3'
  },
  {
    true: 'fakta',
    mitos: '<p>Hmm, rajin cari muka justru pertanda kalo lo gak pede sama kemampuan lo sendiri, Bro. Daripada capek cari muka, mending fokus berkarya sampe atasan lo nengok ke skill yang lo punya.</p>',
    fakta: '<p>Darah Biru emang harus percaya diri sama kemampuan sendiri, jadi gak perlu palsu sana-sini.</p>',
    question: 'question4'
  },
  {
    true: 'fakta',
    mitos: '<p>Darah Biru itu nggak cuma ngandelin keberuntungan atau pemberian, Bro! Tapi, juga berani buat nyiptain peluang buat mantap maju ke depan.</p>',
    fakta: '<p>Gak ada yang salah dari nerima bantuan. Tapi, Darah Biru pantang ngarepin pemberian selama masih percaya sama kemampuan. Ini yang bikin Darah Biru lebih kuat saat di atas dibanding yang lain. </p>',
    question: 'selesai'
  }
];

document.getElementById('gamearea').addEventListener("click", function(){
  gameinfo.classList.add("hide");
});

function initBar(gameIndex, index){
  gameProgressBar.forEach(function (el, index) {
    if(gameIndex == index){
      el.classList.add("current");
    }
    if(gameIndex > index){
      el.classList.add("gone");
    }
  });
}

function initModal(gameIndex){
  if(gameIndex == 5){
    modalFaktaButton.innerHTML = "Selesai";
    modalMitosButton.innerHTML = "Selesai";
  }
  gameData.forEach(function (el, index){
    if(gameIndex == index){
      if(el.true == 'fakta'){
        modalFaktaAnswer.innerHTML = '<img src="assets/images/popup-true.png">';
        modalMitosAnswer.innerHTML = '<img src="assets/images/popup-false.png">';
      }else{
        modalFaktaAnswer.innerHTML = '<img src="assets/images/popup-false.png">';
        modalMitosAnswer.innerHTML = '<img src="assets/images/popup-true.png">';
      }

      modalFaktaContent.innerHTML = el.fakta;
      modalMitosContent.innerHTML = el.mitos;

      dataLayer.push({
        'event': 'tahanBantingGames',
        'event_category': 'Tahan Banting Games',
        'event_action': ''+el.question+''
      });
    }
  });
}
function showModal(item){
  backdrop.classList.remove("hide");
  if(item == 'fakta'){
    modalFakta.classList.remove("hide");
  }else{
    modalMitos.classList.remove("hide");
  }
}
function closeModal(gameIndex){
  if(gameIndex == 5){

    // SENT DATA RESULT AJAX
    var apiurl = "https://magnum.antigravity.dev/api/result/game";
    $.ajax({
      url: apiurl,
      data: {
        "PersonId" : "4234534",
        "Result" : score
      },
      type:"POST",
      dataType:"json",
      beforeSend: function() {
        modalFaktaButton.innerHTML = "Loading...";
        modalMitosButton.innerHTML = "Loading...";
      },
      error:function(err){
          console.error(err);
          console.log("error");
      },
      success:function(data){
          // console.log(data);
          location.href="statement.html";
      },
      complete:function(){
          console.log("Request finished.");
      }
    });

  }else{
    backdrop.classList.add("hide");
    modalMitos.classList.add("hide");
    modalFakta.classList.add("hide");
  }
}

function checkAnswer(swipeDirection, gameIndex){
  // console.log(swipeDirection);

  gameData.forEach(function (el, index){
    if(gameIndex == index){

      if(swipeDirection > 0 && el.true == 'fakta'){
        score += 1;
        // console.log(true);
      }else if(swipeDirection < 0 && el.true == 'mitos'){
        score += 1;
        // console.log(true);
      }else{
        // console.log(false)
      }

      // console.log(score);
      var resultStatement = 1;
      if(score <= 2){
        resultStatement = 1;
      }else if(score > 2 && score <= 4){
        resultStatement = 2;
      }else if(score > 4 && score == 5){
        resultStatement = 3;
      }
      localStorage.setItem("result", resultStatement);
    }
  });
}

function initCards(card, index) {
  var newCards = document.querySelectorAll('.game-area__swipe-card:not(.removed)');
  var rotate = 0;

  newCards.forEach(function (card, index) {

    if(index == 1){
      rotate = 5;
    }else if(index == 2){
      rotate = 10;
    }else if(index == 3){
      rotate = -5;
    }else if(index == 4){
      rotate = -10;
    }

    card.style.zIndex = gameAreaSwipeCard.length - index;
    // card.style.transform = 'scale(' + (20 - index) / 20 + ') translateY(-' + 30 * index + 'px)';
    card.style.transform = 'rotate(' + rotate + 'deg)';

    if(index != 0){
      card.style.opacity = (10 - index) / 30;
      card.style.border = "2px solid transparent";
    }else{
      card.style.opacity = 1;
      card.style.border = "2px solid #fff";
    }
  });
  
  gameAreaSwipe.classList.add('loaded');
}

initCards();
initBar(gameIndex);

gameAreaSwipeCard.forEach(function (el) {
  var hammertime = new Hammer(el);

  hammertime.on('pan', function (event) {
    el.classList.add('moving');
  });

  hammertime.on('pan', function (event) {
    if (event.deltaX === 0) return;
    if (event.center.x === 0 && event.center.y === 0) return;

    gameChoice.classList.toggle('game-choice--fakta', event.deltaX > 0);
    gameChoice.classList.toggle('game-choice--mitos', event.deltaX < 0);

    var xMulti = event.deltaX * 0.03;
    var yMulti = event.deltaY / 80;
    var rotate = xMulti * yMulti;

    event.target.style.transform = 'translate(' + event.deltaX + 'px, ' + event.deltaY + 'px) rotate(' + rotate + 'deg)';
  });

  hammertime.on('panend', function (event) {
    el.classList.remove('moving');

    var moveOutWidth = document.body.clientWidth;
    var keep = Math.abs(event.deltaX) < 80 || Math.abs(event.velocityX) < 0.5;

    event.target.classList.toggle('removed', !keep);

    gameChoice.classList.remove('game-choice--fakta', event.deltaX > 0);
    gameChoice.classList.remove('game-choice--mitos', event.deltaX < 0);

    if (keep) {
      event.target.style.transform = '';
    } else {
      var endX = Math.max(Math.abs(event.velocityX) * moveOutWidth, moveOutWidth);
      var toX = event.deltaX > 0 ? endX : -endX;
      var endY = Math.abs(event.velocityY) * moveOutWidth;
      var toY = event.deltaY > 0 ? endY : -endY;
      var xMulti = event.deltaX * 0.03;
      var yMulti = event.deltaY / 80;
      var rotate = xMulti * yMulti;

      event.target.style.transform = 'translate(' + toX + 'px, ' + (toY + event.deltaY) + 'px) rotate(' + rotate + 'deg)';

      gameIndex += 1;

      checkAnswer(event.deltaX, gameIndex);
      if(event.deltaX > 0){
        setTimeout(function(){
          showModal('fakta');
        }, 350);
      }else{
        setTimeout(function(){
          showModal('mitos');
        }, 350);
      }

      initCards();
      initBar(gameIndex);
      initModal(gameIndex);
    }
  });
});

function createButtonListener(fakta) {
  return function (event) {
    var cards = document.querySelectorAll('.game-area__swipe-card:not(.removed)');
    var moveOutWidth = document.body.clientWidth * 1.5;
    var moveDelta = 0;

    if (!cards.length) return false;

    var card = cards[0];

    card.classList.add('removed');

    if (fakta) {
      card.style.transform = 'translate(' + moveOutWidth + 'px, -100px) rotate(-30deg)';
      moveDelta = moveOutWidth;
      setTimeout(function(){
        showModal('fakta')
      }, 350);
    } else {
      card.style.transform = 'translate(-' + moveOutWidth + 'px, -100px) rotate(30deg)';
      moveDelta = -moveOutWidth;
      setTimeout(function(){
        showModal('mitos')
      }, 350);
    }

    gameIndex += 1;
    checkAnswer(moveDelta, gameIndex);
    initCards();
    initBar(gameIndex);
    initModal(gameIndex);

    event.preventDefault();
  };
}

var mitosListener = createButtonListener(false);
var faktaListener = createButtonListener(true);

mitos.addEventListener('click', mitosListener);
fakta.addEventListener('click', faktaListener);