var buy = "https://thes-ftf-cus.bandcamp.com/album/lousy-w-love"
var stream = "https://ditto.fm/yr-name-on-rice"
var email = "mailto:s.ftf.cus@gmail.com"
var twitter = "https://twitter.com/TheS_ftF_cus"
var insta = "https://www.instagram.com/thes_ftf_cus/"
var facebook = "https://www.facebook.com/thes.ftf.cus/"
var youtube = "https://www.youtube.com/channel/UCya0_2t5aSa95dki35hLQKQ"

https://www.youtube.com/channel/UCya0_2t5aSa95dki35hLQKQ"
var h = document.getElementById("date")
var q = document.getElementById("bar")
var r = document.getElementById("line2")


// h.innerHTML += "the s-ft \<br>";
// r.innerHTML += "f - c u s";


var string = [buy,stream,email,twitter,insta,youtube,facebook]

var printCount = 0
var aNum = ((Math.random()*100) + 50).toFixed();





function addText() {
    if (printCount <= string.length) {
        if (string[printCount] == buy) {
            q.innerHTML += "<a href ="+string[printCount]+" target=\"_blank\">buy vinyl+digi</a>" 
            q.innerHTML += "<br>"
        } else if (string[printCount] == email) {
            q.innerHTML += "<a href ="+string[printCount]+" target=\"_blank\">email</a>" 
            q.innerHTML += "<br>"
        } else if (string[printCount] == stream) {
            q.innerHTML += "<a href ="+string[printCount]+" target=\"_blank\">stream</a>" 
            q.innerHTML += "<br>"
        } else if (string[printCount] == twitter) {
            q.innerHTML += "<a href ="+string[printCount]+" target=\"_blank\">twitter</a>" 
            q.innerHTML += "<br>"
        } else if (string[printCount] == insta) {
            q.innerHTML += "<a href ="+string[printCount]+" target=\"_blank\">insta</a>" 
            q.innerHTML += "<br>"
        } else if (string[printCount] == youtube) {
            q.innerHTML += "<a href ="+string[printCount]+" target=\"_blank\">youtube</a>" 
            q.innerHTML += "<br>"
        } else if (string[printCount] == facebook) {
            q.innerHTML += "<a href ="+string[printCount]+" target=\"_blank\">facebook</a>"
        }
        // q.innerHTML += "<br>"
        printCount += 1
    }
    }


setInterval(addText, 450)


