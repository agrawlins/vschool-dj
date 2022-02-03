document.addEventListener("mouseover", hover);
document.addEventListener("mousedown", hold);  
document.addEventListener("mouseup", release);
document.addEventListener("dblclick", dblClick);  
document.addEventListener("wheel", scroll);  

function hover() {
    document.getElementById("colorBox").innerHTML = "Moused over!";
    document.getElementById("colorBox").style.backgroundColor = "blue";
}
function hold() {
    document.getElementById("colorBox").innerHTML = "Holding...";
    document.getElementById("colorBox").style.backgroundColor = "red";
}
function release() {
    document.getElementById("colorBox").innerHTML = "Released!";
    document.getElementById("colorBox").style.backgroundColor = "green";
}
function dblClick() {
    document.getElementById("colorBox").innerHTML = "Double-Clicked!";
    document.getElementById("colorBox").style.backgroundColor = "purple";
}
function scroll() {
    document.getElementById("colorBox").innerHTML = "Scrolling!";
    document.getElementById("colorBox").style.backgroundColor = "orange";
}

