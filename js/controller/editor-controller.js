'use strict'
var isDraggable = false;
function updateCanvas() {
    const width = gImage.width;
    const height = gImage.height;
    gElCanvas.width = width;
    gElCanvas.height = height;
    gCtx.drawImage(gImage, 0,0); 
    gMeme.lines.forEach(line => {
        drawText(line.txt, width/2, line.location.y, `${line.size}px ${line.fontFamily}`, line.color, line.align);
        if(line.id === gMeme.selectedLineIdx) {
            var lineHeight = gCtx.measureText(line).actualBoundingBoxAscent;
            var lineWidth = gCtx.measureText(line.txt).width;
            setRect(width/2-lineWidth,line.location.y-lineHeight-5, lineWidth*2, lineHeight+10);
            // _MouseEvents(line,width/2-lineWidth,lineWidth*2, line.location.y-lineHeight-5, lineHeight+10)
        }
    })
}
function _MouseEvents(line,currentX,endX, currentY, endY) {
    gElCanvas.onmousedown = function(e) {
      var mouseX = e.layerX;
      var mouseY = e.layerY;

      //start from here
      console.log('mouseX', mouseX);
      console.log('endX', endX);
      if (mouseX >= currentX &&  endX >= mouseX) {
              console.log('is on');
        isDraggable = true;
        //currentX = mouseX;
        //currentY = mouseY;
      }
    //   if (mouseX >= currentX &&
    //       mouseX <= endX &&
    //       mouseY >= currentY &&
    //       mouseY <= endY) {
    //           console.log('is on');
    //     isDraggable = true;
    //     //currentX = mouseX;
    //     //currentY = mouseY;
    //   }
    };
    gElCanvas.onmousemove = function(e) {
  
      if (isDraggable) {
        currentX = e.layerX;
        currentY = e.layerY;
        drawText(line.txt, currentX, currentY, `${line.size}px ${line.fontFamily}`, line.color, line.align)
      }
    };
    gElCanvas.onmouseup = function(e) {
      isDraggable = false;
    };
    // gElCanvas.onmouseout = function(e) {
    //   isDraggable = false;
    // };
  }

// function loadImage(img) {
//     var url = URL.createObjectURL(img);
//     const image = new Image(500, 500);
//       image.src = url;
//       image.onload = () => {
//         gCtx.imageSmoothingQuality = 'high';
//         gImage = image;
//         updateCanvas()
//       };
// }

function onSaveMeme() {
    gMemes.push(gMeme);
    var imageUrl = gElCanvas.toDataURL('image/jpeg');
    setMemesImgs(gMeme, imageUrl);
    createMeme();
    openGallery();
    renderMemes();
}

function downloadMeme(elLink) {
    var imgContent = gElCanvas.toDataURL('image/jpeg')
    elLink.href = imgContent
}

function setRect(x,y,xEnd, yEnd) {
    gCtx.strokeStyle = 'black'
    gCtx.beginPath()
    gCtx.rect(x,y,xEnd, yEnd);
    gCtx.stroke()
}

function onDeleteLine() {
    deleteLine()
    onSwitchLines()
    updateCanvas()
}

function onAddLine() {
    addLine();
    onSwitchLines()
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
    updateCanvas()
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
    document.querySelector('.memes').hidden = true;
}