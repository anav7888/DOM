let sound = {
    a : "./piano/a.mp3",
    b : "./piano/b.mp3",
    c : "./piano/c.mp3",
    d : "./piano/d.mp3",
    e : "./piano/e.mp3",
    f : "./piano/f.mp3",
    g : "./piano/g.mp3",
    h : "./piano/h.mp3",
    i : "./piano/i.mp3",
    j : "./piano/j.mp3",
    k : "./piano/k.mp3",
    l : "./piano/l.mp3",
    m : "./piano/m.mp3",
    n : "./piano/n.mp3",
    o : "./piano/o.mp3",
    p : "./piano/p.mp3",
    q : "./piano/q.mp3",
    r : "./piano/r.mp3",
    s : "./piano/s.mp3",
    t : "./piano/t.mp3",
    w : "./piano/w.mp3",
    x : "./piano/x.mp3",
    y : "./piano/y.mp3",
    z : "./piano/z.mp3",
    "1" : "./piano/1.mp3",
    "2" : "./piano/2.mp3",
    "3" : "./piano/3.mp3",
    "4" : "./piano/4.mp3",
    "5" : "./piano/5.mp3",
    "6" : "./piano/6.mp3",
    "7" : "./piano/7.mp3",
    "8" : "./piano/8.mp3",
    "9" : "./piano/9.mp3",

}

var key = document.querySelectorAll(".key")

key.forEach(function(elem){
   elem.addEventListener('click',function(){
    var text =  elem.innerHTML.toLowerCase()
    var audio = new Audio(sound[text])
    audio.play()
   })
})

document.addEventListener("keydown",function(event){
    var value = event.key.toLowerCase()
    if(sound[value]){
        
        let audio = new Audio(sound[value])
        audio.play()
    }
})