var btn = document.querySelector("button")
var msg = document.querySelector("h2")
var count = 0
btn.addEventListener('click',function(){
    if(count == 0){
        btn.innerHTML = "Remove friend"
    btn.style.backgroundColor = `rgb(192, 3, 3)`
    msg.innerHTML = "Message"
    msg.style.color = `rgb(0, 165, 113)`
    count = 1
    }else{
        btn.innerHTML = "Add friend"
        btn.style.backgroundColor = `rgb(0, 165, 113)`
        msg.innerHTML = "Stranger"
        msg.style.color = `rgb(192, 3, 3)`
      count = 0
    }
})