const navlist = document.querySelector("#navlist");
const links = navlist.querySelectorAll("li a");
const wrapper = document.querySelector("#wrapper");

// MOBILENAV JS
menu.addEventListener("click", function () {
    setTimeout(() => {
        menu.classList.toggle("active");
    }, 600);
    navlist.classList.toggle("animate-right");
});

wrapper.addEventListener("click", function () {
    setTimeout(() => {
        menu.classList.remove("active");
    }, 200);
    setTimeout(() => {
        navlist.classList.add("animate-right");
    }, 0);
});

links.forEach(link => {
    link.addEventListener("click", function () {
        setTimeout(() => {
            menu.classList.remove("active");
        }, 1000);
        setTimeout(() => {
            navlist.classList.add("animate-right");
        }, 800);
    });
});