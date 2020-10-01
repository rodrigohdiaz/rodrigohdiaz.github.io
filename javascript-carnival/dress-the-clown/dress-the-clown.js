  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Dress The Clown!")


// var headIndex = 2
// var headSrc = getElementById('head');
//    headVariable.src = "./images/head3.png"
//    var headSrc = "./images/head" + headIndex + ".png";

// function changeClownHead(){


// }



document.onkeydown = checkKey;



function checkKey(e){


  if (e.keyCode == '38') {
    changeVertical(-1)
  } else if (e.keyCode == '40') {
    changeVertical(1)
  } else if (e.keyCode == '37') {
    changeHorizontal(-1)
  } else if (e.keyCode == '39') {
    changeHorizontal(1)
  }
}

//write this instead of the 'part'Index
var indexes = [0,0,0]
var mainIndex = 0
// var headIndex = 0
// var bodyIndex = 0
// var shoesIndex = 0

var head = document.getElementById("head")
var body = document.getElementById("body")
var shoes = document.getElementById("shoes")

var imgs = [head, body, shoes]
var strings = ["head", "body", "shoes"]


function changeHorizontal(swap){

  var index = indexes[mainIndex]
  var image = imgs[mainIndex]
  var str = strings[mainIndex]

//   if (mainIndex == 0) {
//       headIndex += swap
//     if  (headIndex < 0)
//         headIndex = 5      
//     if (headIndex > 5)
//         headIndex = 0
//   head.src = './images/head' + headIndex + '.png'
// }  if (mainIndex == 1){
//     bodyIndex += swap
//     if  (bodyIndex < 0)
//       bodyIndex = 5
//       if (bodyIndex > 5)
//           bodyIndex = 0
//   body.src = './images/body' + bodyIndex + '.png'
// }  if (mainIndex == 2) {
//     shoesIndex += swap
//     if  (shoesIndex < 0)
//       shoesIndex = 5
//       if (shoesIndex > 5)
//           shoesIndex = 0
//   shoes.src = './images/shoes' + shoesIndex + '.png'
// }

// this is instead of each ''Index conditional above
      index += swap

      if (index < 0)
      index = 5

      if (index > 5)
      index = 0

      indexes[mainIndex] = index

      image.src = './images/' + str + index + '.png'
}

function changeVertical(swap){
  mainIndex += swap

  if  (mainIndex < 0)
      mainIndex = 2

      if (mainIndex > 2)
          mainIndex = 0

}