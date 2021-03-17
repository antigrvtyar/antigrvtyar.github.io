// FUNCTION
var dragStage1 = document.getElementById('dragStage1');
var dragStage1MC = new Hammer(dragStage1);
dragStage1MC.add( new Hammer.Pan({ direction: Hammer.DIRECTION_ALL, threshold: 0 }) );
dragStage1MC.on("pan", handleDrag);

// var global
var maxYTop = 0;
var maxYBottom = -900;
var maxXLeft = 0;
var maxXRight = -1490;
var lastPosX = 0;
var lastPosY = 0;
var isDragging = false;
function handleDrag(ev) {
    var elem = dragStage1;
    
    // DRAG STARTED
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
    }else if(keepYBottom){
        posY = maxYBottom;
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
    }else if(keepXRight){
        posX = maxXRight;
    }else{
        posX = ev.deltaX + lastPosX;
    }
    elem.style.left = posX + "px";
    
    // DRAG ENDED
    if (ev.isFinal) {
        isDragging = false;
    }
}

// DRAG SAMPAH
let sourceContainerId = "";

// Allow multiple draggable items
let dragSources = document.querySelectorAll('[draggable="true"]');
dragSources.forEach(dragSource => {
    dragSource.addEventListener("dragstart", dragStart);
    dragSource.addEventListener("dragend", dragEnd);
});

function dragStart(e) {
    this.classList.add("dragging");
    e.dataTransfer.setData("text/plain", e.target.id);
    sourceContainerId = this.parentElement.id;
}

function dragEnd(e) {
    this.classList.remove("dragging");
}

let dropTargets = document.querySelectorAll(
    '[data-role="drag-drop-container"]'
);
dropTargets.forEach(dropTarget => {
    dropTarget.addEventListener("drop", dropped);
    dropTarget.addEventListener("dragenter", cancelDefault);
    dropTarget.addEventListener("dragover", dragOver);
    dropTarget.addEventListener("dragleave", dragLeave);
});

function dropped(e) {
    if (this.id !== sourceContainerId) {
        cancelDefault(e);
        let id = e.dataTransfer.getData("text/plain");
        e.target.appendChild(document.querySelector("#" + id));
        this.classList.remove("hover");
    }
}

function dragOver(e) {
    cancelDefault(e);
    this.classList.add("hover");
}

function dragLeave(e) {
    this.classList.remove("hover");
}

function cancelDefault(e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
}
