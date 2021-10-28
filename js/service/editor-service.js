'use strict'
var gElCanvas;
var gCtx;
var  gTopTxt = '';
var gBottomTxt ='';
var gMeme = {
    selectedLineIdx:0,
    selectedImgId:1,
    lines: [
        {
            txt:'',
            size:40,
            location:{x:20, y:50},
            align:'center',
            color: 'white',
            borderColor:'black'
        },
        {
            txt:'',
            location:{x:20, y:50},
            size:40,
            align:'center',
            color: 'white',
            borderColor:'black'
        }
    ]
}

function setTxtColor(color) {
    var line = gMeme.lines[gMeme.selectedLineIdx];
    line.color = color
}

function setLocationY(value) {
    var line = gMeme.selectedLineIdx;
    var location = gMeme.lines[line].location;
    location.y = value;
}

// function setLocationY(diraction) {
//     var line = gMeme.selectedLineIdx;
//     var location = gMeme.lines[line].location;
//     if(diraction == 'up') return location.y--;
//     if(diraction == 'down') return location.y++;
// }

function  setSelectedLine() {
    // gMeme.lines.length
    if(gMeme.selectedLineIdx < gMeme.lines.length-1) {
        gMeme.selectedLineIdx++;
        
    } else {
        gMeme.selectedLineIdx = 0;
    }
    console.log('gMeme.selectedLineIdx',gMeme.selectedLineIdx);
}

function setFontSize(choice) {
    var line = gMeme.selectedLineIdx;
    if(choice == 'increase') return gMeme.lines[line].size++;
    if(choice == 'decrease') return gMeme.lines[line].size--;
}

function setTxt(txt, lineNum) {
    gMeme.lines[lineNum].txt =txt;
    return gMeme.lines[lineNum].txt;
}

function getImg(id) {
    var img = gImgs.find(img => img.id === id);
    return img.url
}

function setImgMeme(id) {
    gMeme.selectedImgId = id;
}