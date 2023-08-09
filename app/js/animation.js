document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header-comp");
    const main = document.querySelector(".main-sec__words")
    window.addEventListener("scroll", () => { 
        let scrollTop = window.scrollY;
        let mainCenter = main.offsetHeight / 2; 
        console.log(scrollTop);
        console.log(mainCenter);

        if (scrollTop >= mainCenter) {
            header.classList.add("fixed");
            main.style.marginTop = `${header.offsetHeight}px`;
        } else {
            header.classList.remove("fixed");
            main.style.marginTop = `0px`;
        }
    })
})