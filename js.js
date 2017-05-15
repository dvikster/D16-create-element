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