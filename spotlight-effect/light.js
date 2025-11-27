var main = document.querySelector("main")

window.addEventListener("click", () => {
    document.querySelector("video").muted = false; 
    document.querySelector("video").play();       
});
main.addEventListener('mousemove',(e)=>{
    document.body.style.setProperty("--y", e.clientY + "px")
    document.body.style.setProperty("--x", e.clientX + "px")
})
