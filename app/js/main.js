const cli = document.querySelector(".js-burger");
const navMob = document.querySelector(".js-navmob"); 

document.addEventListener("click", handleScroll);

function handleScroll({ target }) { 
    if (target.classList.contains("js-burger")) { 
        navMob.classList.add("block-menu");
    } else if(target.classList.contains("js-close")) {
        navMob.classList.remove("block-menu");
    } else {
        return;
    }
}

$('.view__photos').slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.view__photos-big',
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
    }
  }],
});

$('.view__photos-big').slick({
  asNavFor: '.view__photos',
  fade: true,
  arrows: true,
   responsive: [{
     breakpoint: 1200,
     settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    }
  }]
});

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header-comp");
    const main = document.querySelector(".main-sec__words");
    const scrollItem = document.querySelectorAll(".scroll-item");

    const scrollAnim = () => {
        let windowCenter = (window.innerHeight / 1.05) + window.scrollY;
        scrollItem.forEach(el => {
            let scrollOffset = el.offsetTop + (el.offsetHeight / 1.05);
            if (windowCenter >= scrollOffset) {
                el.classList.add("anim-class");
            } else {
                el.classList.remove("anim-class");
            }
        })
    };

    const fixHeader = () => { 
        let scrollTop = window.scrollY;
        let mainCenter = main.offsetHeight / 2; 

        if (scrollTop >= mainCenter) {
            header.classList.add("fixed");
            main.style.marginTop = `${header.offsetHeight}px`;
        } else {
            header.classList.remove("fixed");
            main.style.marginTop = `0px`;
        }
    }

    fixHeader();
    scrollAnim();
    window.addEventListener("scroll", () => { 
        fixHeader();
        scrollAnim();

    })
})