var noOfdrums = document.querySelectorAll(".set .drum").length;

for (var i = 0; i < noOfdrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", onclicking);

}

function onclicking() {

    var b = this.innerHTML;
    makesounds(b);
}

function makesounds(key) {
  
    switch (key) {
        case "W":
            var s1 = new Audio("sounds/tom-1.mp3");
            s1.play();
            break;

        case "J":
            var s2 = new Audio('Sounds/tom-2.mp3');
            s2.play();
            break;

        case "K":
            var s3 = new Audio("sounds/tom-3.mp3");
            s3.play();
            break;

        case "L":
            var s4 = new Audio("sounds/tom-4.mp3");
            s4.play();
            break;

        case "M":
            var s5 = new Audio("sounds/kick-bass.mp3");
            s5.play();
            break;

        case "N":
            var s6 = new Audio("sounds/crash.mp3");
            s6.play();
            break;


        default: alert(key);
            break;
    }

}

