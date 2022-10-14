var bike = document.getElementById('bike')
var bikespeed = 1
var bike1speed = 100
var bike2speed = 90
var bike3speed = 85
var bike4speed = 65
var isGameover = 1
var e = 0
var pos = 0
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
        if (bikeright > 350) {
            bikeright -= 20;
            bike.style.right = bikeright + "px"
        }
        var imgsrc = document.getElementById('bike')
        imgsrc.style.transform = "rotate(20deg)"
    }
    else if (e.keyCode == 37) {
        if (bikeright < 590) {
            bikeright += 10;
            bike.style.right = bikeright + "px"
        }
        var imgsrc = document.getElementById('bike')
        // imgsrc.style.backgroundImage = "url(./img/mainbikeleft.png)"
        imgsrc.style.transform = "rotate(-20deg)"
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
        // console.log(parseInt(a));
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
    tot_dis.innerHTML = (parseInt(a)) + "m";
}, 100);
var test = document.getElementById('screen')
var test1 = test.offsetWidth;
// console.log("erqer" + test1);
document.onkeyup = function (e) {
    var imgsrc = document.getElementById('bike')
    imgsrc.style.transform = "rotate(0deg)"
}
var dec = setInterval(() => {
    if (bikespeed > 0) {
        bikespeed -= 3;
        // console.log(bikespeed);
    }
}, 500);
function addcar() {
    var randomno = Math.random();
    if (randomno < 0.25) {
        var car = document.createElement("div");
        car.classList.add("car")
        car.style.left = 350 + "px"
        pos = 1;
    }
    else if (randomno <= 0.5) {
        var car = document.createElement("div");
        car.classList.add("car")
        car.style.left = 420 + "px"
        pos = 2;
    }
    else if (randomno <= 0.75) {
        var car = document.createElement("div");
        car.classList.add("car")
        car.style.left = 490 + "px"
        pos = 3;
    }
    else {
        var car = document.createElement("div");
        car.classList.add("car")
        car.style.left = 560 + "px"
        pos = 4;
    }
    screen.appendChild(car)
    if(isGameover)
    setTimeout(addcar, 2500 - 30 * bikespeed);
};
if(isGameover)
addcar();
var movecars = setInterval(() => {
    var cars = document.getElementsByClassName("car");
    // if (cars != undefined) {
    for (var i = 0; i < cars.length; i++) {
        var car = cars[i];
        var cartop = parseInt(window.getComputedStyle(car).getPropertyValue("top"))
        var carbtm = parseInt(window.getComputedStyle(car).getPropertyValue("bottom"))
        var carright = parseInt(window.getComputedStyle(car).getPropertyValue("right"))
        var bikeright = parseInt(window.getComputedStyle(bike).getPropertyValue("right"))
        car.style.top = cartop + (1 + parseInt(bikespeed / 4)) + "px"
        var biketop = parseInt(window.getComputedStyle(bike).getPropertyValue("top"));
        // if ((carbtm >145&&carbtm<155)&&((Math.abs(carright - bikeright))>10)&&((Math.abs(carright - bikeright))<70)) {
        //         e++;
        //         var ii = document.getElementById("test")
        //     ii.innerHTML = (e);
        // }
        console.log(bikeright);
        // console.log(carright);
        // console.log(car.style.top);
        // bike.style.right = 380+"px"
        if ((carbtm > 45 && carbtm < 90) && (car.style.left == "350px")&&(bikeright>550&&bikeright<590)) {
            // console.log(car.style.bottom);
            e++;
            var ii = document.getElementById("test")
            ii.innerHTML = (e);
            isGameover = 0;
        }
        else if ((carbtm > 45 && carbtm < 90) && (car.style.left == "420px")&&(bikeright>490&&bikeright<530) ) {
            // console.log(car.style.bottom);
            e++;
            var ii = document.getElementById("test")
            ii.innerHTML = (e);
            isGameover = 0;
        }
        else if ((carbtm >45 && carbtm < 90) && (car.style.left == "490px")&&(bikeright>400&&bikeright<450)) {
            console.log(car.style.left);
            e++;
            var ii = document.getElementById("test")
            ii.innerHTML = (e);
            isGameover = 0;
        }
        else if ((carbtm > 45 && carbtm < 90) && (car.style.left == "560px")&&(bikeright>320&&bikeright<390)) {
            console.log(car.style.left);
            e++;
            var ii = document.getElementById("test")
            ii.innerHTML = (e);
            isGameover = 0;
        }
    }
}, 5);
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
    var bike1left = parseInt(window.getComputedStyle(bike1).getPropertyValue("left"))
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
    if (pos && (bike1left > 380)) {
        bike1.style.right = (bike1right + bike1hor) + "px";
    }
    else if (!pos && (bike1left < 560)) {
        bike1.style.right = (bike1right - bike1hor) + "px";
    }
}, 500);
var movebike2horizontal = setInterval(() => {
    var bike2left = parseInt(window.getComputedStyle(bike2).getPropertyValue("left"))
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
    if (pos && (bike2left > 380)) {
        bike2.style.right = (bike2right + bike2hor) + "px";
    }
    else if (!pos && (bike2left < 560)) {
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
setInterval(() => {
    if (!isGameover) {
        var yu = document.getElementsByClassName("board");
        yu[0].style.display = "flex";
        console.log("ergdfgsdfg");
        // var iu = document.getElementsByClassName("gameover");
        // iu[0].style.display = "block";
        // document.getElementById("gameover").style.display="block";
    }
}, 2);


setInterval(() => {
    var op = document.getElementById("road")
op.style.animationDuration = 100 - ((bikespeed - 0) * 4) + "s"
},2);

// function moveroad() {
//      var op = document.getElementById("road")
// op.style.animationDuration = "50s"
// }

// setTimeout(moveroad, 2500 - 30 * bikespeed);
function start1()
{
    var st=document.getElementById("start");
    st.style.display="none";
}
function restart()
{
         yu[0].style.display="none";
         isGameover=1;
         console.log(2);
}







