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