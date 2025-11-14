function counter(){
    var h1 = document.querySelector("h1")
var inc = document.querySelector("#inc")
var reset = document.querySelector("#reset")
var dec = document.querySelector("#dec")
var count = 0;

inc.addEventListener('click',function(){
    count++;
    h1.innerHTML = count
})

dec.addEventListener('click',function(){
    count--;
    h1.innerHTML = count
})

reset.addEventListener('click',function(){
    count = 0
    h1.innerHTML = count
})
}
counter()