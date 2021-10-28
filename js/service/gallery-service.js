'use strict'

var gImgs= createImgs();
var gImage;

function createImgs() {
    return [
       createImg(1, ['HAPPY,LAUGH']),
       createImg(2, ['HAPPY,LAUGH']),
       createImg(3, ['HAPPY,LAUGH']),
       createImg(4, ['HAPPY,LAUGH']),
       createImg(5, ['HAPPY,LAUGH']),
       createImg(6, ['HAPPY,LAUGH']),
       createImg(7, ['HAPPY,LAUGH']),
       createImg(8, ['HAPPY,LAUGH']),
       createImg(9, ['HAPPY,LAUGH']),
       createImg(10, ['HAPPY,LAUGH']),
       createImg(11, ['HAPPY,LAUGH']),
       createImg(12, ['HAPPY,LAUGH']),
       createImg(13, ['HAPPY,LAUGH']),
       createImg(14, ['HAPPY,LAUGH']),
       createImg(15, ['HAPPY,LAUGH']),
       createImg(16, ['HAPPY,LAUGH']),
       createImg(17, ['HAPPY,LAUGH']),
       createImg(18, ['HAPPY,LAUGH']),
   ]
};

function createImg(id, keyword) {
    return  {id,url:`images/${id}.jpg`, keyword}
}