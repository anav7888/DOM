var main = document.querySelector("main")
var letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
var h1 = document.querySelector("h1")
var innerh1 = h1.innerHTML
var count = 0

h1.addEventListener('mouseenter',function(){
    function random(){
        var arr =  innerh1.split("").map((char,idx)=>{
            // console.log(char,idx)
            if(idx<count){
                return char
            }
          return letter.split("")[Math.floor(Math.random()*53)]
        }).join("").toUpperCase()
       h1.innerHTML = arr
       count += 0.5
      
     }

     setInterval(random,60)
})
