// document.getElementById('art_wrapp').addEventListener('mouseover', f1);
// document.getElementById('art_wrapp').addEventListener('mouseout', f2);

// var socIcon = document.createElement('div');
// socIcon.className = 'social';
// socIcon.innerHTML = 'Soc icons';


// function f1(event){
//     // console.log(event.srcElement);
//     //console.log(event);
//     //this.style.background = 'red';
//     if (event.srcElement.className == 'art' ) {
//         var elem = event.srcElement;
//         elem.appendChild(socIcon);
//         console.log(socIcon);
//     }
//     if (event.srcElement.parentElement.className == 'art') {
//         var elem = event.srcElement.parentElement;
//         elem.appendChild(socIcon);
//         console.log(socIcon);
//     }
// }

// function f2(){
//     console.log('1'+event.srcElement.className);
//     if (event.srcElement || event.srcElement.className == 'art' || event.srcElement.className == 'social') {
//         event.srcElement.removeChild(socIcon);
//     }
//
// }


var socIcon = document.createElement('div');
socIcon.className = 'social';
socIcon.innerHTML = 'Soc icons';

var up = document.querySelectorAll('.art');

for ( var i=0; i<up.length; i++) {
    up[i].onmouseover = f1;
  }

function f1(){
      this.appendChild(socIcon);
      this.onmouseleave = function(){
          this.removeChild(socIcon);
      }
}

// // or another way - don't work till
//
// var up = document.querySelectorAll('.art');
//
// for ( var i=0; i<up.length; i++) {
//     up[i].onmouseover = f1;
// }
//
// function f1(){
//     if (this.className == 'art'){
//         var socIcon = document.createElement('div');
//         socIcon.className = 'social';
//         socIcon.innerHTML = 'Soc icons';
//         this.appendChild(socIcon);
//         this.onmouseleave = function(){
//             this.removeChild(socIcon);
//         }
//     }
// }


var mas = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
console.log(mas);
function compareRandom(a,b) {
    return Math.random()-0.5;
}
mas.sort(compareRandom)
console.log(mas);

for (var a=0; a< mas.length; a++){
    createSubBlock(mas[a]);
}

function createSubBlock(b){
    var masDiv = document.createElement('div');
    masDiv.className = 'numberBlock';
    masDiv.innerHTML = b;
    document.getElementById('divWrap').appendChild(masDiv);
}


var someBlock = document.querySelectorAll('.numberBlock');

for (var i=0; i< someBlock.length; i++){
    someBlock[i].onclick = clickBlock;
}

var first_block;
var first;
var second_block;
var second;
var key=1;
function clickBlock(){

    if(key==1){
        first_block = this;
        first = this.innerHTML;
        console.log(first);
    }
    else{
        second_block = this;
        second = this.innerHTML;
        key=0;
        if(first==second && first_block!=second_block){
            first_block.style.background = 'red';
            second_block.style.background = 'red';
            // document.querySelector('#divWrap').removeChild(second_block);
            // document.querySelector('#divWrap').removeChild(first_block);
        }
    }
    key++;

}


// divWrap.addEventListener('click', clickBlock)
//
//
// var counter = 0;
// var xy=[];
// var first;
//
// function clickBlock(event){
//     // console.log(event);
//     if (counter == 2){
//
//     }
//     else {
//         first = event.srcElement.innerHTML;
//         console.log(first)
//     }
// }
