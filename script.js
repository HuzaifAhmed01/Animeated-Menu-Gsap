
let menu = document.querySelector('nav i');
let close = document.querySelector('.menu i')


let tl =gsap.timeline();

tl.to(".menu",{
right:0,
duration:.6,
// ease: "power1.in",

})
tl.from('.menu li',{

    x:160,
    duration:.3,
    stagger:.1,
    opacity:0,
})
tl.from('.menu i',{
    opacity:0,
    scale:0,
    duration:.8,
    rotate:180
})

tl.pause();

menu.addEventListener('click',()=>{
tl.play();
})
close.addEventListener('click',()=>{
tl.reverse();
})
