const cli = document.querySelector(".js-burger");
const navMob = document.querySelector(".js-navmob") 

document.addEventListener("click", handleScroll);

function handleScroll({ target }) { 
    if (target.classList.contains("js-burger")) { 
        navMob.classList.add("block-menu");
        
    } else if(target.classList.contains("js-close")) {
        navMob.classList.remove("block-menu")
    } else {
        return;
    }
}