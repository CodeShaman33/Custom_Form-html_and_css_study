// global variables
var number = Math.floor(Math.random()*5) + 1;

// changing slide 
function changeSlide()
{
    number++;
    if (number > 5) number = 1;

    var file = "<img src=\"screens/screen" + number + ".jpg\"/>";

    document.getElementById("slider").innerHTML = file;

    setTimeout("changeSlide()", 5000);

}