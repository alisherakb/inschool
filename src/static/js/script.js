import "./maskinput";



$(window).on('scroll', function () {
    if (pageYOffset > 0) {
        $('.header').addClass('scroll');
    } else {
        $('.header').removeClass('scroll');
    }
});


jQuery(function ($) {
    $("#tel").mask("+38071 9999999");
});


$('.teachers__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});


(function () {

    const target = document.querySelector(".target");
    const links = document.querySelectorAll(".header__nav a");

    function mouseenterFunc() {
        let link = null;
        if (!this) {
            for (let i = 0; i < links.length; i++) {
                if (links[i].parentNode.classList.contains("active")) {
                    link = links[i];
                }
            }
        } else {
            link = this;
        }
        for (let i = 0; i < links.length; i++) {
            if (links[i].parentNode.classList.contains("active")) {
                links[i].parentNode.classList.remove("active");
            }
            links[i].style.opacity = "0.8";
        }

        link.parentNode.classList.add("active");
        link.style.opacity = "1";

        const width = link.getBoundingClientRect().width;
        const height = link.getBoundingClientRect().height;
        const left = link.getBoundingClientRect().left;
        const top = link.getBoundingClientRect().top;
        const color = ["white"];

        target.style.width = `${width}px`;
        target.style.height = `${height}px`;
        target.style.left = `${left}px`;
        target.style.top = `${top}px`;
        target.style.borderColor = color;
        target.style.transform = "none";

    }

    for (let i = 0; i < links.length; i++) {
        // links[i].addEventListener("click", (e) => e.preventDefault());
        links[i].addEventListener("mouseenter", mouseenterFunc);
    }

    function resizeFunc() {
        const active = document.querySelector(".header__nav li.active");

        if (active) {
            const width = active.getBoundingClientRect().width;
            const height = active.getBoundingClientRect().height;
            const left = active.getBoundingClientRect().left;
            const top = active.getBoundingClientRect().top;
            console.log(width, height, left, top)

            target.style.width = `${width}px`;
            target.style.height = `${height}px`;
            target.style.left = `${left}px`;
            target.style.top = `${top}px`;

            // const left = active.getBoundingClientRect().left;
            // const top = active.getBoundingClientRect().top;
            // console.log(left, top);

            // target.style.left = `${left}px`;
            // target.style.top = `${top}px`;
        }
    }

    window.addEventListener("resize", resizeFunc);

    $(document).ready(function () {
        mouseenterFunc();
    });
})();