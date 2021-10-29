'use strict'
var gMemesImgs=[];

function onSelectMeme(meme) {
    console.log(meme);
    // onSelectImg(meme.id)
}

function showMemesPage() {
    document.querySelector('.memes').hidden = false;
    document.querySelector('.canvas').hidden = true;
    document.querySelector('.gallery').hidden = true;
}

function renderMemes() {
    var strHtml = gMemesImgs.map(meme => {
        return `<div class="memes-item" style="background-image: url(${meme.imageUrl});" onclick="onSelectMeme(${meme.meme})"></div>`

    })
    document.querySelector('.memes-container').innerHTML = strHtml.join('')
}

function setMemesImgs(meme ,imageUrl) {
    var memeobject = {meme, imageUrl} 
    gMemesImgs.push(memeobject);
}