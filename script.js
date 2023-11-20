let smoothscrolling = function(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
        lerp: 0.1
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}

smoothscrolling()

const parent = document.querySelector('.parent')
const h = parent.getBoundingClientRect().height
gsap.set('.sidebar',{
    height: h
})


const allheadlinks = document.querySelectorAll('#head')
const navease = BezierEasing(0.22, 1, 0.36, 1)

allheadlinks.forEach(function(button){
    button.addEventListener('mouseenter',function(){
        gsap.to(button.children[0],{
            y: '-1.3em',
            transform: 'rotate(-9deg)',
            duration: .7,
            ease: navease
        })
        gsap.to(button.children[1],{
            y: '-1.3em',
            transform: 'rotate(0deg)',
            duration: .7,
            ease: navease
        })
    })
    button.addEventListener('mouseleave',function(){
        gsap.to(button.children[0],{
            y: '0em',
            transform: 'rotate(0deg)',
            duration: .7,
            ease: navease
        })
        gsap.to(button.children[1],{
            y: '0em',
            transform: 'rotate(9deg)',
            duration: .7,
            ease: navease
        })
    })
})

const emailbtn = document.querySelector('.email-btn')

emailbtn.addEventListener('mouseenter',function(){
    gsap.to(emailbtn.children[0],{
        y: '-90px',
        transform: 'rotate(-8deg)',
        duration: .7,
        ease: navease
    })
    gsap.to(emailbtn.children[1],{
        y: '-90px',
        transform: 'rotate(0deg)',
        duration: .7,
        ease: navease
    })
})
emailbtn.addEventListener('mouseleave',function(){
    gsap.to(emailbtn.children[0],{
        y: '0',
        transform: 'rotate(0deg)',
        duration: .7,
        ease: navease
    })
    gsap.to(emailbtn.children[1],{
        y: '0',
        transform: 'rotate(8deg)',
        duration: .7,
        ease: navease
    })
})

const allbuttons = document.querySelectorAll('#button')

allbuttons.forEach(function(button){
    button.addEventListener('mouseenter',function(){
        gsap.to(button.children[0],{
            y: '-1.6em',
            transform: 'rotate(-9deg)',
            duration: .7,
            ease: navease
        })
        gsap.to(button.children[1],{
            y: '-1.75em',
            transform: 'rotate(0deg)',
            duration: .7,
            ease: navease
        })
    })
    button.addEventListener('mouseleave',function(){
        gsap.to(button.children[0],{
            y: '0em',
            transform: 'rotate(0deg)',
            duration: .7,
            ease: navease
        })
        gsap.to(button.children[1],{
            y: '0em',
            transform: 'rotate(9deg)',
            duration: .7,
            ease: navease
        })
    })
})

const allfootlinks = document.querySelectorAll('#foot')

allfootlinks.forEach(function(button){
    button.addEventListener('mouseenter',function(){
        gsap.to(button.children[0],{
            y: '-1.6em',
            transform: 'rotate(-9deg)',
            duration: .7,
            ease: navease
        })
        gsap.to(button.children[1],{
            y: '-1.75em',
            transform: 'rotate(0deg)',
            duration: .7,
            ease: navease
        })
    })
    button.addEventListener('mouseleave',function(){
        gsap.to(button.children[0],{
            y: '0em',
            transform: 'rotate(0deg)',
            duration: .7,
            ease: navease
        })
        gsap.to(button.children[1],{
            y: '0em',
            transform: 'rotate(9deg)',
            duration: .7,
            ease: navease
        })
    })
})

const authorbtn = document.querySelector('.author')

authorbtn.addEventListener('mouseenter',function(){
    gsap.to(authorbtn.children[0],{
        y: '-1.53em',
        transform: 'rotate(-8deg)',
        duration: .7,
        ease: navease
    })
    gsap.to(authorbtn.children[1],{
        y: '-1.53em',
        transform: 'rotate(0deg)',
        duration: .7,
        ease: navease
    })
})
authorbtn.addEventListener('mouseleave',function(){
    gsap.to(authorbtn.children[0],{
        y: '0',
        transform: 'rotate(0deg)',
        duration: .7,
        ease: navease
    })
    gsap.to(authorbtn.children[1],{
        y: '0',
        transform: 'rotate(8deg)',
        duration: .7,
        ease: navease
    })
})




