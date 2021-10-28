'use strict'

function renderGallery() {
    var strhtml = gImgs.map(img => {
        return `<div class="gallery-item" style="background-image: url(images/${img.id}.jpg);" onclick="onSelectImg(${img.id})"></div>`
    });
    document.querySelector('.gallery-container').innerHTML = strhtml.join('');
}