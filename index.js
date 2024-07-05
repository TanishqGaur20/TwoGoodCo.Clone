

function videoControl() {
    let cursor = document.getElementById('cursor');
    let Video = document.getElementById('VideoTag');

    Video.addEventListener('mousemove', function (dets) {
        gsap.to(cursor, {
            y: dets.y - 45,
            x: dets.x - 65
        })
    })

    Video.addEventListener('mouseenter', function () {
        cursor.style.opacity = 1;
    })
    Video.addEventListener('mouseleave', function () {
        cursor.style.opacity = 0;
    })
}
videoControl();


function Page1Head() {
    var tl = gsap.timeline();

    tl.from('.svg', {
        y: 100,
        opacity: 0,
        duration: .3,
    })

    tl.from('#page1 h1', {
        y: 100,
        duration: .9,
        delay: .5,
        opacity: 0,
        stagger: 0.3,

    })


    tl.from('#VideoTag', {
        y: 100,
        duration: .9,
        delay: .5,
        opacity: 0,
        stagger: 0.3
    })
}

Page1Head();

function centerBox() {
    gsap.from('.centerBox', {
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: '.centerBox',
            scroller: 'body',
            start: 'top 80%',
            end: 'top 40%',
            scrub: 2
        }
    })
}

centerBox();

function page4Images() {
    gsap.from('.page4First2img', {
        y: 100,
        duration: 1,
        delay: 1,
        opacity: 0,
        scrollTrigger: {
            trigger: '.page4First2img',
            scroller: 'body',
            start: 'top 70%',
            end: 'top 45%',
            scrub: 2
        }
    })

    gsap.from('.page4Last2img', {
        y: 100,
        duration: 1,
        delay: 1,
        opacity: 0,
        scrollTrigger: {
            trigger: '.page4Last2img',
            scroller: 'body',
            start: 'top 50%',
            end: 'top 25%',
            scrub: 2
        }
    })

    gsap.from('.page4text', {
        x: -500,
        duration: 2,
        opacity: 0,
        scrollTrigger: {
            trigger: '.page4text',
            scroller: 'body',
            start: 'top 70%',
            end: 'top 40%',
            scrub: 2
        }
    })
}
page4Images()

function Page4ImageCursor() {
    var Page4ImageSec = document.getElementsByClassName('Page4ImageSec')[0];
    var Page4Cursor = document.getElementsByClassName('Page4Cursor');

    Page4ImageSec.addEventListener('mousemove', function (dets) {
        console.log('entere');
        gsap.to(Page4Cursor, {
            x: dets.x - 50,
            y: dets.y - 40
        })
    })

    Page4ImageSec.addEventListener('mouseenter', function (dets) {
        gsap.to(Page4Cursor, {
            scale: 1
        })
    })

    Page4ImageSec.addEventListener('mouseleave', function (dets) {
        gsap.to(Page4Cursor, {
            scale: 0
        })
    })
}
Page4ImageCursor()

function footerAnim() {
    gsap.from('.foot1', {
        opacity: 0,
        x: -100,
        duration: 1,
        scrollTrigger: {
            trigger: '.foot1',
            scroller: 'body',
            start: 'top 90%',
            end: 'top 80%',
            scrub: 2,
        }
    })
    gsap.from('.foot2', {
        opacity: 0,
        y: 100,
        duration: 1,
        scrollTrigger: {
            trigger: '.foot2',
            scroller: 'body',
            start: 'top 90%',
            end: 'top 80%',
            scrub: 2,
        }
    })
    gsap.from('.foot3', {
        opacity: 0,
        x: 100,
        duration: 1,
        scrollTrigger: {
            trigger: '.foot3',
            scroller: 'body',
            start: 'top 90%',
            end: 'top 80%',
            scrub: 2,
        }
    })
}
footerAnim();

function Page6() {
    var NameH1 = document.getElementById('NameH1');
    var SplittedContent = NameH1.textContent.split("");
    console.log(SplittedContent);
    NameH1.textContent = "";

    for (let i = 0; i < SplittedContent.length; i++) {
        i < SplittedContent.length / 2 ?
            NameH1.innerHTML += `<span class="a">${SplittedContent[i]}</span>`
            : NameH1.innerHTML += `<span class="b">${SplittedContent[i]}</span>`
    }

    gsap.from('.a', {
        opacity: 0,
        y: 80,
        duration: .5,
        stagger: 0.3,
        scrollTrigger: {
            trigger: '.a',
            scroller: 'body',
            start: 'top 100%',
            end: 'top 97%',
            scrub: 2,

        }
    })
    gsap.from('.b', {
        opacity: 0,
        y: 80,
        duration: .5,
        stagger: -0.3,
        scrollTrigger: {
            trigger: '.b',
            scroller: 'body',
            start: 'top 100%',
            end: 'top 97%',
            scrub: 2,

        }
    })
}
Page6();