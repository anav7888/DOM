var main = document.querySelector("main")
var letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
var h1 = document.querySelector("h1")
var innerh1 = h1.innerHTML


h1.addEventListener('mouseenter',()=>{
    let count = 0;
    var intervl = setInterval(()=>{
    var arr = innerh1.split("").map((elem,idx)=>{
        return letter.split("")[Math.floor(Math.random()*53)]
    }).join("")
    
    h1.innerHTML = arr
    
   },30)


   setTimeout(()=>{
    clearInterval(intervl)
    h1.innerHTML = innerh1
   },300)
    
 
})