let overlayimgs = document.querySelectorAll('.overlay-inner img')
console.log(overlayimgs)


const index = 0;
const easing = BezierEasing(0.33, 1, 0.68, 1);

const zoomin = (curindex) => {
    gsap.to(overlayimgs[curindex],{
      scale: 1.2,
      duration: 10.5,
    })
}

let delay = 0;

const animimage = (currentindex) => {
    if(currentindex>4){
        currentindex=0
    }
    zoomin(currentindex)
    gsap.to(overlayimgs[currentindex],{
        opacity: 1,
        duration: 1.5,
        delay: delay,
        ease: easing,
        onComplete: function(){
        delay=2.5
        gsap.to(overlayimgs[currentindex],{
            opacity: 0,
            duration: 1.5,
            delay: delay,
            ease: easing
        })
        gsap.to(overlayimgs[currentindex],{
            scale: 1,
            delay: 8.5,
        })
        currentindex++;
        animimage(currentindex)
        }
    })
    
} 

animimage(index)

const topoverlay = () => {
    gsap.to('.top-overlay',{
        opacity: 1,
        ease: 'power1.inOut',
        scrollTrigger: {
            scroller: '#main',
            trigger: '.top-overlay',
            start: '0%',
            end: '1%',
            scrub: 2,
            // markers: true
        }
    })
}

topoverlay()

const overlay = document.querySelector('.overlay')

const overlayremove = () => {
    gsap.to(overlay,{
        backgroundColor: '#0a0a0a',
        ease: 'power1.Out',
        scrollTrigger: {
            scroller: '#main',
            trigger: overlay,
            start: '0%',
            end: '100%',
            scrub: 2,
            // markers: true
        }
    })
}

overlayremove()


let xpercent = 0;
let direction = -1;

gsap.to('.container-inner',{
    x: '-=1600px',
    ease: 'power4.Out',
    scrollTrigger: {
        scroller: '#main',
        trigger: '.container-inner',
        start: '-300%',
        end: '500%',
        // markers: true,
        scrub: 2,
        onUpdate: e => direction = e.direction * -1
    }
})

const marquee = () => {
    if(xpercent <= -103){
        xpercent = 0;
    }
    if(xpercent > 0){
        xpercent = -103;
    }
    gsap.set('#m1',{ xPercent: xpercent })
    gsap.set('#m2',{ xPercent: xpercent })
    gsap.set('#m3',{ xPercent: xpercent })
    gsap.set('#m4',{ xPercent: xpercent })
    xpercent += 0.15 * direction;
    requestAnimationFrame(marquee)
}

requestAnimationFrame(marquee)

const navdown = () => {
    gsap.to('.svg-wrap',{
        scale: 0.6,
        transformOrigin: '0% 0%',
        ease: 'power1.Out',
        duration: .5,
        scrollTrigger: {
            scroller: '#main',
            trigger: '.svg-wrap',
            start: '10%',
            end: '10%',
            scrub: 1.6,
            // markers: true
        }
    })
    gsap.to('.nav-links',{
        scale: 0.73,
        transformOrigin: '0% 0%',
        ease: 'power1.Out',
        duration: 1,
        scrollTrigger: {
            scroller: '#main',
            trigger: '.nav-links',
            start: '10%',
            end: '10%',
            scrub: 1.6,
            // markers: true
        }
    })
}

navdown()

let rotate = 0;
let prevX = 0;

const cursors = () => {
    window.addEventListener('mousemove',function(e){
        rotate = (e.clientX - prevX) * 2.6
        gsap.to('.cursor',{
            left: e.clientX,
            top: e.clientY,
            duration: .4,
            ease: Expo
        })
        gsap.to('.page1-scroll',{
            left: e.clientX,
            top: e.clientY,
            duration: .4,
            ease: Expo
        })
        gsap.to('.row-hover',{
            left: e.clientX,
            top: e.clientY,
            duration: .6,
            ease: Expo
        })
        gsap.to('.page1-scroll',{
            rotate: rotate,
            duration: .4,
            ease: 'power1.Out',
            onComplete: function(){
                gsap.to('.page1-scroll',{
                    rotate: 0,
                    duration: .4,
                    ease: 'power1.Out',
                })
            }
        })
        gsap.to('.row-hover',{
            rotate: rotate*0.5,
            duration: .4,
            ease: 'power1.Out',
            onComplete: function(){
                gsap.to('.row-hover',{
                    rotate: 0,
                    duration: .4,
                    ease: 'power1.Out',
                })
            }
        })
        prevX = e.clientX
    })
}

