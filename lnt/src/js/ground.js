var myBlock = document.getElementById('dragGround');

var mc = new Hammer(myBlock);
mc.add( new Hammer.Pan({ direction: Hammer.DIRECTION_ALL, threshold: 0 }) );
mc.on("pan", handleDrag);

// poor choice here, but to keep it simple
// setting up a few vars to keep track of things.
// at issue is these values need to be encapsulated
// in some scope other than global.
var maxYTop = 0;
var maxYBottom = -922;
var maxXLeft = 0;
var maxXRight = -1390;
var lastPosX = 0;
var lastPosY = 0;
var isDragging = false;
function handleDrag(ev) {

    // for convience, let's get a reference to our object
    var elem = myBlock;

    // console.log(ev)
    // console.log(elem)
    
    // DRAG STARTED
    // here, let's snag the current position
    // and keep track of the fact that we're dragging
    if ( ! isDragging ) {
        isDragging = true;
        lastPosX = elem.offsetLeft;
        lastPosY = elem.offsetTop;
    }

    // move Y position
    var posY = 0;
    var keepYTop = (ev.deltaY + lastPosY) > maxYTop;
    var keepYBottom = (ev.deltaY + lastPosY) < maxYBottom;
    if(keepYTop){
        posY = maxYTop;
    // }else if(keepYBottom){
    //     posY = maxYBottom;
    }else{
        posY = ev.deltaY + lastPosY;
    }
    elem.style.top = posY + "px";

    // move X position
    var posX = 0;
    var keepXLeft = (ev.deltaX + lastPosX) > maxXLeft;
    var keepXRight = (ev.deltaX + lastPosX) < maxXRight;
    if(keepXLeft){
        posX = maxXLeft;
    // }else if(keepXRight){
    //     posX = maxXRight;
    }else{
        posX = ev.deltaX + lastPosX;
    }
    elem.style.left = posX + "px";
    
    // DRAG ENDED
    // this is where we simply forget we are dragging
    if (ev.isFinal) {
        isDragging = false;
    }
}