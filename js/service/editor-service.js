'use strict'
var gElCanvas;
var gCtx;
// var gTopTxt = '';
// var gBottomTxt ='';
var height = ''
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
            borderColor:'black',
            fontFamily:'IMPACT',
            baseLine:'top'
        },
        {
            txt:'',
            location:{x:20, y: (500 - 50)},
            size:40,
            align:'center',
            color: 'white',
            borderColor:'black',
            fontFamily:'IMPACT',
            baseLine:'bottom'
        }
    ]
}

function onDeleteLine() {
    var lineIdx = gMeme.selectedLineIdx;
    console.log(lineIdx,'lineIdx');
    gMeme.lines.splice(lineIdx,1);
}

function setAlign(choise) {
    gMeme.lines[gMeme.selectedLineIdx].align = choise;
}

function addLine() {
    var newLine = {
            txt:'new line',
            size:40,
            location:{x:20, y:200},
            align:'center',
            color: 'white',
            borderColor:'black',
            fontFamily:'IMPACT',
            baseLine:'middle'
        }
    gMeme.lines.push(newLine);
    gMeme.selectedLineIdx++
}

function setFontFamily(fontType) {
    gMeme.lines[gMeme.selectedLineIdx].fontFamily = fontType;
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

function  setSelectedLine() {
    if(gMeme.selectedLineIdx < gMeme.lines.length-1) {
        gMeme.selectedLineIdx++;
        
    } else {
        gMeme.selectedLineIdx = 0;
    }
}

function setFontSize(choice) {
    var line = gMeme.selectedLineIdx;
    if(choice == 'increase') return gMeme.lines[line].size++;
    if(choice == 'decrease') return gMeme.lines[line].size--;
}

function setTxt(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt =txt;
}

function getImg(id) {
    var img = gImgs.find(img => img.id === id);
    return img.url
}

function setImgMeme(id) {
    gMeme.selectedImgId = id;
}