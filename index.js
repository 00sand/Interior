window.onload = function () {
    var slides = document.getElementsByClassName("carousel-item"),
        addActive = function (slide) {
            slide.classList.add("active");
        },
        removeActive = function (slide) {
            slide.classList.remove("active");
        };
    addActive(slides[0]);

    setInterval(function () {
        for (var i = 0; i < slides.length; i++) {
            if (i + 1 == slides.length) {
                addActive(slides[0]);
                slides[0].style.zIndex = 100;
                setTimeout(removeActive, 350, slides[i]); //Doesn't be worked in IE-9
                break;
            }
            if (slides[i].classList.contains("active")) {
                slides[i].removeAttribute("style");
                setTimeout(removeActive, 350, slides[i]); //Doesn't be worked in IE-9
                addActive(slides[i + 1]);
                break;
            }
        }
    }, 6000);
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.toggle('show', entry.isIntersecting)
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el))

const burgerIcon = document.querySelector("#burger")
const navBarMenu = document.querySelector("#nav-links")

burgerIcon.addEventListener('click', () => {
    navBarMenu.classList.toggle('is-active')
})