cursors()

const frames = document.querySelectorAll('.frame')

// const gallery = document.querySelector('.gallery')
// console.log(gallery.getBoundingClientRect())


frames.forEach(function(frame){
    frame.addEventListener('mouseenter',function(){
        gsap.to('.page1-scroll',{
            scale: 1,
            duration: .4,
            ease: 'power3.inOut'
        })
        gsap.to(frame.children[0],{
            borderRadius: '50%',
            duration: .5,
            filter: 'grayScale(100%)',
            ease: 'power2.inOut'
        })
        gsap.to(frame.children[0].children[0],{
            scale: 1.05,
            duration: .5,
            ease: 'power2.inOut'
        })
        gsap.to(frame.children[1].children[0].children[0],{
            y: '-1.55em',
            transform: 'rotate(-8deg)',
            duration: .7,
            ease: navease
        })
        gsap.to(frame.children[1].children[0].children[1],{
            y: '-1.55em',
            transform: 'rotate(0deg)',
            duration: .7,
            ease: navease
        })
        gsap.to('.cursor',{
            scale: 6.5,
            duration: .4,
            ease: 'power3.inOut'
        })
    })
    frame.addEventListener('mouseleave',function(){
        gsap.to('.page1-scroll',{
            scale: 0,
            duration: .4,
            ease: 'power3.inOut'
        })
        gsap.to(frame.children[0],{
            borderRadius: '0%',
            duration: .5,
            filter: 'grayScale(0%)',
            ease: 'power2.inOut'
        })
        gsap.to(frame.children[0].children[0],{
            scale: 1,
            duration: .5,
            ease: 'power2.inOut'
        })
        gsap.to(frame.children[1].children[0].children[0],{
            y: '0',
            transform: 'rotate(0deg)',
            duration: .7,
            ease: navease
        })
        gsap.to(frame.children[1].children[0].children[1],{
            y: '0',
            transform: 'rotate(8deg)',
            duration: .7,
            ease: navease
        })
        gsap.to('.cursor',{
            scale: 1,
            duration: .4,
            ease: 'power3.inOut'
        })
    })
})



const servicehover = document.querySelector('.row-hover')
const serviceimages = document.querySelectorAll('.hover-wrap .image')
console.log(serviceimages)

const rows = document.querySelectorAll('.row')
let activeimage = serviceimages[0]
let nextimage;

rows.forEach(function(row){
    row.addEventListener('mouseenter',function(){
        gsap.to(row.children[0],{
            x: '4vw',
            color: '#0a0a0a41',
            duration: .6,
            ease: 'power3.inOut'
        })
        gsap.to(row.children[1],{
            x: '-4vw',
            color: '#0a0a0a41',
            duration: .6,
            ease: 'power3.inOut'
        })
        if( activeimage.getAttribute('check')!==row.getAttribute('check') ){
            gsap.to(activeimage,{
                height: '0%',
                duration: .4,
                ease: 'power1.inOut'
            })
            nextimage = row.getAttribute('check')
            activeimage = document.querySelector(nextimage)
            console.log(activeimage)
            gsap.to(activeimage,{
                height: '100%',
                duration: .4,
                ease: 'power1.inOut'
            })
        }
    })
    row.addEventListener('mouseleave',function(){
        gsap.to(row.children[0],{
            x: '0',
            color: '#0a0a0a',
            duration: .6,
            ease: 'power3.inOut'
        })
        gsap.to(row.children[1],{
            x: '0',
            color: '#0a0a0a',
            duration: .6,
            ease: 'power3.inOut'
        })
    })
})

const page4bottom = document.querySelector('.page4-bottom')

page4bottom.addEventListener('mouseenter',function(){
    gsap.to(servicehover,{
        scale: 1,
        duration: .4,
        ease: 'power1.inOut'
    })
    gsap.to('.cursor',{
        scale: 6.5,
        duration: .4,
        ease: 'power3.inOut'
    })
    gsap.to('.page1-scroll',{
        scale: 1,
        duration: .4,
        ease: 'power3.inOut'
    })
})

