
// popup function run after 5 seconds
let val = setTimeout(popup_func, 5000);

function popup_func(){
    myPopup.classList.add("show");
}

// cross button of popup
closePopup.addEventListener("click", function () {
        myPopup.classList.remove("show");
});


function marqueeToHorizontalScroll(x) {
    if (x.matches) { // If media query matches
        const underMediaScroll = document.querySelector('.under-media-scroll');
        underMediaScroll.style.display = "block";
        const outerMediaMarquee1 = document.querySelector('.outer-media-marquee1');
        outerMediaMarquee1.style.display = "none";
        const outerMediaMarquee2 = document.querySelector('.outer-media-marquee2');
        outerMediaMarquee2.style.display = "none";  
    } else {
        const underMediaScroll = document.querySelector('.under-media-scroll');
        underMediaScroll.style.display = "none";
        const outerMediaMarquee1 = document.querySelector('.outer-media-marquee1');
        outerMediaMarquee1.style.display = "block";
        const outerMediaMarquee2 = document.querySelector('.outer-media-marquee2');
        outerMediaMarquee2.style.display = "block";
    }
}

var x = window.matchMedia("(max-width: 1276px)")
marqueeToHorizontalScroll(x) // Call listener function at run time
x.addListener(marqueeToHorizontalScroll) // Attach listener function on state changes