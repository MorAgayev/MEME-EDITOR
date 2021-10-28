'use strict'
function updateCanvas() {
    const width = gImage.width;
    const height = gImage.height;
    gElCanvas.width = width;
    gElCanvas.height = height;
    gCtx.drawImage(gImage, 0,0); 
    editTxtStyle()

    gMeme.lines.forEach(line => {
        drawText(line.txt, width/2, line.location.y, `${line.size}px ${line.fontFamily}`, line.color, line.align);
    })
}

function onDeleteLine() { //////////
    onDeleteLine()
    updateCanvas()
}

function onAddLine() {
    addLine();
    updateCanvas();
}

function onChangeAlign(choise) {
    setAlign(choise);
    updateCanvas();
}

function onChangeFont(fontType) {
    setFontFamily(fontType);
    updateCanvas();
}

function onChangeTxtColor(color) {
    setTxtColor(color)
    updateCanvas()
}

function onChangeLocation(value) {
    setLocationY(value);
    updateCanvas()
}

function onSwitchLines() {
    setSelectedLine();
    document.querySelector('.txt-input').value = gMeme.lines[gMeme.selectedLineIdx].txt;
}

function onChangeFontSize(choice) {
    setFontSize(choice);
    updateCanvas();
}

function onChangeTxt(txt) { 
    setTxt(txt)
    updateCanvas()
}

function drawText(text,x,y, fontSize, color, align) {
    gCtx.font = fontSize;
    gCtx.fillStyle = color;
    gCtx.textAlign = align;
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}

function editTxtStyle() {
    var currLine = gMeme.lines[gMeme.selectedLineIdx];
    gCtx.lineWidth = 2;
    gCtx.strokeStyle = currLine.borderColor;
    gCtx.lineJoin = 'round';
    gCtx.imageSmoothingQuality= 'high'
}

function drawImg(src) {
    console.log('src',src);
    var img = new Image();
    img.src = src;
    img.onload = () => {
      gCtx.imageSmoothingQuality = 'high';
      gImage = img;
      updateCanvas()
    };
}

function onSelectImg(id) {
    setImgMeme(id);
    drawImg(getImg(id));
    var elCanvasPage = document.querySelector('.canvas');
    elCanvasPage.hidden = false;
    var elGallery = document.querySelector('.gallery');
    elGallery.hidden = true;
}