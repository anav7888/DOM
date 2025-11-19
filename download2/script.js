var btn = document.querySelector("button")
var grow = 0;
var hh = document.querySelector("#hh")
var innerbar = document.querySelector("#innerbar")
var card = document.querySelector("#card")
var num = 50 + Math.floor(Math.random()*50)
var r = Math.floor(Math.random()*100)
var g = Math.floor(Math.random()*100)
var b = Math.floor(Math.random()*100)

btn.addEventListener('click',function(){
    
  var time =  setInterval(()=>{
    btn.style.pointerEvents = "none"
    btn.style.opacity = 0.7
    btn.innerHTML = "Dowloading..."
    btn.style.fontSize = "15px"
    grow++
    hh.innerHTML = grow +"%"
    innerbar.style.width = grow+"%"
   },num)


   setTimeout(()=>{
    clearInterval(time)
    btn.style.opacity = 1
    btn.innerHTML = "Dowloaded"
    btn.style.fontSize = "20px"
    var h1 = document.createElement("h1")
    card.appendChild(h1)
    h1.innerHTML = `Your file downloaded in ${num/10} sec`
    h1.style.fontSize = "15px"
    h1.style.fontWeight = "500"
    h1.style.marginTop = "10px"
    h1.style.color =`rgb(${r},${g},${b})`
   },num*100)


})