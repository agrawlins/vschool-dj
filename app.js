var x = document.getElementById("myBtn");
x.addEventListener("mouseover", hover);
x.addEventListener("mousedown", holdClick);
x.addEventListener("mouseup", releaseClick);
x.addEventListener("dblclick", doubleClick);
addEventListener("mousewheel", mouseWheel);
addEventListener("keypress", keyPress);

function hover() {
document.getElementById("demo").innerHTML = "Moused Over!";
}

function holdClick() {
    document.getElementById("demo").innerHTML = "Holding!";
}

function releaseClick() {
    document.getElementById("demo").innerHTML = "Released!";
}

function doubleClick() {
    document.getElementById("demo").innerHTML = "Double-Clicked!";
}

function mouseWheel() {
    document.getElementById("demo").innerHTML = "Scrolling!";
}

function keyPress() {
    
}