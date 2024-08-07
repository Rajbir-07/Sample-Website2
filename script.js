
gsap.to("#nav",{
    backgroundColor: "#595959",
    duration: 0.5,
    height:"70px",
    scrollTrigger:{
        trigger:"nav",
        scroller:"body",
       // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor: "#C5C6C7",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        //markers:true,
        start: "top -25%",
        end: "top -70%",
        scrub:2
    }
})

gsap.from("#about-us img,#description", {
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 70%",
        end:"top 65% ",
        scrub: 3
    }
}) 

gsap.from("#quote1", {
    y:-40,
    x:-40,
    scrollTrigger:{
        trigger:"#quote1",
        scroller:"body",
        start:"top 55%",
        end:"top 53%",
        scrub:4
    }
})
gsap.from("#quote2", {
    y: 40,
    x: 40,
    scrollTrigger:{
        trigger:"#quote1",
        scroller:"body",
        start:"top 55%",
        end:"top 53%",
        scrub:4
    }
})

gsap.from("#page4 h1", {
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }
})