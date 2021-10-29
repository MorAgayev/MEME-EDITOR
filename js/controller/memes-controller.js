'use strict'
var gMemesImgs=[];
var gMemeId=0;

function onSelectMeme(id) {
    var meme = gMemesImgs.find(img => img.id ===id);
    gMeme = meme.meme;
    document.querySelector('.memes').hidden = true;
    document.querySelector('.canvas').hidden = false;
}

function showMemesPage() {
    document.querySelector('.memes').hidden = false;
    document.querySelector('.canvas').hidden = true;
    document.querySelector('.gallery').hidden = true;
}

function renderMemes() {
    var strHtml = gMemesImgs.map(meme => {
        console.log('meme', meme);
        return `<div class="memes-item" style="background-image: url(${meme.imageUrl});" onclick="onSelectMeme(${meme.id})"></div>`

    })
    document.querySelector('.memes-container').innerHTML = strHtml.join('')
}

function setMemesImgs(meme ,imageUrl) {
    var memeobject = {id:gMemeId,meme, imageUrl} 
    gMemesImgs.push(memeobject);
    gMemeId++
    saveToStorage('gMemesImgs', memeobject);
}