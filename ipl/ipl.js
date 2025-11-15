var arr = [
    {
        name:"CSK",
        istcolor:"Yellow",
        scndcolor:"golden",
        text:"yellow",
        img:"./img/csk.jpg",   
    },
    {
        name:'GT',
        istcolor:'Yellow',
        scndcolor:'Blue',
        text:'yellow',
        img:'./img/gt.jpg',
    },
    {
        name:'PBKS',
        istcolor:'crimson',
        scndcolor:'black',
        text:'crimson',
        img:'./img/pbks.jpg',
    },
    {
        name:'RCB',
        istcolor:'blue',
        scndcolor:'Crimson',
        text:'blue',
        img:'./img/rcb.jpg',
    },
    {
        name:'RR',
        istcolor:'pink',
        scndcolor:'blue',
        text:'pink',
        img:'./img/rr.jpg',
    },
    {
        name:'SRH',
        istcolor:'orange',
        scndcolor:'black',
        text:'orange',
        img:'./img/srh.jpg',
    },
]

var main = document.querySelector("main")
var content = document.querySelector("#content")
var teamname = document.querySelector("#teamname")
var pic = document.querySelector("#img")
var btn = document.querySelector("#btn")


btn.addEventListener('click',function(){
    var change = arr[Math.floor(Math.random()*arr.length)]

    main.style.backgroundColor = change.istcolor
    content.style.backgroundColor = change.scndcolor
    teamname.style.color = change.text
    teamname.innerHTML = change.name
    pic.src = change.img

})


