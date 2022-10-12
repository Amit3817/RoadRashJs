var bike = document.getElementById('bike')
var bikespeed = 0
var bike1speed = 100
var bike2speed = 90
var bike3speed = 85
var bike4speed = 65
var bikeright = parseInt(window.getComputedStyle(bike).getPropertyValue("right"))
var screen = document.getElementById('screen')
var bike1 = document.getElementById('bike-1')
var bike2 = document.getElementById('bike-2')
var isClose = false
var a = 0
// var bike1y = parseInt(window.getComputedStyle(bike1).getPropertyValue("right"))
// var bike2y = parseInt(window.getComputedStyle(bike2).getPropertyValue("right"))
// var bikey = parseInt(window.getComputedStyle(bike).getPropertyValue("right"))


var checkcollision = setInterval(() => {
    var bikey, bikex;
    bikey = parseInt(window.getComputedStyle(bike).getPropertyValue("bottom"))
    // if(bikey)
}, 10);
document.onkeydown = function (e) {
    if (e.keyCode == 39) {
        bikeright -= 20;
        bike.style.right = bikeright + "px"
        var imgsrc = document.getElementById('bike')
        imgsrc.style.backgroundImage = "url(./img/mainbikeright.png)"
    }
    else if (e.keyCode == 37) {
        bikeright += 10;
        bike.style.right = bikeright + "px"
        var imgsrc = document.getElementById('bike')
        imgsrc.style.backgroundImage = "url(./img/mainbikeleft.png)"
    }
    else if (e.keyCode == 38) {
        if (bikespeed < 20) {
            bikespeed++;
            // console.log(bikespeed)
        }
        var bike1 = document.getElementById('bike-1')
        bike1btm = parseInt(window.getComputedStyle(bike1).getPropertyValue("bottom"))
        bike1.style.bottom = (bike1btm - bikespeed) + "px"
        var bike2 = document.getElementById('bike-2')
        bike1btm = parseInt(window.getComputedStyle(bike2).getPropertyValue("bottom"))
        bike2.style.bottom = (bike1btm - bikespeed) + "px"
        a += 0.5;
        console.log(parseInt(a));
    }
    else if (e.keyCode == 40) {
        if (bikespeed > 0)
            bikespeed--;
        // console.log(bikespeed);
    }
    else if (e.keyCode == 13) {
        if (isClose) {
            console.log("close");
        }
    }
}
setInterval(() => {
    a += 0.2
    var tot_dis = document.getElementById('dis')
    tot_dis.innerHTML = parseInt(a);
}, 100);
var test = document.getElementById('screen')
var test1 = test.offsetWidth;
// console.log("erqer" + test1);
document.onkeyup = function (e) {
    var imgsrc = document.getElementById('bike')
    imgsrc.style.backgroundImage = "url(./img/mainbike.png)"
}
var dec = setInterval(() => {
    if (bikespeed > 0) {
        bikespeed -= 3;
        // console.log(bikespeed);
    }
}, 500);
function addcar() {
    var car = document.createElement("div");
    car.classList.add("car")
    var carleft = parseInt(window.getComputedStyle(car).getPropertyValue("left"))
    car.style.left = (Math.floor(Math.random() * 300) + 340) + "px"
    screen.appendChild(car)
    setTimeout(addcar, 2000 - 30 * bikespeed);
};
addcar();
var movecars = setInterval(() => {
    var cars = document.getElementsByClassName("car");
    if (cars != undefined) {
        for (var i = 0; i < cars.length; i++) {
            var car = cars[i];
            var cartop = parseInt(window.getComputedStyle(car).getPropertyValue("top"))
            car.style.top = cartop + (25 + 2.5 * bikespeed) + "px"
        }
    }

}, 120);
var movebike1vertical = setInterval(() => {
    var bike1 = document.getElementById('bike-1')
    bike1btm = parseInt(window.getComputedStyle(bike1).getPropertyValue("bottom"))
    bike1.style.bottom = (bike1btm + 2) + "px"
    bike1top = parseInt(window.getComputedStyle(bike1).getPropertyValue("top"))

}, 2);
var movebike2vertical = setInterval(() => {
    var bike2 = document.getElementById('bike-2')
    bike1btm = parseInt(window.getComputedStyle(bike2).getPropertyValue("bottom"))
    bike2.style.bottom = (bike1btm + 1) + "px"
}, 5);
var movebike1horizontal = setInterval(() => {
    var pos = 0;
    var bike1hor = Math.floor(Math.random() * 30);
    var bike1right = parseInt(window.getComputedStyle(bike1).getPropertyValue("right"))
    var ran = Math.random();
    if (ran < 0.5) {
        pos = 1;
    }
    else {
        pos = 0;
    }
    if (pos) {
        bike1.style.right = (bike1right + bike1hor) + "px";
    }
    else {
        bike1.style.right = (bike1right - bike1hor) + "px";
    }
}, 500);
var movebike2horizontal = setInterval(() => {
    var pos = 0;
    var bike2hor = Math.floor(Math.random() * 50);
    var bike2right = parseInt(window.getComputedStyle(bike2).getPropertyValue("right"))
    var ran = Math.random();
    if (ran < 0.5) {
        pos = 1;
    }
    else {
        pos = 0;
    }
    if (pos) {
        bike2.style.right = (bike2right + bike2hor) + "px";
    }
    else {
        bike2.style.right = (bike2right - bike2hor) + "px";
    }
}, 700);

var test = setInterval(() => {
    // if ((Math.abs(bikey - bike1y)) < 30 || (Math.abs(bikey - bike2y)) < 30) {
    //     console.log("close")
    // }
    var bike1y = parseInt(window.getComputedStyle(bike1).getPropertyValue("bottom"))
    var bike2y = parseInt(window.getComputedStyle(bike2).getPropertyValue("bottom"))
    var bikey = parseInt(window.getComputedStyle(bike).getPropertyValue("bottom"))
    var bike1x = parseInt(window.getComputedStyle(bike1).getPropertyValue("right"))
    var bike2x = parseInt(window.getComputedStyle(bike2).getPropertyValue("right"))
    var bikex = parseInt(window.getComputedStyle(bike).getPropertyValue("right"))
    // console.log("Main bike : " + bikex);
    if (((Math.abs(bikey - bike1y)) < 80 || (Math.abs(bikey - bike2y)) < 80) && ((Math.abs(bikex - bike1x)) < 60 || (Math.abs(bikex - bike2x)) < 60)) {
        // console.log("close")
        isClose = true;
    }
    else
        isClose = false
}, 10);







