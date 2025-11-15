var box  = document.querySelector("#box")
var btn = document.querySelector("button")



btn.addEventListener('click',function(){
    var red = Math.floor(Math.random()*256);
    var green = Math.floor(Math.random()*256);
    var blue = Math.floor(Math.random()*256);
     
    box.style.backgroundColor = `rgb(${red},${green},${blue})`
})