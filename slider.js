// global variables
var number = Math.floor(Math.random()*5) + 1;

var timer1 = 0
var timer2 = 0


function hide()
{
    $("#slider").fadeOut(500);

}

// changing slide 
function changeSlide()
{
    number++;
    if (number > 5) number = 1;

    var file = "<img src=\"screens/screen" + number + ".jpg\"/>";

    document.getElementById("slider").innerHTML = file;

    timer1 = setTimeout("changeSlide()", 5000);

}

function setSlide(slideNumber)
{
    clearTimeout(timer1);
    number = slideNumber - 1;
    changeSlide();
}