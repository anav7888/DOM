var btn = document.querySelector("button")
var grow = 0;
var h = document.querySelector("#btmh1")
var bar = document.querySelector("#innerbar")
var num = 50 + Math.floor(Math.random()*50)
var card = document.querySelector("#card")



btn.addEventListener('click',function(){
   

   var time =  setInterval(()=>{
    btn.style.pointerEvents= "none"
        grow++
        h.innerHTML = grow+"%"
        bar.style.width = grow+"%"

    },num)
    setTimeout(()=>{
        clearInterval(time)
        btn.innerHTML = "Downloaded"
        var h1 = document.createElement("h1")
        card.appendChild(h1)
        h1.innerHTML = `Your Download completed in ${num/10} Sec`
        h1.style.fontWeight = 600
    },num*100)

    
})