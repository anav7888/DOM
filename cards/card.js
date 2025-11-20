var arr =  [
    {
        fullName: "Anav Andoria",
        image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        profession: "UX Designer",
        description: "Designs apps that feel human. Loves coffee & pixel-perfect layouts.",
    },
    {
        fullName: "Bharat",
        image: "https://plus.unsplash.com/premium_photo-1763265290072-6e127ae83e46?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        profession: "Software Engineer",
        description: "Writes clean code and breaks things just to fix them better.",
    },
    {
        fullName: "Munish",
        image: "https://images.unsplash.com/photo-1762793193663-cc343d78111c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        profession: "Data Scientist",
        description: "Finds patterns in the noise. Speaks fluently in charts and numbers.",
    },
    {
        fullName: "Love",
        image: "https://plus.unsplash.com/premium_photo-1763369800370-a89b6fb2a3d2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        profession: "Content Creator",
        description: "Makes complex topics easy. Lives on caffeine and camera angles.",
    },
    {
        fullName: "Rahul",
        image: "https://images.unsplash.com/photo-1763063556535-5f6174a5c5d4?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        profession: "Tech Expert",
        description: "Makes complex topics easy.Writes clean code and breaks things just to fix them better.",
    },
]

var sum = "";
arr.forEach(function(elem){
    sum += `<div id="card">
    <img src="${elem.image}" alt="">
    <h1 id="name">${elem.fullName}</h1>
    <h2 id="pro">${elem.profession}</h2>
    <p id="des">${elem.description}</p>
</div>`
})

var main = document.querySelector("main")
main.innerHTML = sum