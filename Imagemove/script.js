var hover = document.querySelectorAll(".hover")
hover.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    elem.childNodes[3].style.opacity = 1
    elem.childNodes[3].style.scale = 1
  })
  elem.addEventListener("mousemove",function(dets){
    elem.childNodes[3].style.left = dets.x+"px"
    elem.childNodes[3].style.top = dets.y+"px"
  })
  elem.addEventListener("mouseleave",function(){
      elem.childNodes[3].style.scale = 0
    elem.childNodes[3].style.opacity = 0
  })
})
