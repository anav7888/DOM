var main = document.querySelector("main")
var btn = document.querySelector("button")
var r = Math.floor(Math.random()*256)
var g = Math.floor(Math.random()*256)
var b = Math.floor(Math.random()*256)


btn.addEventListener('click',function(){
    var r = Math.floor(Math.random()*256)
    var g = Math.floor(Math.random()*256)
    var b = Math.floor(Math.random()*256)
    var x = Math.random()*90
    var y = Math.random()*90
    var rot = Math.random()*360
    var div = document.createElement("div")

    main.appendChild(div)
    div.style.width = "0"
    div.style.height = "0"
    div.style.borderLeft = "50px solid transparent"
    div.style.borderRight = "50px solid transparent"
    div.style.borderBottom = `86.6px solid rgb(${r},${g},${b})`
    div.style.backgroundColor = "transparent"
    div.style.position = "absolute"
    div.style.left = x+"%"
    div.style.top = y+"%"
    div.style.rotate = rot+"deg"
})

