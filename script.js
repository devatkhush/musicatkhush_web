const hamburger = document.querySelector(".hamburger");
const navUnits = document.querySelector(".nav-units");


hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navUnits.classList.toggle("active");
})

document.querySelectorAll(".navlink").forEach(n => n. 
    addEventListener("click",() =>{
        hamburger.classList.remove("active");
        navUnits.classList.remove("active");
    })
)

const socialmenu = document.querySelector(".fa-solid");
const logos = document.querySelector(".logo");

socialmenu.addEventListener("click", () =>{
    socialmenu.classList.toggle("active");
    logos.classList.toggle("active");
})

document.querySelectorAll(".fa-brands").forEach(n => n. 
    addEventListener("click",() =>{
        socialmenu.classList.remove("active");
        logos.classList.remove("active");
    })
)


