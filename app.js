let main = document.querySelector("#main");
let frame;
let element;

let circles = document.querySelectorAll(".circle");

function mousemover(frame, element){
    frame.addEventListener('mousemove', (dets) => {
        element.style.transform = `translate(${dets.screenX}px, ${dets.screenY}px)`;
    })
}

circles.forEach(circle => {
    mousemover(main, circle);
});

let downi = document.querySelector(".down-icons");
let downi2 = document.querySelector(".down-icon");
let di = document.querySelector("#di");

downi2.addEventListener("click", () => {
    window.scroll({
        top : 900,
        behavior : "smooth"
    })
})


let theplug = document.querySelector(".theplug");
let theplugh = document.querySelector(".theplugh");
let theplugimg = document.querySelector("#plugimg");

let theixp = document.querySelector(".exp");
let theixph = document.querySelector(".exph");
let theexpimg = document.querySelector("#expimg");

let thehudu = document.querySelector(".hudu");
let thehuduh = document.querySelector(".huduh");
let thehuduimg = document.querySelector("#huduimg");

function mousemover2(frame, element){
    frame.addEventListener('mousemove', (dets) => {
        element.style.transform = `translate(${dets.screenX - 260}px, ${dets.screenY - 260}px)`;
    })
}



gsap.from("#nav", {
    y : '-100',
    duration : 1,
    opacity : 0,
    delay : 5,
})

let h1s = document.querySelectorAll(".be");

h1s.forEach(h1 => {
    gsap.to(h1, {
        y : '0',
        duration : 2,
        opacity : 1,
        delay : 5,
        ease : Expo.ease
    })
});


gsap.from(".smallh5", {
    y : '-100',
    duration : 1,
    opacity : 0,
    delay : 6.5,
    ease : Expo.linear,
    Stagger : 0.2
})

gsap.from(".smalla", {
    y : '100',
    duration : 1,
    opacity : 0,
    delay : 6.5,
    ease : Expo.linear,
    Stagger : 0.2
})


let elems = document.querySelectorAll(".elem");

elems.forEach(element => {

    let rotate = 0;
    let diffrot = 0;

    element.addEventListener("mousemove", (dets)=>{

        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;

        let difft = dets.clientY - element.getBoundingClientRect().top -150;
        let diffl = dets.clientX - element.getBoundingClientRect().left - 200
        
        gsap.to(element.querySelector("img"), {
            opacity: 1,
            top : difft,
            ease: Power1,
            left: diffl,
            rotate : gsap.utils.clamp(-20, 20, diffrot * 0.5)
        })

        element.querySelector("img").style.display = "flex";


    })

    element.addEventListener("mouseleave", (dets)=>{
        
        gsap.to(element.querySelector("img"), {
            opacity: 0,
        })

        element.querySelector("img").style.display = "none";
    })
});


let loading = document.querySelector(".loading");

setTimeout(() => {

    loading.style.height = "0%";

}, 4000)