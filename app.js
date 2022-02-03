document.addEventListener("mouseover", hover);
document.addEventListener("mousedown", hold);  
document.addEventListener("mouseup", release);
document.addEventListener("dblclick", dblClick);  
document.addEventListener("wheel", scroll); 
function hover() {
    document.getElementById("colorBox").innerHTML = "Moused over!";
    document.body.style.backgroundColor = "blue";
}
function hold() {
    document.getElementById("colorBox").innerHTML = "Holding...";
    document.body.style.backgroundColor = "red";
}
function release() {
    document.getElementById("colorBox").innerHTML = "Released!";
    document.body.style.backgroundColor = "green";
}
function dblClick() {
    document.getElementById("colorBox").innerHTML = "Double-Clicked!";
    document.body.style.backgroundColor = "purple";
}
function scroll() {
    document.getElementById("colorBox").innerHTML = "Scrolling!";
    document.body.style.backgroundColor = "orange";
}
function keyPress() {
    let txt = document.getElementById('txt');
    txt.addEventListener('keydown')
}