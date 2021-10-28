'use strict'

function updateCanvas() {
    const width = gImage.width;
    const height = gImage.height;

    gElCanvas.width = width;
    gElCanvas.height = height;
    gCtx.drawImage(gImage, 0,0); 
    editTxtStyle()

    var lineIdx = gMeme.selectedLineIdx;
    var currLine = gMeme.lines[lineIdx];
    if(lineIdx === 0) {
        gCtx.textBaseline = 'top';
        drawText(gTopTxt, width/2, currLine.location.y, `${currLine.size}px impact`, currLine.color);
        gCtx.textBaseline = 'bottom';
        drawText(gBottomTxt, width/2, height - gMeme.lines[lineIdx+1].location.y, `${gMeme.lines[lineIdx+1].size}px impact`, gMeme.lines[lineIdx+1].color);
    } else {
        gCtx.textBaseline = 'top';
        drawText(gTopTxt, width/2, gMeme.lines[lineIdx-1].location.y, `${gMeme.lines[lineIdx-1].size}px impact`, gMeme.lines[lineIdx-1].color);
        gCtx.textBaseline = 'bottom';
        drawText(gBottomTxt, width/2, height - currLine.location.y, `${currLine.size}px impact`, currLine.color);
    }
}

function onChangeTxtColor(color) {
    setTxtColor(color)
    updateCanvas()
}

function onChangeLocation(value) {
    setLocationY(value);
    updateCanvas()
}

// function onChangeLocation(diraction) {
//     setLocationY(diraction);
//     updateCanvas()
// }

function onSwitchLines() {
    setSelectedLine();
    document.querySelector('.txt-input').value = gMeme.lines[gMeme.selectedLineIdx].txt;
}

function onChangeFontSize(choice) {
    setFontSize(choice);
    updateCanvas();
}

function onChangeTxt(txt) { 
    if(gMeme.selectedLineIdx===0) {
        gTopTxt= setTxt(txt, 0)
    } else {
        gBottomTxt= setTxt(txt, 1)
    }
    updateCanvas()
}

function drawText(text,x,y, fontSize, color) {
    gCtx.font = fontSize;
    gCtx.fillStyle = color;
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}

function editTxtStyle() {
    var currLine = gMeme.lines[gMeme.selectedLineIdx];
    gCtx.lineWidth = 2;
    gCtx.strokeStyle = currLine.borderColor;
    gCtx.textAlign = currLine.align;
    gCtx.lineJoin = 'round';
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