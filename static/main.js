var buy = "https://thes-ftf-cus.bandcamp.com/album/lousy-w-love"
var email = "mailto:s.ftf.cus@gmail.com"
var twitter = "https://twitter.com/TheS_ftF_cus"
var insta = "https://www.instagram.com/thes_ftf_cus/"
var facebook = "https://www.facebook.com/thes.ftf.cus/"
var h = document.getElementById("day")
var q = document.getElementById("empty")

// q.innerHTML += "<a href ="+string[printCount]+" style=\"color: silver\" target=\"_blank\">buy</a>" 

h.innerHTML += " f-cus";

// ----------------------------------------------
// TEXT COLOR CHANGER

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
  
// setInterval(changeColor, 200)

// ----------------------------------------------
// iterate over text so it appears one at time

var string = [buy, email,twitter,insta,facebook]

var printCount = 0
var aNum = ((Math.random()*100) + 50).toFixed();


function addText() {
    if (printCount <= string.length) {
    // for (let i=0; i < string.length; i++) {
        if (string[printCount] == buy) {
            q.innerHTML += "<a href ="+string[printCount]+" style=\"color: silver\" target=\"_blank\">buy vinyl/digi</a>" 
            q.innerHTML += "<br>"
        } else if (string[printCount] == email) {
            q.innerHTML += "<a href ="+string[printCount]+" style=\"color: silver\" target=\"_blank\">email</a>" 
            q.innerHTML += "<br>"
        } else if (string[printCount] == twitter) {
            q.innerHTML += "<a href ="+string[printCount]+" style=\"color: silver\" target=\"_blank\">twitter</a>" 
            q.innerHTML += "<br>"
        } else if (string[printCount] == insta) {
            q.innerHTML += "<a href ="+string[printCount]+" style=\"color: silver\" target=\"_blank\">insta</a>" 
            q.innerHTML += "<br>"
        } else if (string[printCount] == facebook) {
            q.innerHTML += "<a href ="+string[printCount]+" style=\"color: silver\" target=\"_blank\">facebook</a>"
        }
        // q.innerHTML += "<br>"
        printCount += 1
    }
    }


setInterval(addText, 450)


