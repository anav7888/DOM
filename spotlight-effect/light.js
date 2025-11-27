var main = document.querySelector("main")

main.addEventListener('mousemove',(e)=>{
    console.log(e.clientX,e.clientY)
    main.style.setProperty("--x", e.clientX + "px")
    main.style.setProperty("--y", e.clientY + "px")
})