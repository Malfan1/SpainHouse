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
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.view__photos-big',
    arrows: false,
});

 $('.view__photos-big').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.view__photos'
});