page4bottom.addEventListener('mouseleave',function(){
    gsap.to(servicehover,{
        scale: 0,
        duration: .4,
        ease: 'power1.inOut'
    })
    gsap.to('.cursor',{
        scale: 1,
        duration: .4,
        ease: 'power3.inOut'
    })
    gsap.to('.page1-scroll',{
        scale: 0,
        duration: .4,
        ease: 'power3.inOut'
    })
})

const textmove = () => {
    gsap.to('#one',{
        x: '8vw',
        ease: 'power1.Out',
        scrollTrigger: {
          scroller: '#main',
          trigger: '#one',
          start: '-130%',
          end: '450%',
          scrub: 1.7,
        //   markers: true
        }
      })
    gsap.to('#two',{
        x: '15vw',
        ease: 'power1.Out',
        scrollTrigger: {
            scroller: '#main',
            trigger: '#two',
            start: '-230%',
            end: '350%',
            scrub: 1.7,
            // markers: true
        }
    })
    gsap.to('#three',{
        y: '-1vh',
        ease: 'power1.Out',
        scrollTrigger: {
            scroller: '#main',
            trigger: '#three',
            start: '-330%',
            end: '250%',
            scrub: 1.7,
            // markers: true
        }
    })
}

textmove()


const shutter_up = () => {
    gsap.to('.shutter1',{
        top: '-100%',
        ease: 'power1.in',
        stagger: 0.04,
        scrollTrigger: {
            scroller: '#main',
            trigger: '.shutter1',
            start: '-90%',
            end: '-80%',
            // markers: true,
            scrub: 2.8
        }
    })
    gsap.to('.shutter2',{
        top: '-100%',
        ease: 'power1.in',
        stagger: 0.04,
        scrollTrigger: {
            scroller: '#main',
            trigger: '.shutter2',
            start: '-90%',
            end: '-80%',
            // markers: true,
            scrub: 2
        }
    })
}

shutter_up()

const blendmodenav = () => {
    gsap.to('.svg-wrap svg',{
        innerHTML: '<svg height="820" viewBox="0 0 1066 820" width="1066" xmlns="http://www.w3.org/2000/svg"><path d="m532.999 546.66h-266.499v-273.32h532.196l266.504-273.34h-598.835l-466.365 478.335v341.665h333.115l399.749-409.99v409.99h266.481v-478.335h-266.481z" fill="#000"></path></svg>',
        duration: .1,
        // fill: '#000',
        scrollTrigger: {
            scroller: '#main',
            trigger: '.svg-wrap svg',
            start: '3400%',
            end: '3400%',
            markers: true,
            scrub: 2.3
        }
    })
    gsap.to('.nav-links .updown h1:nth-child(1)',{
        color: '#000',
        stagger: 0.1,
        // duration: .1,
        scrollTrigger: {
            scroller: '#main',
            trigger: '.nav-links',
            start: '2000%',
            end: '2000%',
            markers: true,
            scrub: 2.3
        }
    })
}

// blendmodenav()

const scale_elements = document.querySelectorAll('.scaledown')

scale_elements.forEach(function(elem){
    elem.addEventListener('mouseenter',function(){
        gsap.to('.cursor',{
            scale: 0.3,
            duration: .4,
            ease: 'power3.inOut'
        })
    })
    elem.addEventListener('mouseleave',function(){
        gsap.to('.cursor',{
            scale: 1,
            duration: .4,
            ease: 'power3.inOut'
        })
    })
})


const backrows = document.querySelectorAll('.back-rows .row')
const textease = BezierEasing(0.37, 0, 0.63, 1)

const loader = () => {
    gsap.from('.loader-wrap .text-wrap span',{
        top: '1.5em',
        duration: .5,
        delay: .1,
        stagger: -0.08,
        ease: textease
    })
    gsap.to('.loader-wrap .text-wrap span',{
        top: '-1.5em',
        duration: .5,
        delay: 1.8,
        stagger: 0.08,
        ease: textease
    })
    gsap.to('.side-container',{
        left: '-80px',
        duration: .5,
        delay: 2,
        ease: 'power1.inOut'
    })
    gsap.to('.loader',{
        top: '-100%',
        opacity: 0,
        duration: 0.8,
        delay: 2.2,
        ease: 'power3.inOut'
    })
}

loader()
