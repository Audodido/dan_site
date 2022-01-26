var buy = "https://thes-ftf-cus.bandcamp.com/album/lousy-w-love"

var h = document.getElementById("day")
var q = document.getElementById("empty")

h.innerHTML += " s-ft f-cus";

// ----------------------------------------------

// var colors = ["silver", "gray", "silver", "grey", "silver"]
// var colors = ["#8fce00", "#9ad219", "#a5d732", "#b0dc4c", "#bbe166", "#c7e67f"]
// var currentColor = 0
// var lis = document.querySelectorAll("h1")

// function changeColor() {
//     --currentColor
//     if (currentColor < 0) currentColor = colors.length -1
//     for (var i = 0; i < lis.length; i++) {
//       lis[i].style.color = colors[(currentColor +i) % colors.length]
//     }
//   }
  
// setInterval(changeColor, 5000)

// ----------------------------------------------
// iterate over text so it appears one at time

// var string = ["s", "f", "t", " ", "f", "c", "s", " link: "]
var string = [buy, "222", "4444"]

var currentLetter = 0
var printCount = 0
var aNum = ((Math.random()*100) + 50).toFixed();



function addText() {
    // if (currentLetter < 0) currentLetter = string.length -1
    if (printCount < 7) {
    for (let i=0; i < string.length; i++) {
      q.innerHTML += string[i] 
    //   q.innerHTML += aNum
    }
    q.innerHTML += printCount + 1
    q.innerHTML += "<br>"
    printCount += 1
    }
}


setInterval(addText, 450)


