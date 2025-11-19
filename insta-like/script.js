var icon = document.querySelector("#icons")
var heart = document.querySelector("#heart")

icon.addEventListener('dblclick',function(){
    heart.style.opacity = 1
    heart.style.transform = `translate(-50%,-50%) scale(1) rotate(10deg)`

    setTimeout(()=>{
        heart.style.transform = `translate(-50%,-250%) scale(1) rotate(0deg)`
    },500)
    setTimeout(()=>{
        heart.style.opacity = 0
    },700)
    setTimeout(()=>{
        heart.style.transform = `translate(-50%,-50%) scale(0) rotate(-60deg)`
    },900)
})