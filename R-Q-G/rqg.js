var main = document.querySelector("main")
var btn = document.querySelector("button")
var arr = ["Be here now.","Trust yourself.","Enjoy life.","Ask for help.","Never stop dreaming.","Progress, not perfection.","Learn from yesterday.","This shall pass.","You are enough.","Do it now."]



btn.addEventListener('click',function(){
    var quotes = arr[Math.floor(Math.random()*arr.length)]
    var x = Math.random()*80
    var y = Math.random()*80
    var rot = Math.random()*360
    var scl = Math.random()*1.5

    var h1 = document.createElement("h1")
    main.appendChild(h1)
    h1.innerHTML = quotes
    h1.style.position = "absolute"
    h1.style.color = "#dcdcdc"
    h1.style.left = x+"%"
    h1.style.top = y+"%"
    h1.style.rotate = rot+"deg"
    h1.style.whiteSpace = "noWrap"
    h1.style.scale = scl
})


