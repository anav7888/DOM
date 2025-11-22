let sound = {
    "a" : "./1.mp3",
    "s" : "./2.mp3",
    "d" : "./3.mp3",
    "f" : "./4.mp3",
    "g" : "./5.mp3",
    "h" : "./6.mp3",
    "j" : "./7.mp3",
    "k" : "./8.mp3",
    "l" : "./9.mp3",
    "z" : "./10.mp3",
    "x" : "./11.mp3",
    "c" : "./12.mp3",
    "v" : "./13.mp3",
    "b" : "./14.mp3",
    "n" : "./15.mp3",
    "m" : "./16.mp3",
    "q" : "./17.mp3",
    "w" : "./18.mp3",
    "e" : "./19.mp3",
    "r" : "./20.mp3",
};
var key = document.querySelectorAll("button")
key.forEach(function(elem){
 elem.addEventListener('click',function(){
    let text = elem.innerText.toLowerCase();;
    let audio = new Audio(sound[text])
    audio.play()
 })
 
})
document.addEventListener("keydown", function(event){
   let keypress = event.key.toLowerCase();
   if(sound[keypress]){
    let audio = new Audio(sound[keypress])
    audio.play()
   }
});


